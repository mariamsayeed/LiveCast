import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <ul className="flex justify-center  space-x-8"> {/* Center the lists and add space between them */}
          {/* List 1: About, FAQ, Videos, Roadmap, Code of Conduct */}
          <li>
            <strong>About</strong>
            <ul>
              <li><a href="#faq" className="hover:underline hover:text-white">FAQ</a></li>
              <li><a href="#videos" className="hover:underline hover:text-white">Videos</a></li>
              <li><a href="#roadmap" className="hover:underline hover:text-white">Roadmap</a></li>
              <li><a href="#code-of-conduct" className="hover:underline hover:text-white">Code of Conduct</a></li>
            </ul>
          </li>

          {/* List 2: Contact, GitHub, Donate */}
          <li>
            <strong>Contact</strong>
            <ul>
              <li><a href="#github" className="hover:underline hover:text-white">GitHub</a></li>
              <li><a href="#donate" className="hover:underline hover:text-white">Donate</a></li>
            </ul>
          </li>

          {/* List 3: Demo, Watch, Broadcast */}
          <li>
            <strong>Demo</strong>
            <ul>
              <li><a href="#watch" className="hover:underline hover:text-white">Watch</a></li>
              <li><a href="#broadcast" className="hover:underline hover:text-white">Broadcast</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
