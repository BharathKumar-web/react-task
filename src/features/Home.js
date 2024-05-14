import React from "react";
import classes from "./Home.module.css";
import AppBar from "../components/AppBar";

const Home = () => {
  return (
    <div style={{zIndex:'100'}}>
      <div className={classes.backGroundImage}>
        <div className={classes.contentsContainer}>
          <AppBar />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              
            }}
            data-aos="fade-down"
            data-aos-duration="1300">
            <div className={`${classes.contents} font-sans`}>
              <p className={`${classes.choice} font-bold`}>
                The choice around the world
              </p>
              <div className={classes.inovationContainer}>
                <p className={classes.innovative}>Innovative Modern</p>
                <p
                  className={classes.innovative}
                  style={{ marginTop: "-30px" }}>
                  Design & Works
                </p>
              </div>

              <p className={classes.otherContents}>
                The final design package as per latest approval and client
                dreams. The final design package as per latest approval and
                client dreams and art work requirements to acceptance.
              </p>

              <div className={classes.getStartContainer}>Get Start</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
