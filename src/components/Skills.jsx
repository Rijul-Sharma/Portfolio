import React, { useRef, useState } from "react";
import HTMLFlipBook from 'react-pageflip';
import { motion } from "framer-motion";

const skillsPages = [
    { title: "Frontend Skills", skills: ["React", "Next.js", "Tailwind", "TypeScript"] },
    { title: "Backend Skills", skills: ["Node.js", "Express", "NestJS", "MongoDB"] },
    { title: "DevOps & Tools", skills: ["Docker", "GitHub Actions", "AWS", "Linux"] },
    { title: "Soft Skills", skills: ["Problem-Solving", "Teamwork", "Communication", "Leadership"] }
];
const Skills = () => {
    const bookRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);

    const onFlip = (e) => setCurrentPage(e.data);

    return (
        <div className="flex flex-col justify-center items-center h-screen text-white">
            {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-4 text-3xl font-bold text-blue-400"
            >
                My Skills Flipbook
            </motion.div> */}

            {/* Flipbook Component */}
            <HTMLFlipBook
                ref={bookRef}
                width={450}
                height={642}
                onFlip={onFlip}
                startPage={0}
                maxShadowOpacity={0.5}
                showCover={true} // Enables single-side effect for first & last page
                className="shadow-2xl rounded-lg"
            >
                {/* Cover Page */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 rounded-lg flex flex-col justify-center items-center h-full">
                    <h1 className="text-5xl font-bold text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">My Skills</h1>
                    {/* <p className="text-lg text-gray-300 mt-2">A showcase of my skills</p> */}
                </div>

                {/* Page 1 - Frontend Skills */}
                <div className="bg-[#1E1E1E] text-white p-6 rounded-lg shadow-lg border border-gray-700">
                    <h2 className="text-5xl font-bold text-blue-400 text-center absolute ">Programming Languages</h2>
                    <div className="flex justify-center items-center h-full">
                        <div className="flex flex-wrap gap-4 gap-y-8 justify-center">
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">C++</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Python</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">SQL</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Java</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">JavaScript</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">TypeScript</div>
                        </div>
                    </div>
                </div>

                {/* Page 2 - Backend Skills */}
                <div className="bg-[#1E1E1E] text-white p-6 rounded-lg shadow-lg border border-gray-700">
                    <h2 className="text-5xl font-bold text-green-400 text-center absolute w-full mx-auto">Tools</h2>
                    <div className="flex justify-center items-center h-full">
                        <div className="flex flex-wrap gap-4 gap-y-8 justify-center">
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">MongoDb</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Prisma</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">VS Code</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">PyCharm</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">MySQL</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Git</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">GitHub</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Microsoft Office</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Postman</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Bitbucket</div>
                        </div>
                    </div>
                </div>

                {/* Page 3 - DevOps & Tools */}
                <div className="bg-[#1E1E1E] text-white p-6 rounded-lg shadow-lg border border-gray-700">
                <h2 className="text-5xl font-bold text-green-400 text-center absolute">Frameworks and Libraries</h2>
                    <div className="flex justify-center items-center h-full">
                        <div className="flex flex-wrap gap-4 gap-y-8 justify-center">
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">React.js</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Node.js</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Express.js</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Tailwind CSS</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Mongoose</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Next.js</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">TanStack Query</div>
                        </div>
                    </div>
                </div>

                {/* Page 4 - Soft Skills */}
                <div className="bg-[#1E1E1E] text-white p-6 rounded-lg shadow-lg border border-gray-700">
                <h2 className="text-5xl font-bold text-purple-400 text-center absolute">Frameworks and Libraries</h2>
                    <div className="flex justify-center items-center h-full">
                        <div className="flex flex-wrap gap-4 gap-y-8 justify-center">
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">React.js</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Node.js</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Express.js</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Tailwind CSS</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Mongoose</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">Next.js</div>
                            <div className="border-[1px] inline-block py-1 px-4 rounded-2xl font-serif text-2xl">TanStack Query</div>
                        </div>
                    </div>
                </div>

                {/* Back Cover */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 rounded-lg flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold">🚀 Thanks for Reading!</h1>
                    <p className="text-lg text-gray-300 mt-2">Connect with me online!</p>
                </div>
            </HTMLFlipBook>

            {/* Navigation Buttons */}
            <div className="mt-4 flex space-x-4">
                <button
                    className="px-4 py-2 bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition"
                    onClick={() => bookRef.current.pageFlip().flipPrev()}
                >
                    Prev
                </button>
                <span className="text-lg font-semibold">{currentPage + 1} / 6</span>
                <button
                    className="px-4 py-2 bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition"
                    onClick={() => bookRef.current.pageFlip().flipNext()}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Skills
