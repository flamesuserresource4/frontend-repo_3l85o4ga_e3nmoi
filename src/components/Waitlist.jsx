import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Submitting...' })
    try {
      const res = await fetch(`${API_BASE}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source: 'landing' }),
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus({ state: 'success', message: 'You are on the list! Check your inbox for a confirmation.' })
      setEmail('')
      setName('')
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="waitlist" className="relative mx-auto w-full max-w-4xl rounded-2xl bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur sm:p-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get early access</h2>
        <p className="mt-2 text-gray-600">Join the waitlist to earn yield while your strategies work for you.</p>
      </div>
      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full rounded-xl border border-gray-300/70 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          />
        </div>
        <div className="sm:col-span-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
            className="w-full rounded-xl border border-gray-300/70 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          />
        </div>
        <div className="sm:col-span-6">
          <button
            type="submit"
            disabled={status.state === 'loading'}
            className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status.state === 'loading' ? 'Joining...' : 'Join the waitlist'}
          </button>
        </div>
      </form>
      {status.state !== 'idle' && (
        <p className={`mt-3 text-sm ${status.state === 'success' ? 'text-green-600' : status.state === 'error' ? 'text-red-600' : 'text-gray-600'}`}>
          {status.message}
        </p>
      )}
    </section>
  )
}
