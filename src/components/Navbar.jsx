import React from 'react'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px]">
            <div className="w-full h-full rounded-[10px] bg-slate-900 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">BlueLamp</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#showcase" className="text-slate-300 hover:text-white transition">Showcase</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#get-started" className="px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white font-medium shadow-[0_0_30px_rgba(99,102,241,0.35)] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)] transition">Get Started</a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
