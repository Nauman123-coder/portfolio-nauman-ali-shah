import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Certifications,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

// ← Import your project detail component
import BrainTumorProject from "./components/BrainTumorProject"; // adjust path if needed
import ChestXRayProject from "./components/ChestXRayProject";     // ← Add this import
import SkinCancerProject from "./components/SkinCancerProject";  
import BioSegNetProject from "./components/BioSegNetProject";
import DrProject from "./components/DrProject";
import WatsonxProject from "./components/WatsonXProject";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main portfolio (home) route */}
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
              </div>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Certifications />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          }
        />

        {/* Project detail route */}
        <Route path="/brain-tumor-segmentation" element={<BrainTumorProject />} />
        {/* Project detail route */}
        <Route path="/chest-xray-diagnosis" element={<ChestXRayProject />} />
        {/* Project detail route */}
        <Route path="/skin-cancer-detection" element={<SkinCancerProject />} />
        {/* Project detail route */}
        <Route path="/neuron-segmentation" element={<BioSegNetProject />} />
        {/* Project detail route */}
        <Route path="/dr-detection" element={<DrProject />} />
        {/* Project detail route */}
        <Route path="/watson-x-project" element={<WatsonxProject />} />

        {/* You can add more project routes later, e.g.:
        <Route path="/projects/other-project" element={<OtherProject />} />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;