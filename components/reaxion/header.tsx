"use client"

import { useState, useEffect } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[var(--divider)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[var(--brand-blue)] flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-tight">RC</span>
          </div>
          <div>
            <span className="font-bold text-[var(--text-heading)] tracking-wide text-sm">REAXION CARE</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--text-caption)]">
          <a href="#overview" className="hover:text-[var(--brand-blue)] transition-colors">製品概要</a>
          <a href="#features" className="hover:text-[var(--brand-blue)] transition-colors">特長</a>
          <a href="#specs" className="hover:text-[var(--brand-blue)] transition-colors">仕様</a>
          <a href="#contact" className="hover:text-[var(--brand-blue)] transition-colors">お問い合わせ</a>
        </nav>
        <a
          href="#inquiry-form"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded border border-[var(--brand-blue)] text-[var(--brand-blue)] text-sm font-medium hover:bg-[var(--brand-blue)] hover:text-white transition-all duration-200"
        >
          資料請求
        </a>
      </div>
    </header>
  )
}
