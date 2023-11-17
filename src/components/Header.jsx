import React from "react";
import logo from "../assets/images/png/logo.png";

const Header = () => {
  return (
    <div className="header_bg">
      <div className="d-flex pt-4 flex-column justify-content-center align-items-center w-100 ">
        <img width={287} className="mt-3" height={155} src={logo} alt="logo" />
        <div className=" d-flex mt-2">
          <li>
            <a
              className=" ff_mont fw-semibold stroke_width_hover fs_sm text-uppercase clr_cream line_height_93"
              href="#"
            >
              home
            </a>
          </li>
          <li className=" mx-4 px-1">
            <a
              className=" ff_mont fw-semibold stroke_width_hover fs_sm text-uppercase clr_cream line_height_93"
              href="#"
            >
              our story
            </a>
          </li>
          <li>
            <a
              className=" ff_mont fw-semibold stroke_width_hover fs_sm text-uppercase clr_cream line_height_93"
              href="#"
            >
              Contact
            </a>
          </li>
        </div>
        <div className=" mt-5 pt-5 ">
          <h1 className="max_width_1433 mb-0 text-center pt-4  clr_cream ff_tenor fs_5xl text-uppercase fw-normal line_height_116">
            Turning innovative ideas into market ready products
          </h1>
          <p className=" fw-medium fs_2xl clr_cream ff_mont text-center mt-3 pt-1 mb-0 max_width_1009 mx-auto line_height_108">
            Strawpath is an innovation, solution design and product development
            lab and consultancy
          </p>
          <div className=" text-center mt-5 pt-4">
            
            <button className=" mb-3 text-center header_button ff_mont  fw-semibold fs_xl clr_cream line_height_93 text-uppercase">
              let’s talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
