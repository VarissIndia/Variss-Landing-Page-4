import React from "react";
const Navbar= React.lazy(() => import('../components/Navbar'));
const Hero= React.lazy(() => import("../components/Hero"));

const Features = React.lazy(() => import("../components/Features"));
const Security = React.lazy(() => import("../components/Security"));
const Pricing = React.lazy(() => import("../components/Pricing"));
const CTA = React.lazy(() => import("../components/CTA"));
const Footer = React.lazy(() => import("../components/Footer"));

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Security />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default Landing;