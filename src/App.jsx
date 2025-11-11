import Header from './components/Header'
import Hero from './components/Hero'
import Waitlist from './components/Waitlist'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />

      <main className="pt-16">
        <Hero />

        <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[ 
              {
                title: 'Yield on idle orders',
                desc: 'Your resting limit orders automatically earn, so you never have to choose between opportunity and income.',
              },
              {
                title: 'No expiry, full control',
                desc: 'Keep positions open without time decay. Adjust prices and strategies on your terms.',
              },
              {
                title: 'CLOB-native',
                desc: 'Built as a central limit order book so traders retain familiar tools with supercharged benefits.',
              },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
          <Waitlist />
        </div>

        <footer className="relative z-10 border-t border-black/5 bg-white/70 py-10">
          <div className="mx-auto max-w-7xl px-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://mintcdn.com/scalex/wfj_oidYbXpZz3-y/logo/scalex-orange.png?fit=max&auto=format&n=wfj_oidYbXpZz3-y&q=85&s=392e1371cb218574b12110abd613fcdf"
                alt="ScaleX"
                className="h-6 w-auto"
              />
              <span>© {new Date().getFullYear()} ScaleX Protocol</span>
            </div>
            <div className="flex gap-4">
              <a href="#features" className="hover:text-gray-900">Features</a>
              <a href="#waitlist" className="hover:text-gray-900">Waitlist</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
