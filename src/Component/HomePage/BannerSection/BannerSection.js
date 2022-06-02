import React from "react";
import "./BannerSection.css";
import banner3 from "../../../Assets/Images/banner1.png";
import banner2 from "../../../Assets/Images/banner2.png";
import banner1 from "../../../Assets/Images/banner3.png";
import CustomizeButton from "../../Shear/customize_button/CustomizeButton";
import CustomizeButtonOutline from "../../Shear/customize_button/CustomizeButtonOutline";
import { Link } from "react-router-dom";

const BannerSection = () => {
  return (
    <div className="bg-neutral banner_section">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex justify-center w-full  items-center">
            <div
              id="slide1"
              className="carousel-item relative w-full flex justify-center items-center"
            >
              <img
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                src={banner1}
                className=" hidden lg:block"
                alt=""
              />
              <div className="md:ml-10">
                <div className="uppercase  text-accent font-bold text-1xl md:text-4xl">
                  <h2
                    data-aos="fade-left"
                    data-aos-delay="70"
                    data-aos-duration="1400"
                    className="text-secondary pb-5"
                  >
                    {" "}
                    Every doctors{" "}
                  </h2>

                  <h1
                    data-aos-delay="80"
                    data-aos-duration="1700"
                    data-aos="fade-left"
                    className=" text-2xl md:text-5xl pb-5"
                  >
                    on Doctorio platform
                  </h1>

                  <h2
                    data-aos-delay="90"
                    data-aos-duration="1900"
                    data-aos="fade-left"
                    className="text-secondary"
                  >
                    are BMDC certified.
                  </h2>
                  <div className="mt-10 md:flex">
                    <p
                      data-aos="fade-left"
                      data-aos-delay="90"
                      data-aos-duration="1900"
                      className=" mb-5  md:mr-5"
                    >
                      <Link to="/appointment">
                        <CustomizeButton>Get Started</CustomizeButton>
                      </Link>
                    </p>

                    <p data-aos="fade-left" className="mb-3 md:mr-5">
                      <CustomizeButtonOutline>
                        View Doctor
                      </CustomizeButtonOutline>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle text-primary">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle text-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex justify-center w-full  items-center">
            <div
              id="slide1"
              className="carousel-item relative w-full flex justify-center items-center"
            >
              <img src={banner2} className="hidden lg:block" alt="" />
              <div className="md:ml-10">
                <div className="uppercase  text-accent font-bold text-1xl md:text-4xl">
                  <h2 className="text-secondary pb-5"> Every doctors </h2>

                  <h1 className=" text-2xl md:text-5xl pb-5">
                    on Doctorio platform
                  </h1>

                  <h2 className="text-secondary">are BMDC certified.</h2>
                  <div className="mt-10 lg:flex">
                    <p className=" mb-5  md:mr-5">
                      <CustomizeButton>Get Started</CustomizeButton>
                    </p>

                    <p className="mb-3 md:mr-5">
                      <CustomizeButtonOutline>
                        View Doctor
                      </CustomizeButtonOutline>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn text-primary btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn text-primary btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex justify-center w-full  items-center">
            <div
              id="slide1"
              className="carousel-item relative w-full flex justify-center items-center"
            >
              <img src={banner3} alt="" className="hidden lg:block" />
              <div className="md:ml-10">
                <div className="uppercase  text-accent font-bold text-1xl md:text-4xl">
                  <h2 className="text-secondary pb-5"> Every doctors </h2>

                  <h1 className="text-2xl md:text-5xl pb-5">
                    {" "}
                    on Doctorio platform
                  </h1>

                  <h2 className="text-secondary ">are BMDC certified.</h2>
                  <div className="mt-10 lg:flex">
                    <p className=" mb-5  md:mr-5">
                      <CustomizeButton>Get Started</CustomizeButton>
                    </p>

                    <p className="mb-3 md:mr-5">
                      <CustomizeButtonOutline>
                        View Doctor
                      </CustomizeButtonOutline>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn text-primary btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn text-primary btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
