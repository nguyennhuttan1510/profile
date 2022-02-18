// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FormContact from "./components/FormContact";
import BannerEffect from "./layouts/BannerEffect";
import Footer from "./layouts/Footer";
import Navigation from "./layouts/Navigation";

function App() {
  const [isShowCV, setIsShowCV] = useState(false);
  var onScroll = function () {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (currentScrollPos < 300) {
        document.getElementById("navbar").style.background = "transparent";
      } else {
        document.getElementById("navbar").style.background = "#4a4747e3";
        setIsShowCV(false);
      }
    };
  };
  onScroll();

  const handleClickViewCV = () => {
    setIsShowCV(!isShowCV);
  };

  return (
    <div className="App">
      <iframe
        width="100%"
        height="100%"
        src="https://www.yumpu.com/en/embed/view/9veSOVZzjEBn1Uyf"
        frameborder="0"
        allowfullscreen="true"
        allowtransparency="true"
        style={{
          opacity: isShowCV ? 1 : 0,
          visibility: isShowCV ? "visible" : "hidden",
          position: "absolute",
          transition: "0.4s",
          zIndex: "999",
        }}
      ></iframe>
      <header>
        <Navigation />
        <BannerEffect handleClickViewCV={handleClickViewCV} />
        {/* hết banner */}
      </header>
      <section>
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-7 mb-3 mb-lg-4 text-center">
              <h3>About me</h3>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-lg-5 order-lg-1 order-2 info"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-delay={300}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, optio! Corporis, vero est totam, repellendus fugiat
              perferendis vitae expedit
            </div>
            <div
              className="col-12 col-lg-7 order-lg-2 order-1 bg-aboutme mb-4"
              data-aos="fade-right"
              data-aos-duration={600}
              data-aos-delay={300}
            >
              {/* <img src="imgs/7.jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""> */}
              <div className="eff2">
                <div className="child-eff-chu">
                  <h4>Nguyễn Nhựt Tân</h4>
                  <span>Fresher</span>
                </div>
                <div className="child-eff-chuphu">
                  <h4>I'm Developer</h4>
                  <span>Website</span>
                </div>
                <div className="child-eff-logo">
                  <i className="fab fa-facebook-f" />
                  <i className="fab fa-facebook-messenger" />
                  <i className="fab fa-instagram" />
                </div>
                <div className="child-eff-mo" />
                <div className="child-eff-nap" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid bg-index">
          <div className="row">
            <div
              className="col-3 text-center cardinddex"
              data-aos="zoom-out-up"
              data-aos-duration={400}
              data-aos-delay={500}
            >
              <h6>2</h6>
              <div className="textbottom">Year of Experience</div>
            </div>
            <div
              className="col-3 text-center cardinddex"
              data-aos="zoom-out-up"
              data-aos-duration={600}
              data-aos-delay={500}
            >
              <h6>7</h6>
              <div className="textbottom">Project</div>
            </div>
            <div
              className="col-3 text-center cardinddex"
              data-aos="zoom-out-up"
              data-aos-duration={800}
              data-aos-delay={500}
            >
              <h6>2</h6>
              <div className="textbottom">Members</div>
            </div>
            <div
              className="col-3 text-center cardinddex"
              data-aos="zoom-out-up"
              data-aos-duration={1000}
              data-aos-delay={500}
            >
              <h6>1830</h6>
              <div className="textbottom">Cup of Coffee</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-skill">
          <div className="row justify-content-center">
            <div className="col-7 mb-3 mb-lg-4 text-center">
              <h3>My Skill</h3>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-md-6 col-lg-6 mb-4"
              data-aos="fade-right"
              data-aos-duration={400}
              data-aos-delay={300}
            >
              <div className="textskill">HTML/CSS</div>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ backgroundColor: "orange", width: "87%" }}
                  aria-valuenow={87}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mb-4"
              data-aos="fade-right"
              data-aos-duration={400}
              data-aos-delay={300}
            >
              <div className="textskill">JAVASCRIPT</div>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ backgroundColor: "orange", width: "75%" }}
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mb-4"
              data-aos="fade-right"
              data-aos-duration={400}
              data-aos-delay={300}
            >
              <div className="textskill">REACTJS</div>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ backgroundColor: "orange", width: "82%" }}
                  aria-valuenow={82}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mb-4"
              data-aos="fade-right"
              data-aos-duration={400}
              data-aos-delay={300}
            >
              <div className="textskill">NODEJS</div>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ backgroundColor: "orange", width: "71%" }}
                  aria-valuenow={71}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mb-4"
              data-aos="fade-right"
              data-aos-duration={400}
              data-aos-delay={300}
            >
              <div className="textskill">BOOTSTRAP</div>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ backgroundColor: "orange", width: "87%" }}
                  aria-valuenow={87}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mb-4"
              data-aos="fade-right"
              data-aos-duration={400}
              data-aos-delay={300}
            >
              <div className="textskill">GITHUB</div>
              <div className="progress" style={{ height: "2px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ backgroundColor: "orange", width: "95%" }}
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container cardtime">
          <div className="line" />
          <div className="row justify-content-center">
            <div className="col-7 text-center mb-3 mb-lg-4">
              <h3>Experience</h3>
            </div>
          </div>
          <div className="row justify-content-start mb-3 pl-4">
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-6 timeline"
              data-aos="fade-up"
              data-aos-duration={400}
              data-aos-delay={300}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              deserunt excepturi accusamus. Qui natus soluta, voluptatibus
              reiciendis magnam maiores iste animi nisi?
            </div>
          </div>
          <div className="row justify-content-end mb-3 pl-4">
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-6 timeline"
              data-aos="fade-up"
              data-aos-duration={400}
              data-aos-delay={500}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              deserunt excepturi accusamus. Qui natus soluta, voluptatibus
              reiciendis magnam maiores iste animi nisi?
            </div>
          </div>
        </div>
      </section>
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
