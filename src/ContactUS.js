import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ContactUS() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, x: "0%", transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1, x: "-100%" }
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div id="contactform" className="">
      <div className="p-md-5 p-2 container text-center">
        <motion.h3
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          For Enquiries
        </motion.h3>
        <motion.form
          action=""
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <fieldset
            className="d-flex flex-column p-md-5 p-3 m-md-3 col-12"
            style={{ backgroundColor: "#0595f5" }}
          >
            <input
              type="text"
              className="w-75  mx-auto form-control my-3"
              size="60"
              maxLength="60"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="w-75  mx-auto form-control my-3"
              maxLength="60"
              placeholder="Enter your email"
            />
            <input
              type="tel"
              className="w-75 mx-auto form-control my-3"
              maxLength="60"
              placeholder="Enter your phone no.(+919876543210)"
            />
            <textarea
              rows="4"
              className="w-75 form-control mx-auto my-3"
              maxLength="200"
              placeholder="Enter your Message (max - 200 characters)"
            ></textarea>
            <button className="btn btn-light mx-auto my-3 rounded-pill px-4">
              Submit
            </button>
          </fieldset>
        </motion.form>
      </div>
    </div>
  );
}
