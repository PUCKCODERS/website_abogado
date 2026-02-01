import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Penal from "./pages/Penal";
import Familia from "./pages/Familia";
import Divorcio from "./pages/Divorcio";
import Laboral from "./pages/Laboral";
import Civiles from "./pages/Civiles";
import Mercantil from "./pages/Mercantil";
import Tributario from "./pages/Tributario";
import Ambiental from "./pages/Ambiental";
import Herencias from "./pages/Herencias";
import Inmobiliarios from "./pages/Inmobiliarios";
import SmoothScrollbar from "./components/SmoothScrollbar";
import AsesoramientoLegalInvestigacionPenal from "./pages/SubPaginas/Penal/ASESORAMIENTO_LEGAL_EN_CASO_DE_INVESTIGACIÓN_PENAL";
import DefensaEnCasoDeJuicioPenal from "./pages/SubPaginas/Penal/DEFENSA_EN_CASO_DE_JUICIO_PENAL";
import RepresentacionEnCasoDeApelacion from "./pages/SubPaginas/Penal/REPRESENTACION_EN_CASO_DE_APELACION";
import NegociacionDeAcuerdosConLaFiscalia from "./pages/SubPaginas/Penal/NEGOCIACION_DE_ACUERDOS_CON_LA_FISCALIA";
import SolicitudDeMedidasCautelares from "./pages/SubPaginas/Penal/SOLICITUD_DE_MEDIDAS_CAUTELARES";

export default function App() {
  return (
    <Router>
      <NavMenu />
      <SmoothScrollbar>
        <Routes>
          <Route path="/inmobiliarios" element={<Inmobiliarios />} />
          <Route path="/herencias" element={<Herencias />} />
          <Route path="/ambiental" element={<Ambiental />} />
          <Route path="/tributario" element={<Tributario />} />
          <Route path="/mercantil" element={<Mercantil />} />
          <Route path="/civiles" element={<Civiles />} />
          <Route path="/laboral" element={<Laboral />} />
          <Route path="/divorcio" element={<Divorcio />} />
          <Route path="/familia" element={<Familia />} />
          <Route path="/penal" element={<Penal />} />
          <Route
            path="/asesoramiento-legal-investigacion-penal"
            element={<AsesoramientoLegalInvestigacionPenal />}
          />
          <Route
            path="/defensa-en-caso-de-juicio-penal"
            element={<DefensaEnCasoDeJuicioPenal />}
          />
          <Route
            path="/representacion-en-caso-de-apelacion"
            element={<RepresentacionEnCasoDeApelacion />}
          />
          <Route
            path="/negociacion-de-acuerdos-con-la-fiscalia"
            element={<NegociacionDeAcuerdosConLaFiscalia />}
          />
          <Route
            path="/solicitud-de-medidas-cautelares"
            element={<SolicitudDeMedidasCautelares />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </SmoothScrollbar>
    </Router>
  );
}
