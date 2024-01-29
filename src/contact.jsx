import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <div className="container-wrap">
        <aside>
          <div>
            <div className="row padding-top-percent-2">
              <div className="col-md-6 col-md-offset-3 slider-text slider-text-bg">
                <div className="slider-text-inner text-center">
                  <h1>CONTACT</h1>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div id="fh5co-contact">
          <div className="row">
            <div className="col-md-3">
              <ul className="contact-info">
                <li>Phone: (437) 868-4919</li>
                <li>Email: jcborlagd@my.centennialcollege.ca</li>
              </ul>
            </div>
            <div className="col-md-7 col-md-push-1">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name=""
                      className="form-control"
                      id=""
                      cols="30"
                      rows="7"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <Link to="#">
                      <input
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary btn-modify"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
