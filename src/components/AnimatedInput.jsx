import { motion, AnimatePresence } from 'framer-motion'

export default function AnimatedInput({ value, onChange, placeholder, type = 'text', required = false }) {
  const isActive = value && value.length > 0
  return (
    <div className="relative">
      <motion.input
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300/70 bg-white px-4 py-3 text-gray-900 placeholder:text-transparent focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
        whileFocus={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
      <AnimatePresence>
        <motion.label
          key="label"
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: -12, opacity: 1 }}
          exit={{ y: 12, opacity: 0 }}
          className={`pointer-events-none absolute left-3 top-0 px-1 text-xs ${
            isActive ? 'text-gray-700' : 'text-gray-400'
          } bg-white`}
        >
          {placeholder}
        </motion.label>
      </AnimatePresence>
    </div>
  )
}
