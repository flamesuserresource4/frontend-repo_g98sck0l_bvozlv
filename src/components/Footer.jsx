import React from 'react'

export default function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,145,178,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="text-slate-400 text-sm">Made with a futuristic glow. © {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
