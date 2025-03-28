import { Routes, Route } from "react-router";
import "./App.css";
//Blur Image
import "react-lazy-load-image-component/src/effects/blur.css";
import Home from "./Components/Home/Home";
import Careers from "./Components/About/Career/Careers";
import AboutUs from "./Components/About/AboutUs/AboutUs";
import OurTeam from "./Components/About/Team/OurTeam";
import Services from "./Components/Services/Services";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import FAQ from "./Components/FAQ/FAQ";
import ContactUs from "./Components/ContactUs/ContactUs";
import EachStudy from "./Components/CaseStudies/EachStudy/EachStudy";
import EasyNav from "./Components/NavBar/EasyNav";
import { DataStudy } from "./Components/CaseStudies/EachStudy/DataStudy";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <EasyNav/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/teams" element={<OurTeam />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies/>} />
        {DataStudy.map(({ id, link, ...rest }) => (
          <Route
            key={id}
            path={link}
            element={<EachStudy {...rest} />}
          />
        ))}
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
