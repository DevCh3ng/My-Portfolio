const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-10 py-5 bg-gray-800 fixed w-full top-0 z-10">
        <h1 className="text-2xl font-bold">鄭全成</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  