import { motion } from 'framer-motion'

export default function AnimatedCheck({ state }) {
  if (state === 'idle') return null
  const isSuccess = state === 'success'
  const isError = state === 'error'

  return (
    <div className="mt-4 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm ${
          isSuccess ? 'bg-emerald-50 text-emerald-700' : isError ? 'bg-red-50 text-red-700' : 'bg-gray-50 text-gray-700'
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
        >
          {isSuccess && (
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              d="M5 13l4 4L19 7"
            />
          )}
          {isError && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <path d="M6 18L18 6" />
              <path d="M6 6l12 12" />
            </motion.g>
          )}
          {!isSuccess && !isError && (
            <motion.circle
              cx="12"
              cy="12"
              r="9"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            />
          )}
        </svg>
        <span>{isSuccess ? 'You are on the list!' : isError ? 'Something went wrong' : 'Submitting...'}</span>
      </motion.div>
    </div>
  )
}
