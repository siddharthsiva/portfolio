import Navbar from './navbar';
import { ProjectCard } from './Cards/projectCard';
import { motion } from 'framer-motion';
import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiAmazondynamodb,
  SiAmazon,
  SiNodedotjs,
  SiPython,
  SiAmazoncognito,
  SiHtml5,
  SiLatex,
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa6';
import { TbSql, TbBrandCpp } from 'react-icons/tb';
import { AiOutlineOpenAI } from 'react-icons/ai';

export default function Projects() {
  const techStack = [
    { name: 'TypeScript', icon: <SiTypescript size={28} className="text-blue-500" /> },
    { name: 'React', icon: <SiReact size={28} className="text-cyan-400" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} className="text-teal-400" /> },
    { name: 'Firebase', icon: <SiFirebase size={28} className="text-yellow-400" /> },
    { name: 'AWS Lambda', icon: <SiAmazon size={28} className="text-orange-400" /> },
    { name: 'DynamoDB', icon: <SiAmazondynamodb size={28} className="text-blue-400" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={28} className="text-green-500" /> },
    { name: 'Python', icon: <SiPython size={28} className="text-yellow-500" /> },
    { name: 'Amazon Cognito', icon: <SiAmazoncognito size={28} className="text-purple-500" /> },
    { name: 'HTML5', icon: <SiHtml5 size={28} className="text-orange-500" /> },
    { name: 'Java', icon: <FaJava size={28} className="text-red-500" /> },
    { name: 'SQL', icon: <TbSql size={28} className="text-blue-600" /> },
    { name: 'LaTeX', icon: <SiLatex size={28} className="text-blue-700" /> },
    { name: 'C++', icon: <TbBrandCpp size={28} className="text-blue-800" /> },
    { name: 'OpenAI', icon: <AiOutlineOpenAI size={28} className="text-blue-900" /> },
  ];

  const projects = [
    {
      Name: 'Playback',
      Description: 'San Francisco 49ers playcalling engine that recommends offensive concepts using game‑context analytics and model‑based outcomes',
      Link: 'https://github.com/siddharthsiva/playback',
    },
    {
      Name: 'Mini-Snowflake',
      Description: 'High‑performance columnar analytical database engine in modern C++20 with advanced storage, query optimization, and a production‑ready HTTP API.',
      Link: 'https://github.com/siddharthsiva/mini-snowflake',
    },
    {
      Name: 'Virtual Me',
      Description: 'Full‑stack personal behavior analytics platform that tracks multi‑source events and delivers interactive productivity insights via a FastAPI backend and React/TypeScript dashboard',
      Link: 'https://github.com/siddharthsiva/Virtual-Me',
    },
    {
      Name: 'Rate My Dining Hall',
      Description: 'Student‑run UCSD dining hall review frontend built with React, TypeScript, and Redux for browsing halls, viewing reviews, and submitting ratings',
      Link: 'https://github.com/siddharthsiva/ratemydininghall',
    },
    {
      Name: 'Dorm Dash',
      Description: 'Campus micro‑delivery platform for UCSD students with a React Native frontend and FastAPI/PostgreSQL backend, featuring requests, gamification, and leaderboards',
      Link: 'https://github.com/siddharthsiva/dormdash',
    },
    {
      Name: 'Climate Lens',
      Description: 'Interactive R Shiny dashboard that explores climate‑change indicators with real‑world datasets and rich visualizations.',
      Link: 'https://github.com/siddharthsiva/climate-lens',
    },
    {
      Name: 'SkillForge',
      Description: 'Gamified learning platform with animated skill trees, XP progression, and AI‑generated quests built with React Native, Firebase, and FastAPI/LangChain',
      Link: 'https://github.com/siddharthsiva/skillforge',
    },
    {
      Name: 'Favourite Albums',
      Description: 'R Shiny app for exploring and analyzing yearly rankings of favorite music albums using CSV‑based datasets',
      Link: 'https://github.com/siddharthsiva/favouritealbums',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Navbar />

      <div className="flex flex-grow px-6 py-10 gap-8 flex-col md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/4 text-white flex flex-col items-center"
        >
          <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-3 gap-6">
            {techStack.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-1">
                {tech.icon}
                <span className="text-xs text-gray-300">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="w-full md:w-3/4 flex flex-col gap-10">

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl text-white mb-6">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  Name={project.Name}
                  Description={project.Description}
                  Link={project.Link}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}