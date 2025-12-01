import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-950 text-white px-4 py-3 fixed top-0 left-0 z-50 shadow">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="font-bold text-lg tracking-wider">
          Adam Portfolio
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="hover:text-sky-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
            <path
              d="M2.5 6h15M2.5 10h15M2.5 14h15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 border-t border-slate-800 flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-2 px-2 rounded hover:bg-sky-900"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}