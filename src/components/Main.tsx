import Image from 'next/image';
import profilePic from 'src/DSCF1452.png';

const Main = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <header className="flex flex-col md:flex-row items-center justify-between text-left mt-40">
        <div className="max-w-5xl" style={{marginLeft:'-200px'}}>
          <h2 className="text-5xl font-bold">Hi! My name is Devin Thedy</h2>
          <p className="text-gray-400 mt-4">
            Computer Science Student with Network and Systems concentration.
          </p>
          <a 
            href="/cv.pdf" 
            download="Devin_CV.pdf" 
            className="mt-6 inline-block bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600"
          >
            View Resume
          </a>
        </div>

        <div className="mt-10 md:mt-0">
          <Image 
            src={profilePic} 
            alt="Profile Picture" 
            width={240} 
            height={240} 
            className="rounded-full shadow-lg"
            style={{marginLeft:'200px'}}
          />
        </div>
      </header>
    </div>
  );
};

export default Main;
