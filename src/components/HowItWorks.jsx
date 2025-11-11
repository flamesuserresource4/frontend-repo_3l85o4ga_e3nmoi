import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Deposit + Place Limit Order',
    desc: 'Choose your pair and target price like a standard CLOB. Funds are secured while your order rests.',
    accent: 'from-orange-500/20 to-orange-500/0',
  },
  {
    title: 'Idle = Earning',
    desc: 'While your limit order waits, it automatically generates yield under the hood — no extra steps needed.',
    accent: 'from-emerald-500/20 to-emerald-500/0',
  },
  {
    title: 'Fill Anytime, No Expiry',
    desc: 'Orders don’t decay. Adjust, cancel, or let it fill. You keep full control at every step.',
    accent: 'from-indigo-500/20 to-indigo-500/0',
  },
]

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.1, duration: 0.5, ease: 'easeOut' },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HowItWorks() {
  return (
    <section id="how" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How it works</h2>
        <p className="mt-3 text-gray-600">CLOB-native flow with yield as a first-class citizen.</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {steps.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent}`} />
            <div className="relative z-10">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-10 rounded-xl border border-black/5 bg-gradient-to-br from-white to-gray-50 p-6 text-sm text-gray-600"
      >
        Orders accrue yield only while resting. When filled or cancelled, yield is realized according to protocol rules.
      </motion.div>
    </section>
  )
}
