// import { GrLinkNext } from "react-icons/gr";
// import { instagramfeed } from "../data/Data";
// import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navbar } from "../data/Data";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4 ">
                <div class="infoma">
                  <h3>Contact Us</h3>
                  <ul class="conta">
                    <li>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      Locations
                    </li>
                    <li>
                      <i class="fa fa-phone" aria-hidden="true"></i>Call +01
                      1234567890
                    </li>
                    <li>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                      <Link> demo@gmail.com</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8">
                <div class="row border_left">
                  <div class="col-md-12">
                    <div class="infoma">
                      <h3>Newsletter</h3>
                      <form class="form_subscri">
                        <div class="row">
                          <div class="col-md-12"></div>
                          <div class="col-md-4">
                            <input
                              class="newsl"
                              placeholder="Enter your email"
                              type="text"
                              name="Enter your email"
                            />
                          </div>
                          <div class="col-md-4">
                            <input
                              class="newsl"
                              placeholder="Enter your email"
                              type="text"
                              name="Enter your email"
                            />
                          </div>
                          <div class="col-md-4">
                            <button class="subsci_btn">subscribe</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div class="infoma">
                      <h3>Useful Link</h3>
                      <ul class="fullink">
                        {navbar.map((val, key) => (
                          <li>
                            <Link to={val.path}>{val.nav}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="infoma text_align_left">
                      <ul class="social_icon">
                        <li>
                          <Link>
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <i
                              class="fa fa-linkedin-square"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    © 2025 All Rights Reserved. Design by{" "}
                    <Link
                      to={"https://shamsudin.bluelineaircondition.com/"}
                      target="_blank"
                    >
                      ATMOS
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
