import About from "@/components/aboutus/About";
import Introduction from "@/components/aboutus/intro";
import ITSolutionsGrid from "@/components/aboutus/ITsolution";
import Footer from "@/components/Footer";
// import Testimonial from "@/components/aboutus/Testimonial";
import React from "react";

function page() {
  return (
    <div>
      <Introduction />
      <ITSolutionsGrid />
      <About />
      <Footer />
    </div>
  );
}

export default page;
