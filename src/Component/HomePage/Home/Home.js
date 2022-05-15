import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import HomeAbout from "../HomeAbout/HomeAbout";
import JointOurTeam from "../JoinOurTeam/JointOurTeam";
import OurDoctorTeam from "../OurDoctorTeam/OurDoctorTeam";
import HomeDoctors from "../HomeDoctors/HmeDoctors";

const Home = () => {
  return (
    <>
      <BannerSection />
      <OurDoctorTeam />
      <HomeAbout />
      <HomeDoctors />
      <JointOurTeam />
    </>
  );
};

export default Home;
