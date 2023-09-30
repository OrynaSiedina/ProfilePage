import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  docker,
  aiplayground,
  threejs,
  gf, ph, DTS, penta, springframework, java, empty,
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const technologies = [
    {
      title: "HTML 5",
      icon: html,
    },
    {
      title: "CSS 3",
      icon: css,
    },
    {
      title: "JavaScript",
      icon: javascript,
    },
    {
      title: "TypeScript",
      icon: typescript,
    },
    {
      title: "React JS",
      icon: reactjs,
    },
    {
      title: "Tailwind CSS",
      icon: tailwind,
    },
    {
      title: "Java",
      icon: java,
    },
    {
      title: "Spring Framework",
      icon: springframework,
    },
    {
      title: "Three JS",
      icon: threejs,
    },
    {
      title: "git",
      icon: git,
    },
    {
      title: "figma",
      icon: figma,
    },
    {
      title: "docker",
      icon: docker,
    },
    {
      title: "etc...",
      icon: empty,
    }
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer BootCamp",
      company_name: "Green Fox Academy",
      icon: gf,
      iconBg: "#D2FFDC",
      date: "March 2023 - September 2023",
      points: [
        "Developing and maintaining web applications using different technologies.",
        "Collaborating with mentors and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front Office Manager",
      company_name: "Pinelli Hotels",
      icon: ph,
      iconBg: "white",
      date: " 2022 - 2023",
      points: [
        "Supervise front office staff, handle training, scheduling, and performance evaluation.",
        "Address guest issues, maintain up-to-date room status, and ensure operational smoothness.",
        "Optimize revenue and occupancy through rate monitoring, credit reports, and policy enforcement.",
      ],
    },
    {
      title: "Operations Manager",
      company_name: "DownTown Suites Prague",
      icon: DTS,
      iconBg: "#E95901",
      date: "2020 - 2022",
      points: [
        "Supervise all departments, support Heads of Departments for effective operation.",
        "Enforce SOPs, conduct inspections for quality and service standards.",
        "Control operational costs, budgeting, address customer feedback, and manage service recovery promptly.",
      ],
    },
    {
      title:"Guest Services Supervisor",
      company_name: "Penta Hotels",
      icon: penta,
      iconBg: "#1F1919",
      date: "2018 - 2020",
      points: [
        "Supervising and leading a team of Guest Service Agents, ensuring the delivery of exceptional customer service.",
        "Monitoring and maintaining front desk operations, including check-ins, check-outs, and reservations.",
        "Resolving guest issues, providing guidance to staff, and assisting in maintaining a high standard of service quality.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "AI-playground",
      description:
        "An innovative, web-based \"AI Playground.\" This platform allows users to input application descriptions and receive executable application,based on generated JavaScript/HTML/CSS code from a Language Model (LLM).",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "spring",
          color: "pink-text-gradient",
        },
        {
            name: "MUI",
            color: "blue-text-gradient",
        }
      ],
      image: aiplayground,
      source_code_link: "https://github.com/OrynaSiedina/AIplayground",
    }
  ];
  
  export { technologies, experiences, projects };