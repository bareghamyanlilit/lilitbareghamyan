import Link from "next/link";

export function Header() {
  return (
    <header
      className="absolute z-100 justify-self-center container py-6 px-8 flex items-center justify-between"
    >
      <Link href="/" className="text-3xl font-bold">
        MyPortfolio
      </Link>

      <nav className="space-x-6">
        <Link href="/" className="text-xl hover:text-white transition">
          Home
        </Link>
        <Link href="/about" className="text-xl hover:text-white transition">
          About
        </Link>
        <Link href="/contact" className="text-xl hover:text-white transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
