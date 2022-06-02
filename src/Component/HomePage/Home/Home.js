import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeAbout from "../HomeAbout/HomeAbout";
import JointOurTeam from "../JoinOurTeam/JointOurTeam";
import OurDoctorTeam from "../OurDoctorTeam/OurDoctorTeam";
import HomeDoctors from "../HomeDoctors/HmeDoctors";
import Works from "../Works/Works";
import UseDoctorio from "../UseDoctorio/UseDoctorio";
import DoctorApp from "../DoctorApp/DoctorApp";
import HomeArticles from "../HomeArticles/HomeArticles";

const Home = () => {
  return (
    <>
      <BannerSection />
      <OurDoctorTeam />
      <HomeAbout />
      <Works />
      <HomeDoctors />
      <JointOurTeam />
      <UseDoctorio />
      <DoctorApp />
      <HomeArticles />
    </>
  );
};

export default Home;
