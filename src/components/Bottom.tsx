import Image from 'next/image';

const Footer = ({ className = '' }) => {
  return (
    <footer id="contact" className={`py-5 bg-gray-900 ${className}`}>
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <p className="text-gray-400 text-center" style={{marginLeft:'307px'}}>© 2025 Devin Jonathan Thedy. All rights reserved.</p>
        
        <div className="flex justify-center items-center bg-gray-900" style={{marginRight:'-140px', marginLeft:'-100px'}}> 
          {[
            { name: 'Discord', url: 'https://discord.com/users/404293161393979392', logo: '/discord-logo.png' },
            { name: 'GitHub', url: 'https://github.com/DevCh3ng', logo: '/github-mark-white.png' },
            { name: 'LinkedIn', url: 'https://linkedin.com/in/nathajoe', logo: '/InBug-White.png' },
            { name: 'Gmail', url: 'mailto:411121341@gms.ndhu.edu.tw', logo: '/email-white.png'},
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity mx-2"
              style ={{marginRight:'-80px'}}
              aria-label={`Visit my ${social.name} profile`}
            >
              <Image
                src={social.logo}
                alt={`${social.name} Logo`}
                width={25} 
                height={25}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;