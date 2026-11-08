import {
  Braces,
  Code2,
  Database,
  Smartphone,
  Wrench,
} from "lucide-react";

export const links = {
  github: "https://github.com/oliverisong07",
  linkedin: "https://www.linkedin.com/in/oliver-isong-567535381?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  email: "mailto:oliverclement2008@gmail.com",
};

export const skills = [
  {
    title: "Frontend development",
    icon: Braces,
    items: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Programming languages",
    icon: Code2,
    items: ["Java", "Python"],
  },
  {
    title: "Mobile development",
    icon: Smartphone,
    items: ["Flutter", "React Native"],
  },
  {
    title: "Backend & database",
    icon: Database,
    items: ["Supabase"],
  },
  {
    title: "Development tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Babcock To-Do Application",
    category: "Productivity · Web application",
    description:
      "A task management application designed to help people organize their to-dos and keep everyday work moving.",
    features: ["Task organization", "Simple productivity workflow", "Clear task overview"],
    technologies: ["React", "JavaScript", "CSS"],
    preview: "tasks",
    repository: "",
    demo: "",
  },
  {
    number: "02",
    title: "E-commerce Website",
    category: "Commerce · Web application",
    description:
      "An online shopping platform concept focused on considered product discovery and a straightforward shopping experience.",
    features: ["Product browsing", "Authentication concept", "Responsive storefront"],
    technologies: ["React", "JavaScript", "CSS"],
    preview: "shop",
    repository: "",
    demo: "",
  },
  {
    number: "03",
    title: "Travel Booking Platform",
    category: "Travel · Platform concept",
    description:
      "A travel platform concept exploring how flight and travel booking can feel clearer from search to itinerary.",
    features: ["Travel search concept", "Flight discovery", "Booking-focused interface"],
    technologies: ["JavaScript", "React", "CSS"],
    preview: "travel",
    repository: "",
    demo: "",
  },
];

export const strengths = [
  {
    number: "01",
    title: "Thoughtful problem-solving",
    text: "I like breaking a challenge into manageable pieces and working towards a useful, considered solution.",
  },
  {
    number: "02",
    title: "Always learning",
    text: "I stay curious, learn by building, and welcome feedback that helps me improve my engineering practice.",
  },
  {
    number: "03",
    title: "A collaborative mindset",
    text: "I value clear communication, shared ownership, and contributing positively to a team.",
  },
  {
    number: "04",
    title: "Care for the details",
    text: "I aim to create accessible, maintainable work and pay attention to the details that make a product easier to use.",
  },
];
