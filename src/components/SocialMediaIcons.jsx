// import facebook from "../assets/facebook.png";
// import github from "../assets/github.png";
// import instagram from "../assets/instagram.png";
// import linkedin from "../assets/linkedin.png";
// const SocialMediaIcons = ({ section }) => {
//   return (
//     <div className="flex justify-center md:justify-start my-10 gap-7">
//       <a
//         className=" hover:opacity-70 transition duration-500"
//         href="https://www.linkedin.com/in/m-ekhthiar-uddin-a5bb79229/"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <img
//           className="w-[40px]  h-[40px]"
//           alt="linkedin-link"
//           src={linkedin}
//         />
//       </a>
//       <a
//         className=" hover:opacity-70 transition duration-500"
//         href="https://github.com/Niloy11111"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <img className="w-[40px]  h-[40px]" alt="linkedin-link" src={github} />
//       </a>

//       <a
//         className=" w-[40px] h-[40px] hover:opacity-70 transition duration-500"
//         href="https://www.facebook.com/ektiar.niloy"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <img
//           className="w-[40px]  h-[40px]"
//           alt="facebook-link"
//           src={facebook}
//         />
//       </a>
//       <a
//         className=" hover:opacity-70 transition duration-500"
//         href="https://www.instagram.com"
//         target="_blank"
//         rel="noreferrer"
//       >
//         <img
//           className="w-[42px] h-[42px]"
//           alt="instagram-link"
//           src={instagram}
//         />
//       </a>
//     </div>
//   );
// };

// export default SocialMediaIcons;

import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

const SocialMediaIcons = ({ section }) => {
  return (
    <div className="flex justify-center md:justify-start gap-4">
      <a
        className="group w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg
          flex items-center justify-center transition-all duration-300 
          hover:scale-110 hover:-translate-y-1"
        href="https://www.linkedin.com/in/muhammad-ekhthiar-uddin-softwaredeveloper/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
          alt="linkedin-link"
          src={linkedin}
        />
      </a>

      <a
        className="group w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg
          flex items-center justify-center transition-all duration-300 
          hover:scale-110 hover:-translate-y-1"
        href="https://github.com/ekhtiar-uddin"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
          alt="github-link"
          src={github}
        />
      </a>

      <a
        className="group w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg
          flex items-center justify-center transition-all duration-300 
          hover:scale-110 hover:-translate-y-1"
        href="https://www.facebook.com/ektiar.niloy"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
          alt="facebook-link"
          src={facebook}
        />
      </a>

      <a
        className="group w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg
          flex items-center justify-center transition-all duration-300 
          hover:scale-110 hover:-translate-y-1"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
          alt="instagram-link"
          src={instagram}
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
