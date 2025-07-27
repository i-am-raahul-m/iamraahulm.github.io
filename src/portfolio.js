/* Raahul Muthukumar's Custom Developer Portfolio Config */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Raahul Muthukumar",
  title: "Hi all, I'm Raahul",
  subTitle: emoji(
    "A highly motivated Computer Engineer 🚀 with experience in software development, ML, and full-stack projects using Python, C++, Java, React, Flask, and more. I love solving problems and building impactful tech."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/i-am-raahul-m",
  linkedin: "https://www.linkedin.com/in/raahul-muthukumar",
  gmail: "i.am.raahul.m@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE DEVELOPER WHO BUILDS FULL-STACK AND AI SOLUTIONS",
  skills: [
    emoji("⚡ Build AI/ML models and integrate them into usable systems"),
    emoji("⚡ Design and develop full-stack web applications"),
    emoji("⚡ Work on open-source classification models and video-proctoring tools")
  ],
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "C++", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Flask", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "GCP", fontAwesomeClassname: "fab fa-google" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Vellore Institute of Technology, Chennai",
      logo: require("./assets/images/vitLogo.png"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "2023 - 2027",
      desc: "Rank 1 in CSE Core (1st Year), Rank 2 (2nd Year).",
      descBullets: [
        "Awarded for academic excellence in CSE Core subjects",
        "Active contributor in Data Science Department and IEEE RAS"
      ]
    },
    {
      schoolName: "The Study, Puducherry",
      logo: require("./assets/images/thestudyLogo.png"),
      subHeader: "10th & 12th Grades",
      duration: "2020 - 2023",
      desc: "Scored 95% in 10th, 94.6% in 12th",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend", progressPercentage: "80%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Machine Learning", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Student Research Intern",
      company: "VIT Chennai",
      companylogo: require("./assets/images/vitLogo.png"),
      date: "2025",
      desc: "Worked on integrating VLMs and LLMs into video-proctoring pipeline and developed GraphRAG from knowledge graphs."
    },
    {
      role: "Hackathon Finalist",
      company: "Urban Vision Mobility Hackathon",
      companylogo: require("./assets/images/hackathonLogo.png"),
      date: "2025",
      desc: "Proposed smart AI solutions for urban mobility challenges."
    }
  ]
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Some impactful work I've built",
  projects: [
    {
      image: require("./assets/images/solaceLogo.png"),
      projectName: "SOLACE",
      projectDesc: "A holistic mental health site with chatbot, therapist booking, and document upload",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/i-am-raahul-m"
        }
      ]
    },
    {
      image: require("./assets/images/deepnetcraftLogo.png"),
      projectName: "DeepNetCraft",
      projectDesc: "AutoML web tool to drag & drop, train and test deep learning models",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/i-am-raahul-m"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Awards, Certifications, and Recognitions",
  achievementsCards: [
    {
      title: "Machine Learning - IIT Bombay",
      subtitle: "Certified in Machine Learning fundamentals and applications",
      image: require("./assets/images/mlLogo.png"),
      imageAlt: "ML Logo",
      footerLink: []
    },
    {
      title: "GenAI - IBM",
      subtitle: "Completed certification in Generative AI by IBM",
      image: require("./assets/images/genaiLogo.png"),
      imageAlt: "GenAI Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally write on ML, web dev and mental health tech.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("I love discussing AI, mental health tech and student projects"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Interviews and discussions coming soon!",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "View or download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to collaboration, internships or tech discussions!",
  number: "+91 8122309965",
  email_address: "i.am.raahul.m@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

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
