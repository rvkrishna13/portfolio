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
  username: "Venkata Krishna Ravi",
  title: "Hi all, I'm Venkat",
  subTitle: emoji(
    "A passionate Full Stack Developer with 2 years of experience and an MS in Computer Science (in progress) from Stony Brook University. Proficient in Python, Java, JavaScript, React, Vue, and Node.js, with expertise in database management and cloud services. Committed to creating innovative solutions through backend, frontend, and full-stack development, with a focus on scalable and efficient applications"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RpXvFySO5oPPtZ-LqgSabLib7bUpQ6yY/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {  
  github: "https://github.com/rvkrishna13",
  linkedin: "https://www.linkedin.com/in/venkata-krishna-ravi-b6903a195/",
  gmail: "rvkrishna0526@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE ENGINEER MASTERING FULL STACK, SOFTWARE DEVELOPMENT, AND SYSTEMS ENGINEERING—PIONEERING SOLUTIONS ACROSS CUTTING-EDGE TECH STACKS",
  skills: [
    emoji("⚡ Proficient in designing efficient schemas with MongoDB, PostgreSQL, and MySQL for high-performance data management"),
    emoji(
      "⚡ Implemented automated systems using Python and optimized deployments with Docker and Kubernetes on Azure"
    ),
    emoji(
      "⚡ Expertise in building scalable web applications using Python, Java, Node.js, TypeScript, React, and Vue.js"
    ),
    emoji(
      "⚡ Developed robust RESTful APIs, enhancing system integration and reducing latency"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?td=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "VueJS",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/sbuLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        
      ]
    },
    {
      schoolName: "Indian Institute of Technology Hyderabad",
      logo: require("./assets/images/iithLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "July 2017 - May 2021",
      desc: "Took courses about Software Engineering, Database Manatement, Operating Systems, Computer Networks",
      descBullets: [  ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "API Development",
      progressPercentage: "85%" 
    },
    
    {
      Stack: "Database Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Services", 
      progressPercentage: "80%" 
    },
    {
      Stack: "Microservices Architecture",
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
      role: "Software Project Assistant",
      company: "LCNeuro",
      companylogo: require("./assets/images/laufer.png"),
      date: "January 2024 – Present",
      desc: "",
      descBullets: [
        "Developing Vue.js-based GUI for Neuroblox.jl, enhancing usability for neuroscience researchers.",
        "Integrating Vue.js frontend with Julia backend, facilitating efficient brain circuit modeling.",
        "Contributing to high-performance simulation tools, achieving 100x speed increase over existing solutions.",
        "Enabling intuitive model building and analysis for large-scale brain dynamics research."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Vibesea Inc",
      companylogo: require("./assets/images/vibesea1.jpeg"),
      date: "May 2024 – August 2024",
      desc: "",
      descBullets: [
        "Engineered solutions using Node.js, TypeScript, and React for a job search and social platform.",
        "Implemented scalable schemas in MongoDB and PostgreSQL for efficient data management..",
        "Created RESTful APIs with Node.js and TypeScript, optimizing backend integration and reducing response times by 30%.",
        "Developed a Python-based job update system and architected a Reddit-like 'Shadow' feature for high-volume social interactions. Utilized Docker and Git for containerization and version control."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Jio Platforms",
      companylogo: require("./assets/images/jio.png"),
      date: "July 2021 – August 2023",
      descBullets: [
        "Led microservices architecture implementation, boosting scalability by 25% for 400M+ users.",
        "Optimized infrastructure, cutting API response time by 50% and page load speed by 70%.",
        "Developed advanced security solutions, enhancing data protection for millions of users.",
        "Streamlined CI/CD with Azure Kubernetes, reducing deployment errors by 80%."  
      ]
    },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Software TLB for xv6 Operating System",
      projectDesc: "Implemented a software-managed Translation Lookaside Buffer (sTLB) in the xv6 operating system, enhancing memory management and address translation efficiency. This optimization involved integrating the sTLB into xv6's memory subsystem, including modifications to the page fault handler and context switching mechanisms. The implementation significantly improved system performance, reducing execution time from 3,500 to 2,700 ticks across various tests. This 18% decrease in processing time demonstrates the substantial impact of the sTLB on xv6's overall efficiency and responsiveness",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/rvkrishna13/exokernel"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Massively Parallel Server Processor",
      projectDesc: "Developing a cutting-edge Linux kernel module to enhance server performance through the implementation of SIMT (Single-Instruction Multiple-Thread) drivers. This innovative approach enables more efficient parallel processing in server environments. The project has successfully executed a basic 'hello-world' program with system calls, demonstrating initial functionality of the SIMT drivers. Current efforts are focused on further development and optimization to expand the module's capabilities and integrate advanced features. This work aims to significantly improve server processing efficiency by leveraging massively parallel architectures, potentially revolutionizing data center performance and scalability.",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Let's Connect and Build Something Great Together!",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-6314355912",
  email_address: "rvkrishna0526@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
