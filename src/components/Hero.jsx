import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex border-b border-border overflow-hidden bg-primary select-none">

      {/* Three.js Stars Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <color attach="background" args={['#0a1628']} />
          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Deep Space Nebula Animation — Mobilde Sinematik ve Zarif Uzay Atmosferi */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none md:hidden bg-[#0a1628]">
        {/* Hareketli Nebula Katmanları (Daha canlı ve dengeli) */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`nebula-${i}`}
            className="absolute rounded-full blur-[100px] will-change-transform translate-z-0"
            style={{
              width: Math.random() * 600 + 400,
              height: Math.random() * 500 + 300,
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(37,99,235,0.12)' : 'rgba(88,28,135,0.12)'} 0%, transparent 80%)`,
              left: `${Math.random() * 90 - 20}%`,
              top: `${Math.random() * 90 - 20}%`,
            }}
            animate={{
              x: [0, 60, 0],
              y: [0, 40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Twinkling Stars (Daha belirgin ve parlak) */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white rounded-full will-change-transform translate-z-0"
            style={{
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 5px white',
            }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Meteor Shower (Daha dinamik ve rastgele) */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`meteor-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-blue-200/40 to-transparent will-change-transform translate-z-0"
            style={{
              width: `${Math.random() * 100 + 100}px`,
              height: '1px',
              left: `${Math.random() * 40 - 30}%`,
              top: `${Math.random() * 80}%`,
              rotate: `${Math.random() * 20 + 10}deg`,
            }}
            animate={{ 
              x: ['0vw', '160vw'], 
              opacity: [0, 1, 1, 0] 
            }}
            transition={{
              duration: Math.random() * 1 + 1,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "linear"
            }}
          />
        ))}

        {/* Atmospheric Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628] via-transparent to-blue-900/10"></div>
      </div>

      {/* Sketchfab F-16 Solo Türk — Sadece Masaüstünde (Görsel Kalite ve Performans İçin) */}
      <div className="absolute inset-0 z-10 hidden md:flex items-center justify-center opacity-80 lg:opacity-100 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <iframe
            title="F16 Solo Türk"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/c9c45ac1c9294a199ece6e3030626575/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_hint=0&ui_infos=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_vr=0&ui_ar=0&ui_fullscreen=0&ui_annotations=0&ui_stop=0&ui_watermark_link=0"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Hero Content — Left aligned to show F-16 on the right */}
      <div className="pointer-events-none relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-10 h-full flex items-center justify-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-start text-left max-w-2xl mt-10 md:mt-12"
        >
          {/* Club Logo with Performance Optimized Super Glow — Çok daha kuvvetli mavi ışık efekti */}
          <div className="w-36 h-36 md:w-40 md:h-40 mb-8 relative flex items-center justify-center">
            {/* Layer 1: Core Brightness (Merkez Parlama) */}
            <motion.div 
              className="absolute w-24 h-24 md:w-24 md:h-24 bg-blue-400/80 rounded-full blur-xl z-0"
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Layer 2: Wide Atmospheric Glow (Geniş Atmosferik Işık) */}
            <motion.div 
              className="absolute inset-x-[-25%] inset-y-[-25%] bg-blue-600/30 rounded-full blur-3xl z-0"
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Layer 3: Sharp Flash (Keskin Patlama) */}
            <motion.div 
              className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg z-0"
              animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />
            
            <img 
              src="/club-logo.png" 
              alt="ÇOMÜ Havacılık Kulübü" 
              className="w-full h-full object-contain drop-shadow-2xl relative z-10"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-space text-white leading-[1.05] mb-6 uppercase tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            ÇOMÜ Havacılık<br />Kulübü
          </h1>

          <div className="w-32 h-[2px] bg-white/50 mb-6 drop-shadow-md"></div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-2">
            <div>
              <p className="text-xl md:text-2xl text-white font-light italic tracking-wide mb-2 border-l-4 border-white/70 pl-4 py-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                "İstikbal Göklerdedir"
              </p>
              <p className="text-sm md:text-base text-white/80 font-space tracking-[0.2em] uppercase pl-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                Mustafa Kemal Atatürk
              </p>
            </div>
            <img
              src="/ataturk-signature.png"
              alt="Atatürk İmzası"
              className="w-24 md:w-32 h-auto invert brightness-[5] contrast-200 opacity-90 drop-shadow-lg"
            />
          </div>
        </motion.div>

        {/* Modern Scroll Indicator — Sadece Animasyon (Kullanıcı İsteği) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          {/* Fare İkonu Animasyonu */}
          <div className="w-[20px] h-[35px] border-2 border-white/10 rounded-full relative mb-1">
            <motion.div
              className="w-1 h-2 bg-blue-500/60 rounded-full absolute left-1/2 -translate-x-1/2 top-2"
              animate={{
                y: [0, 18, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Pulsing Chevrons */}
          <motion.div
            className="flex flex-col items-center -space-y-2"
            animate={{
              y: [0, 6, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-5 h-5 text-white" />
            <ChevronDown className="w-5 h-5 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
