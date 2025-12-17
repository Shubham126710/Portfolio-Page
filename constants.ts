import { Project, Skill, SocialLink } from './types';

// FIXED: Switched to string URLs to prevent "Failed to resolve module specifier" errors.
// Browser ES modules do not support importing images directly without a specific bundler config.

const eleraImg = "https://i.postimg.cc/qRtwcJ9b/ELERA.png";
const athenaImg = "https://i.postimg.cc/fTDFsZcX/athena.png";
const odysseusImg = "https://i.postimg.cc/wM0kgKzD/ODYSSEUS.png";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "ELERA",
    category: "EdTech Platform",
    description: "An adaptive learning platform (MERN) that dynamically assembles quizzes based on student performance and tracks topic-wise mastery.",
    image: eleraImg,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Shubham126710/ELERA",
    githubUrl: "https://github.com/Shubham126710/ELERA",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "athena.",
    category: "Academic Management",
    description: "A centralized academic platform developed to manage timetables, academic calendars, and SGPA calculations in one unified place.",
    image: athenaImg,
    tags: ["Web Dev", "Management", "Calculators"],
    link: "https://athena-cu.vercel.app/",
    githubUrl: "https://github.com/Shubham126710/athena",
    demoUrl: "https://athena-cu.vercel.app/"
  },
  {
    id: 3,
    title: "ODYSSEUS",
    category: "Content Aggregator",
    description: "A magazine-style news aggregator that curates meaningful stories with a compass-inspired, exploration-first user experience.",
    image: odysseusImg,
    tags: ["UI/UX", "Frontend", "News API"],
    link: "https://github.com/Shubham126710/ODYSSEUS",
    githubUrl: "https://github.com/Shubham126710/ODYSSEUS",
    demoUrl: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 9 },
  { name: "Machine Learning", level: 8 },
  { name: "React.js", level: 8 },
  { name: "SQL / Supabase", level: 7 },
  { name: "Figma", level: 7 },
  { name: "Git / GitHub", level: 8 },
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/Shubham126710", label: "Shubham126710" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/shubham-upadhyay-al2a9428b/", label: "Shubham Upadhyay" },
  { platform: "Instagram", url: "https://instagram.com/iamshubham_15", label: "@iamshubham_15" },
  { platform: "Twitter", url: "https://x.com/iamshubham_15", label: "@iamshubham_15" },
];