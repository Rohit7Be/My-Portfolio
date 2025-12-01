import React, { useEffect, useState } from 'react'
import { Briefcase, Code, User,GraduationCap,Computer,Handshake,FileDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import invlogo from '../assets/inv-logo.png';
import rainbowlogo from '../assets/rainbow-logo.png';
import bluestocklogo from '../assets/bluestock-logo.png';
import Tilt from 'react-parallax-tilt';
import culogo from '../assets/culogo.png';


const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // allow animation every scroll
    });
  }, []);

  useEffect(() => {
    AOS.refresh(); // refresh AOS when tab changes
  }, [activeTab]);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground">
              With hands-on experience in building web applications, I specialize in creating responsive, accessible, and high-performance websites using modern technologies.
            </p>
            <p className="text-muted-foreground">
              I love solving problems through clean, efficient code and designing intuitive user experiences. Always eager to learn, I keep up with the latest trends in web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center mb-8">
              <button data-aos="flip-left" data-aos-delay="1000"
                onClick={() => setActiveTab(activeTab === "education" ? null : "education")}
                className={`cosmic-button bg-black border-2 ${activeTab === "education" ? "bg-green-500 text-white " : ""}`}
              ><GraduationCap className="h-5 w-5 mr-2 inline-block" />
                Education
              </button>
              <button data-aos="flip-left" data-aos-delay="1000"
                onClick={() => setActiveTab(activeTab==="experience" ? null : "experience")}
                className={`cosmic-button bg-black border-2 ${activeTab === "experience" ? "bg-green-500 text-white" : ""}`}
              ><Computer className="h-5 w-5 mr-2 inline-block" />
                Experience
              </button>
            </div>
            <div  className="mt-6">
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a data-aos="zoom-out" href="#contact" className="cosmic-button">
                 <Handshake className='h-5 w-5 mr-2 inline-block'/> Get In Touch
                </a>
                <a data-aos="zoom-out"
                  href="resume.pdf"
                  download
                  className="px-6 py-2 rounded-full bg-blue-600 border border-primary text-white hover:bg-primary/10 transition-colors duration-300"
                > <FileDown className='h-5 w-5 mr-2 inline-block' />
                  Download CV
                </a>
              </div>
            </div>
          </div>
          

          <div data-aos="fade-left" className="grid grid-cols-1 gap-6">
            <Tilt glareEnable={true} glareMaxOpacity={0} scale={1.05} transitionSpeed={2500} data-aos="fade-right">
  <div className="gradient-border p-6 card-hover hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300" data-aos="fade-up">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
</Tilt>
<Tilt glareEnable={true} glareMaxOpacity={0} scale={1.05} transitionSpeed={2500} data-aos="fade-right">
  <div className="gradient-border p-6 card-hover hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
</Tilt>
<Tilt glareEnable={true} glareMaxOpacity={0} scale={1.05} transitionSpeed={2500} data-aos="fade-right">
  <div className="gradient-border p-6 card-hover hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Javascript Developer</h4>
                  <p className="text-muted-foreground">
                    Crafting interactive web experiences with modern JavaScript.
                  </p>
                </div>
              </div>
            </div>
</Tilt>
            
            
            {/* <div className="gradient-border p-6 card-hover hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

      </div>
     
{/* Education section  */}

     {activeTab === "education" && (
  <div
    className="p-6 rounded-xl shadow-md mt-10 mx-auto max-w-3xl"
    data-aos="fade-up"
  >
    <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
      🎓 My <span className='text-primary'>Education</span> 
    </h3>
    <div className="space-y-10">
      <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={2500} data-aos="fade-right">
  <div
        className="relative p-4 py-10 rounded-lg bg-[#0B111E] shadow-md
             transition duration-500 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/40 flex items-center gap-2 flex-col
             border-2"
        data-aos="fade-left"
      > <img src={culogo} className='w-15' alt="" />
        <strong className='text-xl'>Master of Computer Application - MCA</strong>
        <p className="text-gray-400 mt-2">
  Currently pursuing my MCA from Chandigarh University with a strong focus on advanced software development, system design, and modern web technologies. This program is helping me strengthen my foundation in algorithms, data structures, full-stack development and AI basics.
</p><span className='font-semibold'> Chandigarh University , Mohali</span> <span className='font-semibold'>(2025–present)</span>  
      </div>
</Tilt>
      <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={2500} data-aos="fade-right">
  <div
        className="relative p-4 py-10 rounded-lg bg-[#0B111E] shadow-md
             transition duration-500 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/40 flex items-center gap-2 flex-col
             border-2"
        data-aos="fade-right"
      > <img src={invlogo} className='w-15' alt="" />
        <strong className='text-xl'>Bachelor of Computer Applications - BCA</strong>
        <p className="text-gray-400 mt-2">
  Completed My Bachelor of Computer Applications (BCA) with a strong focus on Web Development. Gained hands-on experience in building responsive, user-friendly websites and web applications using modern technologies. Completed multiple projects while developing problem-solving and coding skills.
</p><span className='font-semibold'> Invertis University , Bareilly</span> <span className='font-semibold'>(2022–2025)</span>  
      </div>
</Tilt>
<Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} transitionSpeed={2500} data-aos="fade-right">
  <div
        className="relative p-4 py-10 rounded-lg bg-[#0B111E] shadow-md
             transition duration-500 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/40 flex items-center gap-2 flex-col
             border-2"
        data-aos="fade-left"
        data-aos-delay="100"
      > <img src={rainbowlogo} className='w-15' alt="" />
        <strong className='text-xl'>Intermediate</strong><span className='font-semibold'>CBSE (XII) - Science (PCM)</span>
        <span className='text-yellow-300'>Grade : A</span><p className="text-gray-400 mt-2">
    Completed Higher Secondary education with a focus on Physics, Chemistry, and Mathematics. Gained strong fundamentals in core scientific concepts and problem-solving skills.
  </p><span className='font-semibold'>Rainbow Public School , Rudrapur</span><span className='font-semibold'>(2021–2022)</span> 
      </div>
</Tilt>
<Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} transitionSpeed={2500} data-aos="fade-right">
  <div
        className="relative p-4 py-10 rounded-lg bg-[#0B111E] shadow-md
             transition duration-500 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/40 flex items-center gap-2 flex-col
             border-2"
        data-aos="fade-right"
        data-aos-delay="100"
      > <img src={rainbowlogo} className='w-15' alt="" />
        <strong className='text-xl'>High School</strong> <span className='font-semibold'>CBSE (X)</span><span className='text-yellow-300'>Grade : A</span><p className="text-gray-400 mt-2">
      Completed Secondary education with a focus on Science and Mathematics, building a solid foundation for advanced studies in PCM subjects.
    </p><span className='font-semibold' >Rainbow Public School , Rudrapur</span> <span className='font-semibold'>(2019–2020)</span> 
      </div>
</Tilt>
      
    </div>
  </div>
)}

{/* Experience section  */}


{activeTab === "experience" && (
  <div
    className="p-6 rounded-xl shadow-md mt-10 mx-auto max-w-3xl"
    data-aos="fade-up"
  >
    <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
      💼 My <span className='text-primary'>Experience</span> 
    </h3>
    <div className="space-y-10">
      <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.05} transitionSpeed={2500} data-aos="fade-right">
  <div
        className="relative p-4 py-10 rounded-lg bg-[#0B111E] shadow-md
             transition duration-500 transform
             hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/40 flex items-center gap-2 flex-col
             border-2"
        data-aos="fade-right"
        data-aos-delay="100"
      > <img src={bluestocklogo} className='w-15' alt="" />
        <strong className='text-xl'>SDE Frontend Intern</strong> <span className='font-semibold'>BlueStock Fintech</span><span className='font-semibold' >2 Months (April 2025 - June 2025) - Internship</span> 
        <p className="text-gray-400 mt-2">
  Completed a 2-month Frontend Development internship , where I worked on building responsive and interactive web applications. Gained hands-on experience with React.js, Tailwind CSS, and JavaScript. Collaborated with the UI/UX team to implement user-friendly designs. Optimized components for performance and learned agile development workflows in a real-world environment.
</p>
      </div>
</Tilt>
      
      
    </div>
  </div>
)}




    </section>
  )
}

export default AboutSection
