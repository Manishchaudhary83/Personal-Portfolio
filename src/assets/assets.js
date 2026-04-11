import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import darazClone from '../assets/daraz-clone.png';


export const assets = {
    profileImg,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native']
  },

  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub',  'Figma']
  }
];



export const projects = [
 {
  title: "Daraz Clone",
  description: "Developed a Daraz-inspired e-commerce frontend with responsive design, product listings, category sections, and modern UI components.",
  image: darazClone,
  tech: ["React", "Tailwind CSS", "JavaScript"],
  icons: [FaReact, FaNodeJs, FaDatabase],
  demo: "https://daraz-clone-rose.vercel.app/"
}
];


export const workData = [
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2024 - present",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
