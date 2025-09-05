import { ArrowLeft, Check } from "lucide-react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import FuturePlanQuestion from "./FuturePlanQuestion";
const ProjectDetail = () => {
  const allProjects = useLoaderData();

  const params = useParams();

  const idParse = parseFloat(params.id);
  const clickedProject = allProjects.find(
    (each) => parseFloat(each.id) === idParse
  );

  const {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    desc1,
    desc2,
    title,
    name,
    live,
    frontend,
    backend,
    futurePlans,
    features,
    challenges,
    technologies,
  } = clickedProject;

  return (
    <>
      <div className="">
        <div className="bg-gradient-to-br from-orange-50 to-white">
          <div className="h-20 flex items-center justify-between px-8">
            <Link to="/">
              <button
                className="flex items-center gap-2 bg-black hover:bg-p1 px-6 py-3 
                         cursor-pointer text-white font-medium rounded-lg transition-colors duration-300 
                         font-Poppins"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </button>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-p1 to-orange-600  py-16">
            <div className="max-w-4xl mx-auto px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-Ovo">
                {clickedProject?.name} Details
              </h1>
              <div className="w-20 h-1 bg-white/60 mx-auto mb-4 rounded-full"></div>
              <p className="text-lg font-medium opacity-90 font-Poppins">
                {desc1}
              </p>
            </div>
          </div>
        </div>

        {/* <section className="customWidth flex gap-10  mt-20 customWidth">
          <div className="w-full  bg-b1 border-gray-300 border rounded-2xl p-3">
            <h1 className="font-semibold text-center mb-5">Core Features</h1>
            <p className="flex gap-2 items-center">
              <Check className="bg-p1" /> Implemented smooth search and
              filtering functionality for finding the best-matching property.
            </p>
            <p className="flex gap-2 items-center">
              <Check className="bg-p1" /> Implemented smooth search and
              filtering functionality for finding the best-matching property.
            </p>
            <p className="flex gap-2 items-center">
              <Check className="bg-p1" /> Implemented smooth search and
              filtering functionality for finding the best-matching property.
            </p>
            <p className="flex gap-2 items-center">
              <Check className="bg-p1" /> Implemented smooth search and
              filtering functionality for finding the best-matching property.
            </p>
          </div>
          <div className="w-full  bg-b1 border-gray-300 border rounded-2xl p-3">
            <h1 className="font-semibold text-center mb-5">Major Challenges</h1>
            <p className="flex gap-2 items-center">
              <Check className="bg-p1" /> Implemented smooth search and
              filtering functionality for finding the best-matching property.
            </p>
            <p className="flex gap-2 items-center">
              <Check className="bg-p1" /> Implemented smooth search and
              filtering functionality for finding the best-matching property.
            </p>
            <p className="flex gap-2 items-center">
              <Check className="bg-p1" /> Implemented smooth search and
              filtering functionality for finding the best-matching property.
            </p>
            <p className="flex gap-2 items-center">
              <Check className="bg-p1" /> Implemented smooth search and
              filtering functionality for finding the best-matching property.
            </p>
          </div>
        </section> */}

        <section className="customWidth flex lg:flex-row flex-col gap-8 mt-20">
          <div
            className="w-full bg-gradient-to-br from-orange-50/50 to-white border border-orange-200/30 
                  rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h1 className="font-semibold text-xl text-center mb-6 text-black font-Ovo">
              Core Features
            </h1>
            <div className="space-y-4">
              {features?.map((item, index) => (
                <div className="flex  gap-3 items-start group">
                  <div
                    className="w-5 h-5 bg-p1 rounded-full flex items-center justify-center 
                        flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-Poppins">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="w-full bg-gradient-to-br from-orange-50/50 to-white border border-orange-200/30 
                  rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h1 className="font-semibold text-xl text-center mb-6 text-black font-Ovo">
              Major Challenges
            </h1>
            <div className="space-y-4">
              {challenges?.map((item, index) => (
                <div className="flex gap-3 items-start group">
                  <div
                    className="w-5 h-5 bg-p1 rounded-full flex items-center justify-center 
                        flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-Poppins">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="customWidth ">
          <div className="mt-8 flex flex-wrap gap-3">
            {technologies?.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-orange-50 to-white border border-orange-200 
                 rounded-full px-5 py-2 shadow-sm hover:shadow-md 
                 hover:border-p1 hover:bg-gradient-to-r hover:from-p1/10 hover:to-orange-100/50
                 transition-all duration-300 cursor-default"
              >
                <span
                  className="text-gray-700 font-medium font-Poppins group-hover:text-p1 
                       transition-colors duration-300"
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="customWidth mt-16  mb-24 flex gap-10 justify-between">
          <div className="w-full">
            <p className="text-gray-900 mb-10">
              {" "}
              <span className="text-p1 text-xl">***</span>
              {desc2}
            </p>{" "}
            <div className="">
              <img
                className="rounded-bl-none rounded-3xl rounded-br-none"
                src={img2}
                alt=""
              />
              <a href={live} target="_blank" rel="noopener noreferrer">
                <button className="rounded-tl-none rounded-tr-none rounded-3xl hover:bg-black text-white cursor-pointer w-full bg-p1 py-4">
                  Live Website
                </button>
              </a>
            </div>{" "}
            <div className="mt-5">
              <img
                className="rounded-bl-none rounded-3xl rounded-br-none"
                src={img3}
                alt=""
              />
              <a href={frontend} target="_blank" rel="noopener noreferrer">
                <button className="rounded-tl-none rounded-tr-none rounded-3xl hover:bg-black text-white cursor-pointer w-full bg-p1 py-4">
                  Frontend Code
                </button>
              </a>
            </div>
            <div className="mt-5">
              <img
                className="rounded-bl-none rounded-3xl rounded-br-none"
                src={img4}
                alt=""
              />
              <a href={backend} target="_blank" rel="noopener noreferrer">
                <button className="rounded-tl-none rounded-tr-none rounded-3xl hover:bg-black text-white cursor-pointer w-full bg-p1 py-4">
                  Backend Code
                </button>
              </a>
            </div>{" "}
            {/* future plan */}
            <FuturePlanQuestion futurePlans={futurePlans} projectTitle={name} />
          </div>

          <div className="w-full lg:mb-24 md:block hidden">
            <div>
              {" "}
              <img className="w-full rounded-2xl" src={img1} alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
