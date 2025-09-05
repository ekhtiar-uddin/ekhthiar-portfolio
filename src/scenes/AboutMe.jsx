import { motion } from "framer-motion";

import education from "../assets/education.png";
import expertise from "../assets/expertise.png";
import SocialMediaIcons from "/src/components/SocialMediaIcons";
const AboutMe = () => {
  //   const isAboveLarge = useMediaQuery("(min-width: 1500px)");
  // const isAboveSmall = useMediaQuery("(min-width: px)");
  return (
    <section id="about" className="mb-24 md:mb-32 mt-20 ">
      <motion.div
        className="  text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <span className="text-xl text-gray-800 font-medium ">
            Get To Know More
          </span>
          <p className="mb-20 font-playfair font-bold text-5xl mt-3">
            About Me
          </p>
        </div>

        <div
          className="flex lg:flex-row flex-col 
        items-center gap-16 lg:gap-16 xl:gap-24  "
        >
          <div className="relative xs:w-[400px] xs:h-[400px] w-[310px] h-[310px] rounded-[10%] overflow-hidden">
            <div className="bg-[url('./assets/about.jpg')] bg-cover w-full h-full"></div>
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-500"></div>
          </div>

          <div className="flex-1">
            {/* <div className="flex mx-auto justify-center gap-5">
              <div className=" flex-1 flex flex-col justify-center  border-gray-400 border-2 rounded-3xl px-4 py-7">
                <img className="w-[40px] mx-auto mb-3" src={expertise} alt="" />
                <h1 className="font-bold">Experience</h1>
                <p>1 years+</p>
                <p>Mern Stack Development</p>
              </div>
              <div className="flex-1 flex flex-col justify-center  border-gray-400 border-2 rounded-3xl px-4 py-7">
                <img className="w-[40px] mx-auto mb-3" src={education} alt="" />
                <h1 className="font-bold">Education</h1>
                <p>
                  Bachelor of Business Adminstration <br /> in Accounting
                </p>
              </div>
            </div> */}
            <div className="flex mx-auto justify-center gap-6">
              <div
                className="group flex-1 flex flex-col items-center text-center
    bg-white border border-gray-200 hover:border-p1/40
    rounded-2xl px-6 py-8 shadow-md hover:shadow-xl
    transition-all duration-500 hover:-translate-y-1"
              >
                <img
                  className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110"
                  src={expertise}
                  alt=""
                />
                <h1 className="font-bold text-lg mb-2">Experience</h1>
                <p className="text-p1 font-semibold">1+ Years</p>
                <p className="text-gray-600">MERN Stack Development</p>
              </div>

              <div
                className="group flex-1 flex flex-col items-center text-center
    bg-white border border-gray-200 hover:hover:border-p1/40
    rounded-2xl px-6 py-8 shadow-md hover:shadow-xl
    transition-all duration-500 hover:-translate-y-1"
              >
                <img
                  className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110"
                  src={education}
                  alt=""
                />
                <h1 className="font-bold text-lg mb-2">Education</h1>
                <p className="text-p1 font-semibold">Bachelor's Degree</p>
                <p className="text-gray-600">Business Administration</p>
              </div>
            </div>

            {/* <p className="mt-5  text-left">
              I am a MERN Stack developer, I have experience in full-stack web
              development, including frontend and backend. My expertise lies in
              React.js, Tailwind CSS, Node.js, Express, and MongoDB. I have a
              strong foundation in JavaScript, HTML, and CSS, and have worked on
              various projects to hone my skills. My vision is to continue
              learning and growing as a developer, staying updated with the
              latest trends and technologies in the MERN stack.
            </p>

            <motion.div
              className="flex  "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <SocialMediaIcons section="landing" />
            </motion.div> */}

            <div className="mt-8 space-y-6">
              <p className="text-gray-700 text-left leading-relaxed text-lg">
                I am a{" "}
                <span className="font-semibold text-p1">
                  MERN Stack developer
                </span>{" "}
                with expertise in full-stack web development. My technical
                skills include
                <span className="font-medium">
                  {" "}
                  React.js, Tailwind CSS, Node.js, Express, and MongoDB
                </span>
                . I'm passionate about creating seamless user experiences and
                robust backend solutions, continuously learning the latest
                technologies to deliver exceptional results.
              </p>

              <motion.div
                className="flex justify-start pt-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <SocialMediaIcons section="landing" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
