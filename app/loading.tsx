'use client'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-accent animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-brand-gradient animate-pulse-slow" />
        </div>
      </div>
      <p className="font-poppins text-white text-lg font-semibold tracking-widest uppercase">
        Tech Rapids
      </p>
      <p className="font-inter text-accent/70 text-sm mt-1">Flow Fast Through Tech Troubles</p>
    </div>
  )
}
