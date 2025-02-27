import Skills from "src/components/Skills";

const About = () => {
  return (
    <section id="about" className="py-10 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10" >
        <div className=""style={{marginLeft:'-150px', marginRight:''}}>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-gray-400 mt-4">
            Hello, nice to meet you! My name is Devin Jonathan Thedy, I'm an Indonesian student
            who's currently studying in Taiwan at NDHU (國立東華大學) as a third year student. Cybersecurity
            is my main objective in studying here, also learning Machine Learning and Computer Vision. 
            Other things that I'm interested are photography, video/photo editing, and music.
          </p>
        </div>

        <div className="md:w-1/2">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;