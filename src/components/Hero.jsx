import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center">
      {/* Background gradient + grain */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(124,58,237,0.35),transparent_60%),radial-gradient(ellipse_at_80%_0%,rgba(8,145,178,0.35),transparent_55%),radial-gradient(ellipse_at_50%_100%,rgba(59,130,246,0.3),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)'}} />
      </div>

      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="backdrop-blur-[1px]">
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-cyan-100 text-xs mb-4">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Interactive 3D • Futuristic • Purple/Blue
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_0_25px_rgba(88,28,135,0.35)]">
            Illuminate ideas with an interactive, futuristic canvas
          </h1>
          <p className="mt-5 text-lg text-slate-200/90 max-w-xl">
            A bold, vibrant experience with a grainy, dark atmosphere. Move your mouse and watch the scene react as you explore cutting‑edge design.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white font-medium shadow-[0_0_40px_rgba(99,102,241,0.35)] hover:shadow-[0_0_55px_rgba(8,145,178,0.35)] transition">Get Started</a>
            <a href="#showcase" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 hover:bg-white/15 border border-white/15 transition">See Showcase</a>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>

      {/* subtle bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
