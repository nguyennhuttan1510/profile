import React, { useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";

const Contact = (props) => {
  const objectContact = {
    name: "",
    phone: "",
    email: "",
    content: "",
  };
  const [contact, setContact] = useState(objectContact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleClick = () => {
    const connectData = firebase.database().ref("management/contacts");
    connectData.push(contact);
  };
  return (
    <div className="site-section" id="contact-section">
      <div className="container">
        <div className="row">
          <div
            className="col-12 text-center mb-5"
            data-aos="fade-up"
            data-aos-delay
          >
            <div className="block-heading-1">
              <span>Get In Touch</span>
              <h2>Contact Me</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-6 mb-5"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <form action="#" method="post">
              <div className="form-group row">
                <div className="col-md-12 mb-4 mb-lg-0">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="First name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12 mb-4 mb-lg-0">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <textarea
                    name="content"
                    className="form-control"
                    placeholder="Write your message."
                    cols={30}
                    rows={10}
                    defaultValue={""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6 ml-auto">
                  <input
                    type="button"
                    className="btn btn-block btn-primary text-white py-3 px-5"
                    defaultValue="Send Message"
                    onClick={handleClick}
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className="col-lg-5 ml-auto"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h2 className="text-primary">
              Need to know more on details. Please contact
            </h2>
            <p>Phone: 0902356022</p>
            <p>Zalo: 0902356022</p>
            <p>Email: nguyentan15102000@gmail.com</p>
            <p>
              Address: Mi???u G?? Xo??i Street, B??nh H??ng H??a A Ward, B??nh T??n
              District, H??? Ch?? Minh City, Vi???t Nam Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
