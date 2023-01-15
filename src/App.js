import "./styles.css";
import ContactUS from "./ContactUS";
import WhatIsErp from "./WhatIsErp";
import Navbar from "./Navbar";
import EazyStart from "./EazyStart";
import Footer from "./Footer";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <WhatIsErp />
      <EazyStart />
      <ContactUS />
      <Footer />
    </div>
  );
}
