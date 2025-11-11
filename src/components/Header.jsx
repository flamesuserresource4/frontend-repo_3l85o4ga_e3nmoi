export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-black/5 bg-white/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <img
            src="https://mintcdn.com/scalex/wfj_oidYbXpZz3-y/logo/scalex-orange.png?fit=max&auto=format&n=wfj_oidYbXpZz3-y&q=85&s=392e1371cb218574b12110abd613fcdf"
            alt="ScaleX"
            className="h-8 w-auto"
          />
          <span className="text-sm font-semibold tracking-wide text-gray-800">ScaleX Protocol</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#how" className="hover:text-gray-900">How it works</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </nav>
        <a href="#waitlist" className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-black">
          Join waitlist
        </a>
      </div>
    </header>
  )
}
