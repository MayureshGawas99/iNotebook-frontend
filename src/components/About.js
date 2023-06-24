import React from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

export default function About() {
  return (
    <div className="container">
      <h1 className="text-center">
        Unleash Your Creativity, One note at a Time!
      </h1>
      <p className="card-text justify-text">
        At iNotebook, we believe in the power of organization, creativity, and
        seamless note-taking. We have designed a platform that enables you to
        capture your thoughts, ideas, and inspirations in a single digital
        space. Whether you're a student, professional, or an avid writer,
        iNotebook is here to revolutionize the way you take notes and organize
        your life.
      </p>
      <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic1} className="d-block w-100" alt="..." />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgb(196 196 196 / 50%)" }}
              >
                <h5 className="text-dark">Easy Note Creation</h5>
                <p className="text-dark">
                  Effortlessly create and manage digital notes with support for
                  text, images, and audio recordings.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pic2} className="d-block w-100" alt="..." />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgb(196 196 196 / 50%)" }}
              >
                <h5 className="text-dark">Sync Across Devices</h5>
                <p className="text-dark">
                  Sync your notes across multiple devices, so you have the
                  latest version at your fingertips.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block w-100" alt="..." />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ backgroundColor: "rgb(196 196 196 / 50%)" }}
              >
                <h5 className="text-dark">Secure and Private</h5>
                <p className="text-dark">
                  Your data is encrypted and protected, ensuring your privacy
                  and security.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
