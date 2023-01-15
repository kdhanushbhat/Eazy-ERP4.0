import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function WhatIsErp() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, x: "0%", transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1, x: "100%" }
  };
  const elementVariant = {
    visible: { opacity: 1, scale: 1, y: "0%", transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1, y: "50%" }
  };
  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div
      id="whaterp"
      className="whaterp row container-fluid p-3 py-5 mx-auto text-light"
      style={{ backgroundColor: "#0595f5" }}
    >
      <motion.h3
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="col-12 text-center mt-3 mb-4"
      >
        What is Enterprise Resource Planning?
      </motion.h3>
      <motion.div
        ref={ref}
        variants={elementVariant}
        initial="hidden"
        animate={control}
        className="col-lg-5 mx-auto "
      >
        <img
          alt="erp"
          src="https://img.freepik.com/free-vector/gradient-erp-illustration_23-2149368728.jpg?w=2000"
          style={{
            width: "100%",
            position: "relative",
            borderRadius: "10px"
          }}
          // , border: "2px solid black"
        />
      </motion.div>
      <motion.div
        ref={ref}
        variants={elementVariant}
        initial="hidden"
        animate={control}
        className="col-lg-5 text-start  my-5 fs-5 mx-auto"
      >
        <span style={{ fontWeight: "600" }}>
          Enterprise Resource Planning System
        </span>{" "}
        is a software which made a significant impact in the life of Indian
        Manufacturers by remodeling their existing manual system of working to
        Automating it, A system which was ideally designed to track the
        activities has travelled leaps and miles from being a mere tracking
        system to a virtual member that monitors, tracks and guides the users in
        order to streamline and maintain the operational efficiency of the
        business.
      </motion.div>
    </div>
  );
}
