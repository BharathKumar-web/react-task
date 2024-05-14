import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { useNavigate } from "react-router-dom";
import classes from "./AppBar.module.css";
import arrowDown from "../assets/keyboard_arrow_down_24dp_FILL0_wght400_GRAD0_opsz24.svg";
import closeIcon from "../assets/close_24dp_FILL0_wght400_GRAD0_opsz24.svg";

const AppBar = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const drawerClose = () => {
    setDrawerOpen(false);
  };
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const navigateToForm = () => {
    navigate("/form");
    setDrawerOpen(false);
  };

  return (
    <div className={classes.appbarContainer}>
      <div data-aos="fade-down" data-aos-duration="1300"></div>
      <div onClick={handleDrawerOpen} className={classes.menu}>
        <span
          style={{ color: "white", fontSize: "40px" }}
          class="material-symbols-outlined">
          menu
        </span>
      </div>
      <div
        className={classes.appBarContents}
        data-aos="fade-down"
        data-aos-duration="1300">
        <div>
          <p className={classes.contents}>All</p>

          {isHovered && (
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={classes.dropDownContainer}>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Designs</p>
                <p className={classes.dropDownContent}>Kids Room Interior</p>
                <p className={classes.dropDownContent}>Modular Kitchen</p>
                <p className={classes.dropDownContent}>Bedroom Interior</p>
                <p className={classes.dropDownContent}>
                  Furniture Manufactures
                </p>
              </div>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Work Process</p>
                <p className={classes.dropDownContent}>Strategic Planning</p>
                <p className={classes.dropDownContent}>Developing Concepts</p>
                <p className={classes.dropDownContent}>Design Development</p>
              </div>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Why Us</p>
                <p className={classes.dropDownContent}>
                  30k Completed Projects
                </p>
                <p className={classes.dropDownContent}>30k satisfied clients</p>
                <p className={classes.dropDownContent}>Exploration Concept</p>
                <p className={classes.dropDownContent}>Construction Work</p>
              </div>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Features</p>
                <p className={classes.dropDownContent}>Hospitality</p>
                <p className={classes.dropDownContent}>Interior</p>
                <p className={classes.dropDownContent}>Royal</p>
                <p className={classes.dropDownContent}>Residential</p>
              </div>
            </div>
          )}
        </div>
        <p className={classes.contents}>Home</p>
        <p className={classes.contents}>About us</p>

        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={classes.contentsServices}>
          services
        </p>

        <p className={classes.contents}>Products</p>
        <p className={classes.contents}>Blog</p>
        <p className={classes.contents}>Careers</p>
        <div
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => setIsContactHovered(false)}>
          <p className={classes.contents}>Contact us</p>
          {isContactHovered && (
            <div
              onClick={navigateToForm}
              onMouseEnter={() => setIsContactHovered(true)}
              className={classes.dropDownContainer}
              style={{ borderRadius: "10px", cursor: "pointer" }}>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Forms</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Drawer
        anchor="right"
        transitionDuration={500}
        open={drawerOpen}
        onClose={drawerClose}>
        <div className={classes.drawerContainer}>
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={drawerClose}>
            <img src={closeIcon} style={{ height: "40px", width: "40px" }} />
          </div>
          <p className={classes.drawerContents}>All</p>
          <p className={classes.drawerContents}>Home</p>
          <div
            onClick={() => setIsHovered(!isHovered)}
            style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <p className={classes.drawerContents}>services</p>
            <img src={arrowDown} style={{ height: "20px", width: "20px" }} />
          </div>

          {isHovered && (
            <div
              onMouseEnter={() => setIsHovered(true)}
              className={classes.dropDownContainer}>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Designs</p>
                <p className={classes.dropDownContent}>Kids Room Interior</p>
                <p className={classes.dropDownContent}>Modular Kitchen</p>
                <p className={classes.dropDownContent}>Bedroom Interior</p>
                <p className={classes.dropDownContent}>
                  Furniture Manufactures
                </p>
              </div>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Work Process</p>
                <p className={classes.dropDownContent}>Strategic Planning</p>
                <p className={classes.dropDownContent}>Developing Concepts</p>
                <p className={classes.dropDownContent}>Design Development</p>
              </div>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Why Us</p>
                <p className={classes.dropDownContent}>
                  30k Completed Projects
                </p>
                <p className={classes.dropDownContent}>30k satisfied clients</p>
                <p className={classes.dropDownContent}>Exploration Concept</p>
                <p className={classes.dropDownContent}>Construction Work</p>
              </div>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Features</p>
                <p className={classes.dropDownContent}>Hospitality</p>
                <p className={classes.dropDownContent}>Interior</p>
                <p className={classes.dropDownContent}>Royal</p>
                <p className={classes.dropDownContent}>Residential</p>
              </div>
            </div>
          )}
          <p className={classes.drawerContents}>About us</p>
          <p className={classes.drawerContents}>Contact us</p>
          <p className={classes.drawerContents}>Products</p>
          <p className={classes.drawerContents}>Blog</p>
          <p className={classes.drawerContents}>Careers</p>
          <div
            onClick={() => {
              setIsContactHovered(!isContactHovered);
            }}
            style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <p className={classes.drawerContents}>Contact us</p>
            <img src={arrowDown} style={{ height: "20px", width: "20px" }} />
          </div>

          {isContactHovered && (
            <div
              onClick={navigateToForm}
              onMouseEnter={() => setIsContactHovered(true)}
              className={classes.dropDownContainer}
              style={{ borderRadius: "10px", cursor: "pointer" }}>
              <div className={classes.dropDownContentContainer}>
                <p className={classes.dropDownHeaders}>Forms</p>
              </div>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
};
export default AppBar;
