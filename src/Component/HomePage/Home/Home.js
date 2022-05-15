import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeAbout from "../HomeAbout/HomeAbout";
import JointOurTeam from "../JoinOurTeam/JointOurTeam";
import OurDoctorTeam from "../OurDoctorTeam/OurDoctorTeam";

const Home = () => {
  return (
    <>
      <BannerSection />
      <OurDoctorTeam />
      <HomeAbout />
      <JointOurTeam />
    </>
  );
};

export default Home;
