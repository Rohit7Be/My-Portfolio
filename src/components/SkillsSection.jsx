import React from 'react'
import { useState } from "react";
import {cn} from "../lib/utils";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaPython, FaJava } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiExpress, SiMongodb, SiMysql, } from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { SiCodio } from "react-icons/si";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const skills = [
    { id: 1, name: "HTML", level: 95, category: "frontend", icon: <FaHtml5 className="text-orange-500" size={60} /> },
    { id: 2, name: "CSS", level: 95, category: "frontend", icon: <FaCss3Alt className="text-blue-700" size={60} /> },
    { id: 3, name: "JavaScript", level: 90, category: "frontend", icon: <FaJs className="text-yellow-400" size={60} /> },
    { id: 4, name: "React", level: 90, category: "frontend", icon: <FaReact className="text-blue-400" size={60} /> },
    { id: 5, name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss className="text-teal-400" size={60} /> },
    { id: 6, name: "Bootstrap CSS", level: 85, category: "frontend", icon: <FaCss3Alt className="text-purple-600" size={60} /> },
    { id: 7, name: "Next.js", level: 70, category: "frontend", icon: <SiNextdotjs className="text-black" size={60} /> },
    { id: 8, name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs className="text-green-600" size={60} /> },
    // { id: 9, name: "Express", level: 75, category: "backend", icon: <SiExpress className="text-gray-700" size={60} /> },
    // { id: 10, name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb className="text-green-700" size={60} /> },
    { id: 9, name: "MySQL", level: 65, category: "backend", icon: <SiMysql className="text-blue-700" size={60} /> },
    { id: 10, name: "Python", level: 60, icon: <FaPython className="text-blue-400" size={60} /> },
    { id: 11, name: "Java", level: 70, icon: <FaJava className="text-red-600" size={60} /> },
    { id: 12, name: "C-language", level: 60, icon: <SiCodio className="text-gray-500" size={60} /> },
    { id: 13, name: "Git/GitHub", level: 90, category: "tools", icon: <FaGitAlt className="text-orange-600" size={60} /> },
    { id: 14, name: "Figma", level: 85, category: "tools", icon: <FaFigma className="text-pink-500" size={60} /> },
    { id: 15, name: "VS Code", level: 95, category: "tools", icon: <VscVscode className="text-blue-500" size={60} /> },
];

const categories = ["all", "frontend", "backend", "tools"];

const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );
    useEffect(() => {
        AOS.init({ duration: 1000, easing
    : "ease-in-out"
         }); // 1000ms animation = 1sec of animation
      }, []);
      useEffect(() => {
  AOS.refresh();
}, [activeCategory]);

const [hoveredIndex, sethoveredIndex] = useState(null)


    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div data-aos="fade-up" className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div data-aos="zoom-in" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key, index) => (
                        <div
                            key={key}
                            className=" p-6 rounded-full shadow-xs card-hover hover:scale-110 transition-transform duration-300 "
                        >
                            <div className="text-center flex flex-col items-center justify-center gap-4 float hover:-rotate-6 transition-transform duration-300" onMouseEnter={() => sethoveredIndex(key)}
          onMouseLeave={() => sethoveredIndex(null)}>
                                <h3 className="font-semibold text-xl"> {skill.name}</h3>
                                <span className={`bg-card rounded-2xl  ${hoveredIndex === key ? "shadow-green-500/50 scale-110 shadow-xl":"shadow-none"} transition duration-300`}>{skill.icon}</span>
                            </div>
                            

                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
