import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  Server,
  CheckCircle,
  Database,
  ShieldCheck,
  UserCheck
} from 'lucide-react'

const Security = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [tappedFeature, setTappedFeature] = useState(null)
  const [activeProtocol, setActiveProtocol] = useState(0)

  const securityFeatures = [
    {
      icon: Lock,
      title: '256-bit Encryption',
      description: 'Military-grade encryption protecting all your financial data',
      gradient: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-500/20 to-cyan-500/20',
      stats: '100% Secure'
    },
    {
      icon: Key,
      title: 'Multi-Factor Authentication',
      description: 'Multiple verification layers with confirmation',
      gradient: 'from-green-400 to-emerald-400',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      stats: 'MFA Protected'
    },
    {
      icon: Eye,
      title: 'Privacy Protection',
      description: 'Your data stays private and is never shared with anyone',
      gradient: 'from-purple-400 to-pink-400',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      stats: 'Private & Secure'
    },
    {
      icon: Server,
      title: 'Secure Cloud Storage',
      description: 'Reliable cloud infrastructure with automated backups',
      gradient: 'from-orange-400 to-red-400',
      bgGradient: 'from-orange-500/20 to-red-500/20',
      stats: 'Auto Backup'
    },
    {
      icon: UserCheck,
      title: 'Access Control',
      description: 'Granular permissions for nominee management',
      gradient: 'from-indigo-400 to-purple-400',
      bgGradient: 'from-indigo-500/20 to-purple-500/20',
      stats: 'Controlled Access'
    },
    {
      icon: Database,
      title: 'Data Integrity',
      description: 'Regular security audits and data integrity checks',
      gradient: 'from-teal-400 to-cyan-400',
      bgGradient: 'from-teal-500/20 to-cyan-500/20',
      stats: 'Verified Safe'
    }
  ]

  // Security protocols for animation - updated to relevant ones
  const securityProtocols = [
    { name: 'SSL/TLS', status: 'active', icon: Lock },
    { name: 'OTP', status: 'active', icon: Shield },
    { name: 'OAuth 2.0', status: 'active', icon: Key }
  ]

  // Animated particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
  }))

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProtocol((prev) => (prev + 1) % securityProtocols.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleFeatureInteraction = (index) => {
    // For mobile, toggle the card
    if (window.innerWidth <= 768) {
      setTappedFeature(tappedFeature === index ? null : index)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section id="security" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-blue-400 via-blue-900 to-slate-900">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-300/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 3 }}
        className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-green-400/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto relative z-10 security-3d-container">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-green-300 animate-pulse" />
            <span className="text-sm font-semibold text-white">
              Bank-Level Security
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          >
            <motion.span
              className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Security First
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white/90 text-lg max-w-2xl mx-auto"
          >
            Your financial security is our top priority. We use cutting-edge technology 
            and multiple layers of protection to keep your data safe.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Enhanced 3D Security Shield Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, type: 'spring' }}
            className="relative"
          >
            {/* Added padding-bottom to create space for the protocol buttons */}
            <div className="relative pb-20">
              {/* Central Shield with glow effect */}
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="relative w-64 h-64 mx-auto"
              >
                {/* Multiple glow layers */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-full blur-3xl pointer-events-none"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-2xl pointer-events-none"></div>
                
                {/* Main shield container - REMOVED backdrop-blur-sm */}
                <div className="relative bg-white/95 w-full h-full rounded-full flex items-center justify-center border-4 border-blue-300/50 shadow-2xl">
                  <Shield className="w-32 h-32 text-blue-600" />
                  
                  {/* Scanning effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
                      height: '20%',
                    }}
                    animate={{
                      y: ['0%', '400%', '0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                </div>

                {/* Orbiting Icons with enhanced effects */}
                {securityFeatures.slice(0, 3).map((feature, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10 + index * 5,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      width: `${280 + index * 60}px`,
                      height: `${280 + index * 60}px`,
                    }}
                  >
                    <motion.div 
                      className="absolute top-0 left-1/2 -translate-x-1/2"
                    >
                      <div className="bg-white/95 p-3 rounded-xl border-2 border-blue-300/60 transition-all shadow-lg">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Security Protocol Status - Moved outside and given proper spacing */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="flex justify-center gap-2 mt-8"
              >
                {securityProtocols.map((protocol, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      scale: activeProtocol === index ? 1.2 : 1,
                      opacity: activeProtocol === index ? 1 : 0.7,
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1
                      ${activeProtocol === index 
                        ? 'bg-green-400/80 text-white border-2 border-green-300 shadow-lg' 
                        : 'bg-white/80 text-blue-700 border border-blue-200'}`}
                  >
                    <protocol.icon className="w-3 h-3" />
                    {protocol.name}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Security Features Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {securityFeatures.map((feature, index) => {
              const isActive = hoveredFeature === index || tappedFeature === index
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleFeatureInteraction(index)}
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  className="relative group cursor-pointer"
                >
                  {/* Card glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-xl blur-xl pointer-events-none`}
                    animate={{
                      opacity: isActive ? 0.6 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Main card - REMOVED backdrop-blur-sm */}
                  <div className="relative bg-white/90 p-6 rounded-xl border border-blue-200 group-hover:border-blue-400 group-hover:shadow-xl transition-all overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-transparent to-transparent" />
                    </div>

                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="relative"
                        animate={{
                          rotateZ: isActive ? [0, 5, -5, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-xl pointer-events-none`}
                          animate={{
                            opacity: isActive ? 0.7 : 0.4,
                            scale: isActive ? 1.5 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${feature.bgGradient} flex items-center justify-center border border-blue-200`}>
                          <feature.icon className="w-6 h-6 text-blue-700" />
                        </div>
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className={`font-semibold text-blue-900 mb-1`}>
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 text-sm mb-2">
                          {feature.description}
                        </p>
                        {/* Stats badge */}
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full text-xs text-green-700 font-medium"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {feature.stats}
                        </motion.span>
                      </div>
                    </div>

                    {/* Hover accent line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${feature.gradient} pointer-events-none`}
                      initial={{ width: 0 }}
                      animate={{
                        width: isActive ? "100%" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Security