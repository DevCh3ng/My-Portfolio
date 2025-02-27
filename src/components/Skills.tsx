import { useState } from "react";
type SkillCategory = "Programming Languages" | "Frameworks" | "Tools & Platforms";

const skillsData: Record<SkillCategory, string[]> = {
  "Programming Languages": ["Java/JavaScript", "TypeScript", "Python", "C#/C/C++"],
  "Frameworks": ["Next.js", "Tailwind CSS", "Node.js", "React", ".NET"],
  "Tools & Platforms": ["Git & GitHub", "Jupyter Notebooks", "VS Code", "Bash"],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>("Programming Languages");

  return (
    <section className="text-white" style={{ marginRight: '-50px', marginLeft: '100px' }}>
      <h2 className="text-4xl font-bold mb-4">Skills</h2>

      <div className="flex space-x-2 mb-4">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md text-sm ${
              activeTab === category ? "bg-gray-700" : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(category as SkillCategory)} 
          >
            {category}
          </button>
        ))}
      </div>
      <ul className="list-disc list-inside">
        {skillsData[activeTab].map((skill) => (
          <li key={skill} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
