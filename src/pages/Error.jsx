import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <main id="main-content" className="bg-backdrop min-h-[60vh] flex items-center justify-center px-4 py-12">
      <section className="text-center text-primary max-w-xl">
        <p className="uppercase font-bold tracking-wider text-sm mb-2">404 error</p>
        <h1 data-page-heading tabIndex="-1" className="section-heading-focus text-3xl sm:text-4xl font-bold mb-4">Page not found</h1>
        <p className="mb-6">The page you requested does not exist or may have moved.</p>
        <Link
          to="/"
          className="inline-flex min-h-11 items-center bg-primary text-green-100 font-semibold px-5 py-3 rounded-md hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Return home
        </Link>
      </section>
    </main>
  )
}
