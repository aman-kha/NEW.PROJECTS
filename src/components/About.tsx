// pages/about.js

import Link from 'next/link';


export default function about() {
  return (
    <div id="about" className='container pt-32'>
    <div className="min-h-screen bg- flex flex-col items-center justify-center py-12 px-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4" >About Me</h1>
        <p className="text-lg mb-6" data-aos="flip-right">
          Hi, I'm <span className="font-semibold">[Aman]</span>, a passionate web developer with a knack for turning ideas into dynamic and engaging websites. 
          With experience in both front-end and back-end technologies, I specialize in building responsive, fast, and user-friendly web applications.
        </p>
        <p className="text-lg mb-6" data-aos="flip-right">
          I love solving complex problems through code and crafting intuitive user experiences. Whether it's developing a simple landing page or a full-scale web application, 
          I strive to deliver solutions that are both functional and visually appealing.
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4">My Expertise</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl">
          <li>Front-End Development: Proficient in HTML, CSS, JavaScript, and frameworks like React and Vue.js.</li>
          <li>Back-End Development: Skilled in Node.js, Express, and databases like MongoDB and MySQL.</li>
          <li>Responsive Design: Ensuring seamless experiences across all devices.</li>
          <li>Version Control: Using Git for project collaboration and version control.</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4">Connect with Me</h2>
        <p className="text-lg mb-4">I’d love to hear from you! Whether you have a project in mind or want to chat about web development, feel free to reach out.</p>

        <div className="flex justify-center space-x-4">
          <Link href="mailto:your.email@example.com" className="text-white underline">
            Email
          </Link>
          <Link href="https://www.linkedin.com/in/your-profile" className="text-white underline">
            LinkedIn
          </Link>
          <Link href="https://github.com/your-profile" className="text-white underline">
            GitHub
          </Link>
          <Link href="https://twitter.com/your-profile" className="text-white underline">
            Twitter
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
