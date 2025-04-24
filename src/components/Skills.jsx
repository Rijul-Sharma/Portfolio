import React, { useRef, useState } from "react";
import HTMLFlipBook from 'react-pageflip';
import { motion } from "framer-motion";
import AnimatedContent from "./AnimatedContent";
import cpp from '../assets/logos/c++.png'
import python from '../assets/logos/python.png'
import sql from '../assets/logos/sql.png'
import java from '../assets/logos/java.png'

import html from '../assets/logos/html.png';
import css from '../assets/logos/css.png'
import javascript from '../assets/logos/javascript.png'
import typescript from '../assets/logos/typescript.png'
import react from '../assets/logos/react.png'
import nextjs from '../assets/logos/nextjs.png'
import tailwind from '../assets/logos/tailwind.png'

import nodejs from '../assets/logos/nodejs.png'
import expressjs from '../assets/logos/expressjs.png'
import mongodb from '../assets/logos/mongodb.png'
import postgresql from '../assets/logos/postgresql.png'
import mysql from '../assets/logos/mysql.png'

import git from '../assets/logos/git.png'
import github from '../assets/logos/github.png'
import postman from '../assets/logos/postman.png'
import bitbucket from '../assets/logos/bitbucket.png'
import pycharm from '../assets/logos/pycharm.png'


const languages = [
    {
      name: 'C++',
      imgSrc: cpp,
      color: 'hover:border-blue-500',
    },
    {
      name: 'Python',
      imgSrc: python,
      color: 'hover:border-yellow-500',
    },
    {
      name: 'Java',
      imgSrc: java,
      color: 'hover:border-red-500',
    },
    {
      name: 'SQL',
      imgSrc: sql,
      color: 'hover:border-blue-500',
    },
    
];

const frontEndSkills = [
    {
      name: 'HTML',
      imgSrc: html,
      color: 'hover:border-orange-500',
    },
    {
      name: 'CSS',
      imgSrc: css,
      color: 'hover:border-blue-500',
    },
    {
      name: 'Javascript',
      imgSrc: javascript,
      color: 'hover:border-yellow-500',
    },
    {
      name: 'Typescript',
      imgSrc: typescript,
      color: 'hover:border-blue-500',
    },
    {
      name: 'Reactjs',
      imgSrc: react,
      color: 'hover:border-cyan-500',
    },
    {
      name: 'Nextjs',
      imgSrc: nextjs,
      color: 'hover:border-white',
    },
    {
      name: 'Tailwind',
      imgSrc: tailwind,
      color: 'hover:border-cyan-500',
    },
    
];

const backEndSkills = [
    {
      name: 'Node.js',
      imgSrc: nodejs,
      color: 'hover:border-green-500',
    },
    {
      name: 'Express.js',
      imgSrc: expressjs,
      color: 'hover:border-white',
    },
    {
      name: 'MongoDB',
      imgSrc: mongodb,
      color: 'hover:border-green-500',
    },
    {
      name: 'PostgreSQL',
      imgSrc: postgresql,
      color: 'hover:border-blue-500',
    },
    {
      name: 'MySQL',
      imgSrc: mysql,
      color: 'hover:border-orange-500',
    },
    
];

const otherTools = [
    {
      name: 'Git',
      imgSrc: git,
      color: 'hover:border-orange-600',
    },
    {
      name: 'Postman',
      imgSrc: postman,
      color: 'hover:border-orange-500',
    },
    {
      name: 'Github',
      imgSrc: github,
      color: 'hover:border-white',
    },
    {
      name: 'Bitbucket',
      imgSrc: bitbucket,
      color: 'hover:border-blue-500',
    },
    {
      name: 'PyCharm',
      imgSrc: pycharm,
      color: 'hover:border-green-400',
    },
    
];



const Skills = () => {
    return (
        <div className="min-h-screen text-white flex mb-20 items-center flex-col" id="skills">

            <div className="flex items-center w-full my-16">
                {/* Left Line */}
                <div className="flex-grow h-[2px] bg-gray-700" />

                {/* Center Box */}
                <div className="px-4 py-0 xs430:px-6 xs430:py-2 md:px-8 md:py-4 bg-slate-500 text-white text-[clamp(3rem,9vw,4.5rem)] lg:text-7xl font-semibold rounded-lg shadow border border-gray-800 leading-tight">
                    Skills
                </div>

                {/* Right Line */}
                <div className="flex-grow h-[2px] bg-gray-700" />
            </div>


            <div className="w-[85vw] sm:w-[75vw] xl:w-[920px] border-2 border-gray-600 rounded-xl p-6 xs430:p-8 sm:p-10 flex flex-col items-center gap-7 sm:gap-10 lg:gap-16">
                <div className="flex flex-col items-center">
                    <div className="text-center text-[clamp(1.5rem,4.5vw,2.25rem)] lg:text-4xl bg-slate-800 font-semibold inline-block mb-10 px-6 py-2 rounded-md">Languages</div>
                    <div className="flex flex-wrap gap-7 sm:gap-10 justify-center">
                        {languages.map(e => (
                            <div className={`p-3 min-w-28 border-2 border-gray-600 rounded-md font-semibold text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl flex flex-col gap-2 items-center justify-center shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.1] ${e.color}`}>
                                <div><img className="w-9" src={e.imgSrc} alt="" /></div>
                                <div>{e.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                

                <div className="flex flex-col items-center">
                    <div className="text-center text-[clamp(1.5rem,4.5vw,2.25rem)] lg:text-4xl bg-slate-800 font-semibold inline-block mb-10 px-6 py-2 rounded-md">Frontend</div>
                    <div className="flex flex-wrap gap-7 sm:gap-10 justify-center">
                        {frontEndSkills.map(e => (
                            <div className={`p-3 min-w-28 border-2 border-gray-600 rounded-md font-semibold text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl flex flex-col gap-2 items-center justify-center shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.1] ${e.color}`}>
                                <div><img className="w-9" src={e.imgSrc} alt="" /></div>
                                <div>{e.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-center text-[clamp(1.5rem,4.5vw,2.25rem)] lg:text-4xl bg-slate-800 font-semibold inline-block mb-10 px-6 py-2 rounded-md leading">Backend and Databases</div>
                    <div className="flex flex-wrap gap-7 sm:gap-10 justify-center">
                        {backEndSkills.map(e => (
                            <div className={`p-3 min-w-28 border-2 border-gray-600 rounded-md font-semibold text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl flex flex-col gap-2 items-center justify-center shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.1] ${e.color}`}>
                                <div><img className="w-9" src={e.imgSrc} alt="" /></div>
                                <div>{e.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-center text-[clamp(1.5rem,4.5vw,2.25rem)] lg:text-4xl bg-slate-800 font-semibold inline-block mb-10 px-6 py-2 rounded-md">Other Tools</div>
                    <div className="flex flex-wrap gap-7 sm:gap-10 justify-center">
                        {otherTools.map(e => (
                            <div className={`p-3 min-w-28 border-2 border-gray-600 rounded-md font-semibold text-[clamp(1rem,3vw,1.5rem)] lg:text-2xl flex flex-col gap-2 items-center justify-center shadow-md hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)] transition-all duration-300 transform hover:scale-[1.1] ${e.color}`}>
                                <div><img className="w-9" src={e.imgSrc} alt="" /></div>
                                <div>{e.name}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
        
    );
}

export default Skills
