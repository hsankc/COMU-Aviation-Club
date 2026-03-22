import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() { 
  return (
    <section id="hero" className="relative h-screen flex border-b border-border overflow-hidden bg-primary">
      
      {/* Three.js Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <color attach="background" args={['#0a1628']} />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Sketchfab F-16 Solo Türk — arkada, opacity düşük */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <iframe 
          title="F16 Solo Türk" 
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          src="https://sketchfab.com/models/c9c45ac1c9294a199ece6e3030626575/embed?autostart=1&transparent=1&ui_theme=dark&ui_hints=0&ui_infos=0&ui_watermark=0&ui_stop=0&ui_watermark_link=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_inspector=0"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Removed the heavy gradient overlay so the F-16 is 100% visible */}

      {/* Hero Content — Left aligned to show F-16 on the right */}
      <div className="pointer-events-none relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-10 h-full flex items-center justify-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-start text-left max-w-2xl mt-20"
        >
          {/* Club Logo without clipping mask, and utilizing the new transparent PNG */}
          <div className="w-32 h-32 md:w-40 md:h-40 mb-8 relative animate-[shimmer_3s_ease-in-out_infinite]">
            <img 
              src="/club-logo.png" 
              alt="ÇOMÜ Havacılık Kulübü" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-space text-white leading-[1.05] mb-6 uppercase tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            ÇOMÜ Havacılık<br/>Kulübü
          </h1>

          <div className="w-32 h-[2px] bg-white/50 mb-6 drop-shadow-md"></div>

          <p className="text-xl md:text-2xl text-white font-light italic tracking-wide mb-2 border-l-4 border-white/70 pl-4 py-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            "İstikbal Göklerdedir"
          </p>
          <p className="text-sm md:text-base text-white/80 font-space tracking-[0.2em] uppercase pl-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Mustafa Kemal Atatürk
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </div>
    </section>
  )
}
