import facebook from "../assets/facebook.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import linkedinFooter from "../assets/linkedinFooter.png";

const FooterSocialMediaIcons = ({ section }) => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className=" hover:opacity-70 transition duration-500"
        href="https://www.linkedin.com/in/m-ekhthiar-uddin-a5bb79229/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-[38px]  h-[38px]"
          alt="linkedin-link"
          src={section === "footer" ? linkedinFooter : linkedin}
        />

        <img src={linkedinFooter} alt="" />
      </a>
      <a
        className=" hover:opacity-70 transition duration-500"
        href="https://github.com/ekhtiar-uddin"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-[40px]  h-[40px]" alt="linkedin-link" src={github} />
      </a>

      <a
        className=" w-[40px] h-[40px] hover:opacity-70 transition duration-500"
        href="https://www.facebook.com/ektiar.niloy"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-[40px]  h-[40px]"
          alt="facebook-link"
          src={facebook}
        />
      </a>
      <a
        className=" hover:opacity-70 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-[42px] h-[42px]"
          alt="instagram-link"
          src={instagram}
        />
      </a>
    </div>
  );
};

export default FooterSocialMediaIcons;
