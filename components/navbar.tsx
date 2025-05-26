"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="group relative flex items-center text-xl font-bold text-white">
            <div className="mr-2 text-2xl font-mono opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {"{"}
            </div>
            <div className="relative overflow-hidden">
              <div className="typing-container">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 typing-effect">
                  Backend
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 typing-effect-delay">
                  Dev
                </span>
                <span className="cursor-blink">_</span>
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
            </div>
            <div className="ml-2 text-2xl font-mono opacity-70 group-hover:opacity-100 transition-opacity duration-300">
              {"}"}
            </div>
            <div className="code-execution">
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <div className="code-dot"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 pt-20">
          <nav className="flex flex-col items-center space-y-6 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-white text-black hover:bg-gray-200 rounded-full w-full mt-4">
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact Me
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
