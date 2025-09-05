import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import LineGradient from "../components/LineGradient";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ project }) => {
  const overlayStyles = ``;
  const projectTitle = project?.title.split(" ").join("-").toLowerCase();

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <motion.div variants={projectVariant} className="relative ">
      <div className=" upcomingCard">
        <div className="">
          <img
            className=" w-full"
            src={`/images/${projectTitle}.png`}
            alt={projectTitle}
          />
        </div>

        <div
          style={{
            backgroundColor: "rgba(11, 11, 11, 0.60)",
          }}
          className=" upcomingCardContent     "
        >
          <div className="bg-p1 child h-[100px] w-[85%] absolute left-1/2 -translate-x-1/2 flex flex-col justify-center items-center rounded-xl">
            <h1 className="text-white mb-3 font-bold">
              Project {project?.name}
            </h1>
            <Link to={`/details/${project?.id}`}>
              <button
                className="cursor-pointer group text-white bg-black hover:bg-gray-800 
    px-6 py-2 rounded-lg font-medium
    transition-all duration-300 ease-out
    transform hover:scale-105 hover:-translate-y-1
    shadow-lg hover:shadow-xl
    border border-gray-700 hover:border-gray-600
    flex items-center gap-2"
              >
                <span className="transition-all duration-300 group-hover:tracking-wider">
                  Details
                </span>
                <MdArrowOutward />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  console.log("here", projects);

  return (
    <section id="projects" className="  pb-16 mt-16 sm:mt-32">
      {/* HEADINGS */}
      <motion.div
        className=" md:w-2/5 mx-auto text-center"
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-3 mb-12 sm:mb-16">
          Here are some of the real-world projects I’ve built during my learning
          journey
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="">
        {projects.length > 0 && (
          <motion.div
            className="grid lg:grid-cols-2 2lg:gap-x-70 lg:gap-x-62 xl:gap-x-8 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 md:gap-6 "
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
