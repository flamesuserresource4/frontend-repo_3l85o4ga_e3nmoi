import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            Now launching: ScaleX Protocol
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Earn yield on idle limit orders, automatically
          </h1>
          <p className="mt-5 text-lg leading-7 text-gray-600">
            ScaleX is a revolutionary central limit order book that turns waiting into earning. Execute strategies with custom prices while your idle orders generate real yield.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/0 to-white"></div>
    </section>
  )
}
