import banner from "./banner.webp";
import { motion } from "framer-motion";

export default function Home() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0, scale: 0 }
  };

  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: window.innerWidth > 425 ? "center" : "7%",
    backgroundPositionY: "center",
    backgroundSize: "cover"
  };

  return (
    <div
      className=" home d-inline-flex align-items-center justify-content-center"
      style={bannerStyle}
    >
      <motion.div
        variants={boxVariant}
        initial="hidden"
        animate="visible"
        className="bannerbox text-light py-5 
        d-inline-flex flex-column align-items-center 
        justify-content-center col-lg-6 col-10 "
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(5, 149, 245,0.8),rgba(252, 3, 3,0.8) )"
        }}
      >
        <h1
          className=" mt-4  rounded text-center"
          style={{
            fontWeight: "900"
          }}
        >
          Eazy ERP 4.0
        </h1>
        <h3
          className="text-center mb-5 mt-1 rounded"
          style={{
            fontWeight: "900",
            textDecoration: "none"
          }}
        >
          Bridge towards Simpler Operations!
        </h3>
      </motion.div>
    </div>
  );
}
// style={boxStyle}
