import {
  mobile,
  backend,
  creator,
  sql,
  web,
  optifooty,
  javascript,
  typescript,
  html,
  bananasplit,
  css,
  pilgrim,
  antony,
  supabase,
  citic,
  david,
  python,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  person,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Finance Intern",
    company_name: "Pilgrim Partners Asia",
    icon: pilgrim,
    iconBg: "#ffff",
    date: "Feb 2021 - Mar 2021",
    points: [
      "Digitalised 7 years worth of invoices using self-learned Excel into an invoice tracking list, saving ~45mins per invoice search for finance manager.",
      "Dispensed $12,000 worth of invoice payments over a 1 month period with ~100% accuracy, freeing up finance manager for other strategic work.",
    ],
  },
  {
    title: "Risk Management Intern",
    company_name: "China CITIC Bank International",
    icon: citic,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Lead design and development of a comprehensive risk analysis tools with VBA, strengthening risk management strategies and speeding up processes by 150% for risk department.",
      "Overhauled department's data management system with Power Query and Power Pivot, transitioning to a more robust and scalable system, optimising usability by 100% for risk department.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "David has proven to be a diligent worker who is conscientous of his work. I am confident he can be an asset and recommend him to any prospective employer.",
    name: "Melissa Ma",
    designation: "Finance Manager",
    company: "Pilgrim Partners Asia",
    image: person,
  },
  {
    testimonial:
      "David has an excellent work ethic. He helped us optimise our processes from taking weeks to being completed with a push of a button, saving lots of time.",
    name: "Brian Chew",
    designation: "Head of Risk",
    company: "China CITIC Bank International",
    image: person,
  },
];

const projects = [
  {
    name: "OptiFooty",
    description:
      "Full-stack web application for optimising Fantasy Premier League teams.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "yellow-text-gradient",
      },
    ],
    image: optifooty,
    source_code_link: "https://optifooty.vercel.app/",
  },
  {
    name: "Antony",
    description:
      "Machine learning model for predicting companies' future sales revenue with ~85% accuracy.",
    tags: [
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "jupyter",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: antony,
    source_code_link: "https://github.com/davidchanwz/NUS_DATATHON_CHAMPION_ANTONY",
  },
  {
    name: "BananaSplit",
    description:
      "Telegram bot for tracking shared expenses, splits costs between members with ~100% accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "pytelegrambot",
        color: "green-text-gradient",
      },
    ],
    image: bananasplit,
    source_code_link: "https://github.com/davidchanwz/BananaSplit-bot",
  },
];

export { services, technologies, experiences, testimonials, projects };
