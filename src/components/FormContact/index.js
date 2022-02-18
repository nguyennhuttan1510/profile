import React from "react";

const FormContact = () => {
  return (
    <section className="bg-contact mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7 mb-3 mb-lg-4 text-center">
            <h3>Contact Me</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 mb-4">
            {/* <img id="image-avatar" src="imgs/user-3.jpg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""> */}
            <div
              className="avatar-contact mb-3"
              data-aos="fade-right"
              data-aos-duration={400}
              data-aos-delay={200}
            >
              <div className="eff-info">
                <i className="fab fa-facebook-f" />
                <i className="fab fa-facebook-messenger" />
                <i className="fab fa-instagram" />
              </div>
            </div>
            <div className="infocontact">
              <span>Address:</span> 57/4/4 Mieu Go Xoai, Binh Hung Hoa A, Binh
              Tan, Ho Chi Minh city.
              <br />
              <span>Phone:</span> 0902356022.
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <form>
              <div className="row">
                <div className="col-12 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-12 mb-2">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={5}
                    placeholder="write here"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-aos="fade-up"
                    data-aos-duration={400}
                    data-aos-delay={300}
                    onClick={() => {
                      window.open(
                        "https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fgmail.readonly&response_type=code&client_id=98529189089-6mj1npv2bovuap0d2urualkiick7l7hj.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A3000"
                      );
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContact;
