import { Poppins } from 'next/font/google';
import Navbar from 'src/components/Navbar';
import Main from '@components/Main';
import About from 'src/components/About';
import Projects from 'src/components/Projects'; 
import Bottom from '@components/Bottom';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen bg-gray-900 text-white ${poppins.className}`}>
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Bottom />
    </div>
  );
}