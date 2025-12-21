import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
  return (
    <>
      {/* Skip to content (Accessibility) */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black px-3 py-1 z-50"
      >
        Skip to content
      </a>

      {/* FULL WIDTH HEADER */}
      <Header />

      {/* PAGE CONTENT ONLY */}
      <main id="main" className="max-w-7xl mx-auto px-6 py-6 min-h-[60vh]">
        {children}
      </main>

      {/* FULL WIDTH FOOTER */}
      <Footer />
    </>
  )
}
