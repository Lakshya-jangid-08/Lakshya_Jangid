import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const education = [
    {
      degree: "Computer Science and Engineering",
      institution: "Indian Institute of Information Technology, Vadodara",
      period: "2023 - Present",
      description: "Pursuing B.Tech in Computer Science and Engineering with focus on software development, data structures, algorithms, and modern web technologies. Currently in Pre - final year.",
      side: "right",
      status: "Current"
    },
    {
      degree: "Senior Secondary Education ( 12th )",
      institution: "Rajasthan State Board (RBSE)",
      period: "2021 - 2022",
      description: "Completed higher secondary education with Science stream, focusing on Mathematics, Physics, Biology, and Chemistry.",
      side: "left",
      status: "Completed"
    },
    {
      degree: "Secondary Education ( 10th )",
      institution: "Rajasthan State Board (RBSE)", 
      period: "2019 - 2020",
      description: "Completed Secondary Education with outstanding academic performance across all subjects.",
      side: "right",
      status: "Completed"
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
      id="education" 
      className="py-20 bg-slate-900 text-white relative overflow-hidden" 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-20 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-blue-500">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-px bg-gradient-to-b from-blue-500 via-blue-400 to-transparent"></div>

          {/* Education items */}
          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content card */}
                <div className={`flex ${edu.side === 'left' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${edu.side === 'left' ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'}`}>
                    <motion.div
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-slate-800 p-6 rounded-lg shadow-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-white pr-2">
                          {edu.degree}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Current' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-blue-400 font-semibold text-sm">
                          {edu.institution}
                        </span>
                        <span className="text-slate-400 text-sm">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        {edu.description}
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
