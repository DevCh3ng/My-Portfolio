import Image from 'next/image';
import profilePic from 'src/DSCF1452.png'; 

const Main = () => {
  return (
    <header className="flex-grow text-left mt-20 flex items-center relative" style={{ marginTop: '100px', marginLeft: '300px' }}>
      <div className="max-w-3xl">
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

      <div className="" style={{marginLeft: '330px', marginTop:'50px'}}>
        <Image 
          src={profilePic} 
          alt="Profile Picture" 
          width={240} 
          height={240} 
          className="rounded-full shadow-lg"
        />
      </div>
    </header>
  );
};

export default Main;
