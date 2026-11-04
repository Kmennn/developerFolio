/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Virendra Mahajan",
  title: "Hi all, I'm Virendra",
  subTitle: emoji(
    "AI Engineer working on LLM systems, RAG and agentic AI 🚀 Founder of Planetary Compute Network (PCN). I led the team that built Proctora, an AI-graded exam platform adopted by MIT ADT University for about 7,000 students, and won the IEEE National-Level AI Grand Challenge 2026."
  ),
  resumeLink:
    "https://kmennn.github.io/Virendra-Mahajan/Virendra_Mahajan_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Kmennn",
  linkedin: "https://www.linkedin.com/in/virendra-mahajan-44a3b7294",
  gmail: "virendramahajan2005@gmail.com",
  gitlab: "https://gitlab.com/Kmennn",
  facebook: "",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/31056915/virendra-mahajan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "AI ENGINEER AND FOUNDER: LLM SYSTEMS, DISTRIBUTED COMPUTE AND FULL STACK PRODUCTS",
  skills: [
    emoji(
      "⚡ LLM engineering: fine-tuning (Qwen-14B), RAG pipelines, agentic AI with LangChain and LangGraph, prompt design, embeddings and pgvector search, model evaluation"
    ),
    emoji(
      "⚡ Distributed compute: pooling ordinary computers into one fabric for ML workloads, with job orchestration, node health tracking and result aggregation"
    ),
    emoji(
      "⚡ Backend and infrastructure: FastAPI, Node.js, PostgreSQL, REST APIs, Docker, sandboxed code execution (Judge0), Oracle Cloud, Linux"
    ),
    emoji(
      "⚡ Frontend: React, Vite and Firebase, from first prototype to a platform in production"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "systemverilog",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MIT Art, Design and Technology University, Pune",
      logo: require("./assets/images/OIP.webp"),
      subHeader: "B.Tech, Computer Science and Engineering",
      duration: "2023 - 2027",
      desc: "CGPA 8.09 / 10, latest semester SGPA 9.00.",
      descBullets: [
        "Coursework: Deep Learning, Machine Learning, Artificial Intelligence, Data Structures and Algorithms, Container Based Application Development, Azure and GCP Essential Services",
        "Class 12: 74.50% (2023). Class 10: 96.40% (2021)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI / LLM Engineering", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend and Distributed Systems",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Founder",
      company: "Planetary Compute Network (PCN)",
      companylogo: require("./assets/images/pcn_logo.svg").default,
      date: "2026 – Present",
      desc: "Pools ordinary computers into one compute fabric for ML and deep learning workloads.",
      descBullets: [
        "Close to 7x speedup over one machine with 12 workers; scales to 30 nodes",
        "Peer-to-peer or orchestrated coordination, plus VM hosting on Oracle Cloud",
        "Products: Proctora and PCN Orbit"
      ]
    },
    {
      role: "Technology Intern (Winter)",
      company: "Bharat Space Education Research Centre (Def-Space Tech)",
      companylogo: require("./assets/images/bserc_logo.png"),
      date: "Dec 2025 – Jan 2026",
      desc: "Researched applications of emerging AI methods to defence and space-domain problems within a research team.",
      descBullets: []
    },
    {
      role: "Data Science Intern (Virtual)",
      company: "SmartED Innovations",
      companylogo: require("./assets/images/smarted_logo.png"),
      date: "Oct 2025 – Nov 2025",
      desc: "Built Python data pipelines with Pandas and NumPy, from cleaning and transforming raw datasets through to reported findings.",
      descBullets: []
    },
    {
      role: "Full Stack Developer Intern",
      company: "Alpha Innovation Pvt Ltd",
      companylogo: require("./assets/images/alpha_innovation_logo.png"),
      date: "Jun 2025 – Aug 2025",
      desc: "Shipped frontend and backend features into live application modules with React.js, Node.js and JavaScript in an agile team.",
      descBullets: [
        "Debugged production issues and worked through code review, testing and version control"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Products and Projects",
  subtitle: "THINGS I HAVE BUILT AND SHIPPED",
  projects: [
    {
      image: require("./assets/images/proctora_logo.svg").default,
      projectName: "Proctora (formerly ExamOne)",
      projectDesc:
        "Every exam. One trusted platform. Built in 16 days by a team I led, and adopted by MIT ADT University for about 7,000 students. Fine-tuned Qwen-14B grades written answers, Judge0 runs student code safely, and a locked-down exam browser stops malpractice.",
      footerLink: [
        {
          name: "Visit Proctora",
          url: "https://proctora.app/"
        }
      ]
    },
    {
      image: require("./assets/images/pcn_logo.svg").default,
      projectName: "Planetary Compute Network (PCN)",
      projectDesc:
        "Pools ordinary connected computers into one compute fabric for ML and deep learning workloads. Close to 7x speedup over a single machine across 12 workers, scaling to 30 nodes, with VM hosting on the pooled network.",
      footerLink: [
        {
          name: "Visit PCN",
          url: "https://planetarycomputenetwork.online/"
        }
      ]
    },
    {
      image: require("./assets/images/pcn_logo.svg").default,
      projectName: "PCN Orbit",
      projectDesc:
        "One PC, many workstations. A single machine serves several workstations, managed from the PCN Orbit Fleet Console.",
      footerLink: [
        {
          name: "Visit PCN Orbit",
          url: "https://orbit.planetarycomputenetwork.online/"
        }
      ]
    },
    {
      projectName: "Fasal Astra: Weed Detection (IEEE AI Grand Challenge winner)",
      projectDesc:
        "A computer vision model that identifies weeds in crop images so farmers can spray only where needed. Took first place against 40+ teams nationally.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Kmennn/FasalAstra-AI"
        }
      ]
    },
    {
      projectName: "PCN-Semiconductors: RISC-V Chip Design",
      projectDesc:
        "A drag-and-drop design environment that generates SystemVerilog from placed components, with a custom simulator that tests chips under thermal load and current draw. Targets RISC-V designs for drones and electric vehicles. Prototype complete.",
      footerLink: []
    },
    {
      projectName: "Office of Strategic Intelligence",
      projectDesc:
        "A system for understanding how nations are built, bent and broken, structurally. Built with React 19 and TypeScript.",
      footerLink: [
        {
          name: "Live demo",
          url: "https://office-of-strategic-intelligence.vercel.app"
        },
        {
          name: "GitHub",
          url: "https://github.com/Kmennn/Office-of-Strategic-Intelligence"
        }
      ]
    },
    {
      projectName: "Valhalla Suite",
      projectDesc:
        "A microservices platform built with Docker, Node.js, PostgreSQL and RabbitMQ.",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements and Certifications 🏆 "),
  subtitle: "Awards, publications and certifications.",

  achievementsCards: [
    {
      title: "Winner, IEEE National-Level AI Grand Challenge 2026",
      subtitle:
        "IEEE Pune and Maharashtra Section, AI for Agriculture. Led the team to first place against 40+ teams, ₹1,00,000 prize.",
      image: require("./assets/images/ieee_logo.svg").default,
      imageAlt: "IEEE",
      footerLink: []
    },
    {
      title: "IEEE paper: ARGUS",
      subtitle:
        "ARGUS: A Governance-Aware Deterministic Framework for Auditable Technology Intelligence and Strategic Forecasting. Co-author, published at IEEE ICCMRAI 2026, Pune.",
      image: require("./assets/images/ieee_logo.svg").default,
      imageAlt: "IEEE Xplore",
      footerLink: [
        {
          name: "Read on IEEE Xplore",
          url: "https://ieeexplore.ieee.org/document/11723909"
        }
      ]
    },
    {
      title: "Software adopted by MIT ADT University",
      subtitle:
        "The only student team to have software adopted institutionally by the university (Proctora, about 7,000 students).",
      image: require("./assets/images/mit_logo.png"),
      imageAlt: "MIT ADT University",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 certifications",
      subtitle:
        "AI Foundations Associate, Foundations Associate, and Oracle Data Platform Foundations Associate.",
      image: require("./assets/images/oracle_logo.svg").default,
      imageAlt: "Oracle",
      footerLink: []
    },
    {
      title: "AWS APAC Solutions Architecture",
      subtitle: "Job simulation (Forage).",
      image: require("./assets/images/aws_logo.svg").default,
      imageAlt: "AWS",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section,defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to talk about PCN, Proctora, or a project of your own? My inbox is open.",
  number: "+91-9021697734",
  email_address: "virendramahajan2005@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
