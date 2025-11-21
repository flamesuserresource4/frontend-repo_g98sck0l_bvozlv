import React from 'react'
import { Command, Zap, ShieldCheck, Sparkles } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="w-5 h-5 text-fuchsia-300" />,
    title: 'Interactive 3D Scene',
    desc: 'A responsive, mouse-reactive hero powered by Spline with a bold purple-blue glow.'
  },
  {
    icon: <Zap className="w-5 h-5 text-cyan-300" />,
    title: 'Lightning Performance',
    desc: 'Optimized layout and Tailwind styling keeps the experience fast and fluid.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-violet-300" />,
    title: 'Modern Stack',
    desc: 'Vite + React + Tailwind with thoughtful components and subtle motion.'
  },
  {
    icon: <Command className="w-5 h-5 text-indigo-300" />,
    title: 'Feels Premium',
    desc: 'Grain, gradients, and glow blend into a futuristic, digital-art atmosphere.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for an immersive vibe</h2>
          <p className="mt-3 text-slate-300">The essentials you need for a striking, memorable landing experience.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
