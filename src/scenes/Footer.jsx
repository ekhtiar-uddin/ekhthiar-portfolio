import { Mail, Phone } from "lucide-react";
import facebookFooter from "../assets/facebookFooter.png";
import githubFooter from "../assets/githubFooter.png";
import {
  default as instagramFooter,
  default as linkedinFooter,
} from "../assets/instagramFooter.png";
const Footer = () => {
  return (
    <footer
      className="h-[450px] flex
     items-center md:h-[320px] text-white bg-gray-900  "
    >
      <div className="customWidth ">
        {/* <SocialMediaIcons section="footer" /> */}

        <div className="flex justify-center  md:justify-start my-10 gap-7">
          <a
            className=" hover:opacity-70 transition duration-500"
            href="https://www.linkedin.com/in/m-ekhthiar-uddin-a5bb79229/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[40px] h-[40px] rounded-3xl bg-p1 "
              src={linkedinFooter}
              alt=""
            />
          </a>
          <a
            className=" hover:opacity-70 transition duration-500"
            href="https://github.com/Niloy11111"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[40px] h-[40px] rounded-3xl bg-p1 "
              src={githubFooter}
              alt=""
            />
          </a>

          <a
            className=" w-[40px] h-[40px] hover:opacity-70 transition duration-500"
            href="https://www.facebook.com/ektiar.niloy"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[40px] h-[40px] rounded-3xl bg-p1 "
              src={facebookFooter}
              alt=""
            />
          </a>
          <a
            className=" hover:opacity-70 transition duration-500"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[40px] h-[40px] rounded-3xl bg-p1 "
              src={instagramFooter}
              alt=""
            />
          </a>
        </div>

        <div className="md:flex   justify-center md:justify-between text-center ">
          <div className="mb-5 font-playfair font-semibold flex justify-center ">
            <div>
              <h4 className="font-playfair  md:text-left text-2xl text-center">
                <span className="text-p1">N</span>iloy
                <span className="text-p1">.</span>
              </h4>

              <p className="font-playfair  flex items-center gap-1 font-medium ">
                <Mail className="w-[20px] text-p1" />{" "}
                ektiaruddinniloy859@gmail.com
              </p>
            </div>
          </div>
          <div className="font-playfair flex flex-col items-center font-semibold  ">
            <p className="font-playfair  flex items-center gap-1 font-medium ">
              <Phone className="w-[20px] text-p1" /> +880-1690-183-968
            </p>
            <p className="font-playfair text-md">
              ©2022 Ekhthiar. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
