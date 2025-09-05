import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import contact from "../assets/contact-image.jpeg";
import LineGradient from "../components/LineGradient";
const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // const handleHotToast = () => {
  //   toast(
  //     <div className="flex items-center gap-2">
  //       {" "}
  //       <BadgeCheck className="text-xl " /> Message has been sent
  //     </div>,
  //     {
  //       position: "bottom-center",
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //       transition: Bounce,
  //     }
  //   );
  // };

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    } else {
      // handleHotToast();
    }
  };
  // bg-[#fff6eb]
  return (
    <div className=" mt-16 gradient-anim h-[130vh] md:h-[100vh] flex justify-center items-center">
      <section id="contact" className="contact customWidth       ">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opdc4492acity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex justify-end w-full"
        >
          <div>
            <p className=" font-bold text-4xl">
              <span className="text-p1">CONTACT ME</span> TO GET STARTED
            </p>
            <div className="flex md:justify-end my-5">
              <LineGradient width="w-1/2" />
            </div>
          </div>
        </motion.div>

        {/* FORM & IMAGE */}
        <div className="md:flex md:justify-between gap-16 mt-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 flex justify-center"
          >
            {/* <img src="/src/assets/contact-image.jpeg" alt="contact" /> */}
            <img src={contact} alt="contact" className=" rounded-2xl" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 mt-10 md:mt-0"
          >
            {/* ba7de4a03eb62f2f1abef467fe34c333 */}
            {/* <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ba7de4a03eb62f2f1abef467fe34c333"
              method="POST"
            >
              <input
                className="w-full border border-gray-300 rounded-xl font-semibold placeholder-opaque-black p-3"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className=" text-p1 mt-1">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="w-full border border-gray-300 rounded-xl font-semibold placeholder-opaque-black p-3 mt-5"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className=" text-p1 mt-1">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="w-full border border-gray-300 rounded-xl font-semibold placeholder-opaque-black p-3 mt-5"
                name="message"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className=" text-p1 mt-1">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                className="py-4 px-6 flex items-center gap-3 bg-p1 text-white font-medium
                  mt-5 hover:bg-black hover:text-white rounded-full cursor-pointer border transition duration-500"
                type="submit"
              >
                SEND ME A MESSAGE <FaArrowRight className="" />
              </button>
            </form> */}

            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/ba7de4a03eb62f2f1abef467fe34c333"
              method="POST"
              className="space-y-6"
            >
              {/* Name Input */}
              <div className="group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-gradient-to-br from-orange-50/80 to-white/90 backdrop-blur-sm 
                 rounded-xl border border-orange-200/50 focus:border-orange-500 focus:ring-2 
                 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 outline-none 
                 placeholder-gray-500 hover:border-orange-300 hover:bg-white/95 font-Poppins"
                  {...register("name", { required: true, maxLength: 100 })}
                />
                {errors.name && (
                  <p className="text-orange-600 text-sm mt-2 animate-pulse font-Poppins">
                    {errors.name.type === "required" && "Name is required"}
                    {errors.name.type === "maxLength" && "Max 100 characters"}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-gradient-to-br from-orange-50/80 to-white/90 backdrop-blur-sm 
                 rounded-xl border border-orange-200/50 focus:border-orange-500 focus:ring-2 
                 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 outline-none 
                 placeholder-gray-500 hover:border-orange-300 hover:bg-white/95 font-Poppins"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                {errors.email && (
                  <p className="text-orange-600 text-sm mt-2 animate-pulse font-Poppins">
                    {errors.email.type === "required" && "Email is required"}
                    {errors.email.type === "pattern" && "Invalid email format"}
                  </p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="group">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-6 py-4 bg-gradient-to-br from-orange-50/80 to-white/90 backdrop-blur-sm 
                 rounded-xl border border-orange-200/50 focus:border-orange-500 focus:ring-2 
                 focus:ring-orange-500/20 focus:bg-white transition-all duration-300 outline-none 
                 placeholder-gray-500 resize-none hover:border-orange-300 hover:bg-white/95 font-Poppins"
                  {...register("message", { required: true, maxLength: 2000 })}
                />
                {errors.message && (
                  <p className="text-orange-600 text-sm mt-2 animate-pulse font-Poppins">
                    {errors.message.type === "required" &&
                      "Message is required"}
                    {errors.message.type === "maxLength" &&
                      "Max 2000 characters"}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full py-4 px-8 bg-gradient-to-r from-orange-500 to-orange-600 
               text-white font-semibold rounded-xl shadow-lg hover:shadow-xl
               transform hover:-translate-y-1 transition-all duration-300 
               hover:from-orange-600 hover:to-orange-700 active:scale-95
               overflow-hidden font-Poppins"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 107, 0, 0.9), rgba(255, 107, 0, 0.8))",
                }}
              >
                <span className="cursor-pointer relative z-10 flex items-center justify-center gap-3">
                  SEND MESSAGE
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                {/* Animated background effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(16, 16, 16, 0.1), rgba(255, 107, 0, 0.95))",
                  }}
                />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
