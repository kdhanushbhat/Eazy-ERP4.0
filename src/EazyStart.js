import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function EazyStart() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, x: "0%", transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1, x: "-100%" }
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
    <>
      <div id="ezstart" className="row container-fluid p-3 py-5 mx-auto">
        <motion.h3
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="col-12 text-center my-3 mb-4"
        >
          The Beginning of Eazy ERP
        </motion.h3>
        <div className="d-flex flex-md-row flex-column-reverse justify-content-around align-items-center">
          <motion.div
            ref={ref}
            variants={elementVariant}
            initial="hidden"
            animate={control}
            className="col-lg-5 text-start  my-5 fs-5 mx-auto"
          >
            <p>
              Ever Since 2001, the market has been penetrated with hundreds of
              ERP players, everyone stating themselves as the best. As we digged
              down more and more we realized that most of the small & mid size
              companies still resisting to move towards IT due to multiple
              reason such as budget constraints, hassle of using 2 different
              softwares, Security issues, to name a few.
            </p>
            <p>
              That is how Eazy came into picture with a vision of standing out
              from Rest with its unique preposition and simultaneously catering
              the key challenges of SME Manufacturers thereby making their lives
              Easy! This led to the launch of India’s 1st Tally Integrated ERP,
              Eazy ERP in 2007. An ERP which came with the simplicity of Tally
              and Power of ERP
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            variants={elementVariant}
            initial="hidden"
            animate={control}
            className="col-lg-5 mx-auto "
          >
            <img
              alt="erp"
              src="https://4.imimg.com/data4/OW/UL/MY-1795154/erp-for-automotive-manufacturing-500x500.jpg"
              style={{
                width: "100%",
                position: "relative",
                borderRadius: "10px"
              }}
              // , border: "2px solid black"
            />
          </motion.div>
        </div>
      </div>
      <hr />
    </>
  );
}
