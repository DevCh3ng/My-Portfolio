import { useState, useEffect } from 'react';
import Image from 'next/image';

const projectsData = [
  {
    title: 'Personal Website',
    description: 'A portfolio website built with Next.js and Tailwind CSS.',
    githubUrl: 'https://github.comm/DevCh3ng/My-Portfolio',
    image: '/portfolio.png', // always put images on /public jpg/png
  },
  {
    title: 'UVA_Solutions (Ongoing)',
    description: 'UVA problems & solutions written in C++',
    githubUrl: 'https://github.com/DevCh3ng/uva-sols',
    image: '/uva.png', // profile.jpg for placeholder
  },
  {
    title: '.NET XML-XSLT Hosting',
    description: 'Implementing a hosting XML-XLST server using .NET',
    githubUrl: 'https://github.com/DevCh3ng/.net-xmlxslt-webhosting',
    image: '/xmldotnet.png', 
  },
  {
    title: 'AI_SignLanguage_Translator (Ongoing)',
    description: 'Making an AI sign language translator using DL model to a string of text',
    githubUrl: 'https://github.com/DevCh3ng/AI_SignLanguage_Translate',
    image: '/aisign_lang.png', 
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>


        <div className="relative overflow-hidden">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-4"
              >
                <div className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {project.image && (
                    <div>
                    <Image
                      src={project.image} 
                      alt={`${project.title} Screenshot`}
                      width={500} 
                      height={1000} 
                      className="rounded-md mb-4 object-cover md:-[200px]"
                      layout="fixed" 
                    />
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

 
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full hover:bg-gray-500 z-10"
          >
            &lt; 
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 p-2 rounded-full hover:bg-gray-500 z-10"
          >
            &gt; 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
