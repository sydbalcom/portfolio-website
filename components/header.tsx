import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="text-3xl md:text-5xl font-pilowLava tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 mx-8">
      <Link href="/" className="hover:underline">
        SB
      </Link>
    </h2>
  )
}

export default Header
