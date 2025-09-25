import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WorkExperience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      role: "Software Development Intern",
      company: "P2PExperts",
      period: "May 2025 - July 2025",
      description: "Contributed to the Ariba procurement platform, enhancing enterprise-level cloud modules using C++ and JavaScript. Improved performance by 40% through code optimization.",
      side: "right"
    },
    {
      role: "Full Stack Developer", 
      company: "Independent Projects",
      period: "2023 - Present",
      description: "Developed full-stack applications with Node.js, Express, and MongoDB. Implemented RESTful APIs and integrated third-party services.",
      side: "left"
    }
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <motion.section 
      id="work" 
      className="py-20 bg-slate-900 text-white relative overflow-hidden" 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-blue-500">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent"></div>

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content card */}
                <div className={`flex ${exp.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${exp.side === 'left' ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'}`}>
                    <motion.div
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-blue-400 font-semibold">
                          {exp.company}
                        </span>
                        <span className="text-slate-400 text-sm">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}