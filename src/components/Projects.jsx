import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Edemy from '../assests/Edemy.png'
import Jigyasa from '../assests/Jigyasa.png'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      title: "Jigyasa Online Survey Platform",
      description: "A full-stack survey management platform with real-time analytics and data visualization capabilities.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS", "JWT Authentication"],
      mainStack: ["React", "Node.js", "MongoDB"],
      link: "https://jigyasa-online-survey-mangement.vercel.app",
      github: "https://github.com/Lakshya-jangid-08/Jigyasa_Online-survey-mangement",
      gradient: "from-slate-500 to-slate-600",
      demoImg : { src: Jigyasa, alt: "Jigyasa Project Screenshot" }
    },
    {
      id: 2,
      title: "PyroShield Firestation Dashboard",
      description: "Real-time emergency management dashboard for fire stations with vehicle tracking and incident management.",
      technologies: ["React", "Node.js", "SQL", "Tailwind CSS"],
      mainStack: ["React", "Node.js", "SQL"],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/PyroShield",
      gradient: "from-slate-600 to-slate-700",
      demoImg : { src: Edemy, alt: "PyroShield Project Screenshot"}
    },
    {
      id: 3,
      title: "Edemy Learning Management System",
      description: "Comprehensive LMS with secure authentication, course management, and real-time notifications.",
      technologies: ["MERN", "Clerk", "Svix", "Tailwind CSS"],
      mainStack: ["React", "Node.js", "MongoDB"],
      link: "https://lmsfrontend-two.vercel.app/",
      github: "https://github.com/Lakshya-jangid-08/LMS_Website",
      gradient: "from-slate-500 to-slate-700"
    },
    {
      id: 4,
      title: "Chat Web App Group Messaging",
      description: "Real-time messaging platform with group chat functionality and persistent message storage.",
      technologies: ["EJS", "Express.js", "Node.js", "MongoDB", "Socket.io"],
      mainStack: ["Node.js", "Socket.io", "MongoDB"],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/CHAT.WEB.APP",
      gradient: "from-slate-600 to-slate-800"
    },
    {
      id: 5,
      title: "Uber Clone Ride-Hailing App",
      description: "Complete ride-hailing solution with real-time tracking, fare calculation, and driver-rider matching.",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      mainStack: ["React.js", "Node.js", "MongoDB"],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/Uber-Clone-Application",
      gradient: "from-slate-500 to-slate-800"
    }
  ]

  // Simple fade-in animation variants
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
        staggerChildren: 0.15
      }
    }
  }

  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-slate-50 dark:bg-slate-900/50" 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving. Each project represents a unique challenge and learning experience.
          </p>
        </motion.div>


        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 group flex flex-col h-full"
            >
              {project.demoImg == undefined ? (
                <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10" />
                  <Eye className="text-white w-12 h-12 z-10" />
                </div>
              ) : (
                <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
                  <img
                    src={project.demoImg.src}
                    alt={project.demoImg.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                    style={{ 
                      aspectRatio: '16/10',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="text-white w-8 h-8 drop-shadow-lg" />
                  </div>
                </div>
              )}
              
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed flex-grow text-sm">
                  {project.description}
                </p>
                
                {/* Main Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Main Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.mainStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Know More Button */}
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm space-x-2 mt-auto"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )

}
