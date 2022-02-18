import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-5 ">
            <div className="footer-skill">
              <h5>Skill</h5>
              <span>HTML/CSS</span>
              <br />
              <span>JAVASCRIPT</span>
              <br />
              <span>REACTJS</span>
              <br />
              <span>NODEJS</span>
              <br />
              <span>BOOTSTRAP</span>
              <br />
              <span>GITHUB</span>
            </div>
          </div>
          <div className="col-7 ">
            <div className="footer-contact">
              <h5>Contact</h5>
              <span>Name:</span> Nguyễn Nhựt Tân
              <br />
              <span>Phone:</span> 0902356022
              <br />
              <span>Email:</span> nguyentan15102000@gmail.com
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
