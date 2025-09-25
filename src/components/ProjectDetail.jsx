import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Users, Star } from 'lucide-react'
import Edemy from '../assests/Edemy.png'
import Jigyasa from '../assests/Jigyasa.png'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const projects = [
    {
      id: 1,
      title: "Jigyasa Online Survey Platform",
      description: "Developed a full-stack web application for creating, managing, and analyzing online surveys. Features include organization-specific surveys, dynamic data visualization with interactive charts, and comprehensive response analytics with export capabilities.",
      longDescription: "Jigyasa is a comprehensive survey management platform designed to streamline the process of creating, distributing, and analyzing surveys. The platform offers a user-friendly interface for survey creation with multiple question types, real-time response tracking, and powerful analytics tools. Built with modern web technologies, it ensures scalability, security, and optimal performance.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS", "JWT Authentication"],
      mainStack: ["React", "Node.js", "MongoDB"],
      keyFeatures: [
        "User authentication and role-based access control",
        "Organization-specific survey management",
        "Dynamic survey creation with multiple question types",
        "Real-time data visualization with interactive charts",
        "Response analytics and data export functionality",
        "Email notifications and reminders",
        "Responsive design for all devices",
        "Advanced filtering and search capabilities"
      ],
      challenges: [
        "Implementing real-time chart updates with Chart.js",
        "Designing scalable database schema for survey responses",
        "Creating intuitive survey builder interface",
        "Ensuring data security and privacy compliance"
      ],
      outcomes: [
        "Successfully deployed with 500+ active users",
        "Reduced survey creation time by 60%",
        "Improved response rate by 40% through better UI/UX",
        "Generated positive feedback from 95% of users"
      ],
      link: "https://jigyasa-online-survey-mangement.vercel.app",
      github: "https://github.com/Lakshya-jangid-08/Jigyasa_Online-survey-mangement",
      gradient: "from-slate-500 to-slate-600",
      demoImg: { src: Jigyasa, alt: "Jigyasa Project Screenshot" },
      duration: "3 months",
      teamSize: "2 developers",
      status: "Live"
    },
    {
      id: 2,
      title: "PyroShield Firestation Dashboard",
      description: "Built a real-time dashboard to monitor incident reports, track fire vehicles, and manage inventory. Designed clean UI and efficient backend APIs for timely emergency responses.",
      longDescription: "PyroShield is a comprehensive fire station management system that provides real-time monitoring and management capabilities for emergency services. The dashboard offers intuitive interfaces for incident reporting, vehicle tracking, inventory management, and personnel coordination.",
      technologies: ["React", "Node.js", "SQL", "Tailwind CSS", "Socket.io", "Express.js"],
      mainStack: ["React", "Node.js", "SQL"],
      keyFeatures: [
        "Real-time incident reporting and tracking",
        "Fire vehicle GPS tracking and status monitoring",
        "Inventory management for equipment and supplies",
        "Personnel scheduling and availability tracking",
        "Emergency alert system",
        "Historical data analysis and reporting"
      ],
      challenges: [
        "Implementing real-time location tracking",
        "Designing efficient database for emergency data",
        "Creating responsive emergency alert system",
        "Ensuring system reliability during critical situations"
      ],
      outcomes: [
        "Improved emergency response time by 25%",
        "Streamlined inventory management processes",
        "Enhanced coordination between fire stations",
        "Reduced administrative overhead by 30%"
      ],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/PyroShield",
      gradient: "from-slate-600 to-slate-700",
      demoImg: { src: Edemy, alt: "PyroShield Project Screenshot" },
      duration: "4 months",
      teamSize: "3 developers",
      status: "Development"
    },
    {
      id: 3,
      title: "Edemy Learning Management System (LMS)",
      description: "Engineered a secure LMS with user authentication using Clerk and real-time notifications via Svix webhooks. Supported multi-role access and seamless content management.",
      longDescription: "Edemy is a modern learning management system designed to facilitate online education. The platform provides comprehensive tools for course creation, student enrollment, progress tracking, and interactive learning experiences. Built with security and scalability in mind.",
      technologies: ["MERN", "Clerk", "Svix", "Tailwind CSS", "MongoDB", "Express.js"],
      mainStack: ["React", "Node.js", "MongoDB"],
      keyFeatures: [
        "Multi-role user authentication with Clerk",
        "Course creation and content management",
        "Student progress tracking and analytics",
        "Real-time notifications with Svix webhooks",
        "Interactive quiz and assignment system",
        "Video streaming and content delivery"
      ],
      challenges: [
        "Integrating Clerk authentication system",
        "Implementing real-time notifications",
        "Designing scalable content delivery system",
        "Creating responsive video player interface"
      ],
      outcomes: [
        "Successfully launched with 200+ courses",
        "Achieved 90% user satisfaction rate",
        "Reduced course creation time by 50%",
        "Implemented secure payment processing"
      ],
      link: "https://lmsfrontend-two.vercel.app/",
      github: "https://github.com/Lakshya-jangid-08/LMS_Website",
      gradient: "from-slate-500 to-slate-700",
      duration: "5 months",
      teamSize: "2 developers",
      status: "Live"
    },
    {
      id: 4,
      title: "Chat Web App Group Messaging",
      description: "Created a real-time chat platform with persistent storage, group messaging, and user authentication. Leveraged Socket.io for low-latency communication.",
      longDescription: "A modern real-time messaging application that enables seamless communication through individual and group chats. The platform features instant messaging, file sharing, user presence indicators, and message history with persistent storage.",
      technologies: ["EJS", "Express.js", "Node.js", "MongoDB", "Socket.io", "JWT"],
      mainStack: ["Node.js", "Socket.io", "MongoDB"],
      keyFeatures: [
        "Real-time messaging with Socket.io",
        "Group chat functionality",
        "File and image sharing",
        "User authentication and profiles",
        "Message history and search",
        "Online/offline status indicators",
        "Emoji and reaction support"
      ],
      challenges: [
        "Implementing efficient real-time messaging",
        "Managing socket connections at scale",
        "Designing responsive chat interface",
        "Ensuring message delivery reliability"
      ],
      outcomes: [
        "Achieved sub-second message delivery",
        "Supported 100+ concurrent users",
        "Implemented end-to-end message encryption",
        "Created intuitive user interface"
      ],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/CHAT.WEB.APP",
      gradient: "from-slate-600 to-slate-800",
      duration: "2 months",
      teamSize: "1 developer",
      status: "Completed"
    },
    {
      id: 5,
      title: "Uber Clone Ride-Hailing App",
      description: "Built a ride-matching app with live driver tracking, real-time updates, and trip management. Used sockets for instant driver-rider synchronization.",
      longDescription: "A comprehensive ride-hailing application that replicates the core functionality of Uber. The platform includes rider and driver interfaces, real-time location tracking, fare calculation, and trip management with seamless user experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Google Maps API", "Express.js"],
      mainStack: ["React.js", "Node.js", "MongoDB"],
      keyFeatures: [
        "Real-time driver and rider matching",
        "Live GPS tracking and navigation",
        "Dynamic fare calculation",
        "Trip history and receipts",
        "Rating and review system",
        "Payment processing integration",
        "Driver earnings dashboard"
      ],
      challenges: [
        "Implementing efficient matching algorithms",
        "Integrating Google Maps for navigation",
        "Managing real-time location updates",
        "Designing scalable ride matching system"
      ],
      outcomes: [
        "Successfully matched 1000+ rides",
        "Achieved 95% ride completion rate",
        "Implemented secure payment system",
        "Created intuitive mobile-first design"
      ],
      link: "sorry",
      github: "https://github.com/Lakshya-jangid-08/Uber-Clone-Application",
      gradient: "from-slate-500 to-slate-800",
      duration: "6 months",
      teamSize: "2 developers",
      status: "Completed"
    }
  ]

  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    )
  }

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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-12"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Project Image and Quick Info */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={fadeInUp}
        >
          {/* Image */}
          <div className="space-y-6">
            {project.demoImg ? (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg">
                <img
                  src={project.demoImg.src}
                  alt={project.demoImg.alt}
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
            ) : (
              <div className={`h-64 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center`}>
                <Code className="text-white w-16 h-16" />
              </div>
            )}

            {/* Quick Actions */}
            <div className="flex space-x-4">
              <a
                href={project.link}
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
              <a
                href={project.github}
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-8">
            {/* Status and Duration */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Duration</span>
                </div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">{project.duration}</p>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-green-500" />
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                {project.status}
              </span>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Overview</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        {/* <motion.div 
          className="mb-16"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h3>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600 dark:text-slate-400">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Challenges and Outcomes */}
        {/* <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={fadeInUp}
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Challenges Faced</h3>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-600 dark:text-slate-400">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Outcomes</h3>
            <div className="space-y-4">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-600 dark:text-slate-400">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div> */}
        
        <div className='mb-16 text-slate-600 dark:text-slate-400 leading-relaxed text-3xl font-medium align-center text-center  '>
          Currently working on adding more details about key features, challenges faced, and outcomes achieved for each project. Stay tuned for updates!
        </div>

        {/* Back to Projects */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View All Projects
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProjectDetail