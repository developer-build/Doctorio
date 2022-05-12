import React from "react";
import "./BannerSection.css";
import banner1 from "../../../Assets/Images/banner1.png";
import banner2 from "../../../Assets/Images/banner2.png";
import banner3 from "../../../Assets/Images/banner3.png";
import CustomizeButton from "../../Shear/customize_button/CustomizeButton";
import CustomizeButtonOutline from "../../Shear/customize_button/CustomizeButtonOutline";

const BannerSection = () => {
  return (
    <div className="bg-neutral banner_section">
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <div className="flex justify-center w-full  items-center">
            <div
              id="slide1"
              class="carousel-item relative w-full flex justify-center items-center"
            >
              <img src={banner1} alt="" />
              <div className="md:ml-10">
                <div className="uppercase  text-accent font-bold text-4xl">
                  <h2 className="text-secondary pb-5"> Every doctors </h2>

                  <h1 className="text-5xl pb-5"> on Doctorio platform</h1>

                  <h2 className="text-secondary">are BMDC certified.</h2>
                  <div className="mt-10">
                    <span className="mr-5">
                      <CustomizeButton>Get Started</CustomizeButton>
                    </span>

                    <CustomizeButtonOutline>View Doctor</CustomizeButtonOutline>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <div className="flex justify-center w-full  items-center">
            <div
              id="slide1"
              class="carousel-item relative w-full flex justify-center items-center"
            >
              <img src={banner2} alt="" />
              <div className="md:ml-10">
                <div className="uppercase  text-accent font-bold text-4xl">
                  <h2 className="text-secondary pb-5"> Every doctors </h2>

                  <h1 className="text-5xl pb-5"> on Doctorio platform</h1>

                  <h2 className="text-secondary">are BMDC certified.</h2>
                  <div className="mt-10">
                    <span className="mr-5">
                      <CustomizeButton>Get Started</CustomizeButton>
                    </span>

                    <CustomizeButtonOutline>View Doctor</CustomizeButtonOutline>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <div className="flex justify-center w-full  items-center">
            <div
              id="slide1"
              class="carousel-item relative w-full flex justify-center items-center"
            >
              <img src={banner3} alt="" />
              <div className="md:ml-10">
                <div className="uppercase  text-accent font-bold text-4xl">
                  <h2 className="text-secondary pb-5"> Every doctors </h2>

                  <h1 className="text-5xl pb-5"> on Doctorio platform</h1>

                  <h2 className="text-secondary">are BMDC certified.</h2>
                  <div className="mt-10">
                    <span className="mr-5">
                      <CustomizeButton>Get Started</CustomizeButton>
                    </span>

                    <CustomizeButtonOutline>View Doctor</CustomizeButtonOutline>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" class="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
