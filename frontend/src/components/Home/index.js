import React from "react";
import axios from "axios";
import "./index.css"

const Home = () => {
  //   axios
  //     .get("")
  //     .then(() => {})
  //     .catch(() => {});

  return (
    <>
      <header style={{ paddingLeft: 0 }}>
        <div
        id="pic"
          className="p-5 text-center bg-image mt-2"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/01/20/10/52/maintenance-1151312_960_720.png')",
            height: 350,width: 900, marginLeft: 300,borderRadius : 30
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Heading</h1>
                <h4 className="mb-3">Subheading</h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="#!"
                  role="button"
                >
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Home