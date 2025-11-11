import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedInput from './AnimatedInput'
import AnimatedCheck from './AnimatedCheck'

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
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Get early access</h2>
        <p className="mt-2 text-gray-600">Join the waitlist to earn yield while your strategies work for you.</p>
      </motion.div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-6"
      >
        <div className="sm:col-span-3">
          <AnimatedInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
          />
        </div>
        <div className="sm:col-span-3">
          <AnimatedInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>
        <div className="sm:col-span-6">
          <motion.button
            type="submit"
            disabled={status.state === 'loading'}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={status.state === 'loading' ? 'joining' : 'join'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                {status.state === 'loading' ? 'Joining...' : 'Join the waitlist'}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.form>

      <AnimatePresence>
        {status.state !== 'idle' && (
          <motion.div
            key={status.state}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <AnimatedCheck state={status.state} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
