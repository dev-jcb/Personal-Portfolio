import ProfilePhoto from "../src/assets/img/about-me.jpg";
import L from "../src/assets/img/L.png";
import E from "../src/assets/img/E.png";
import A from "../src/assets/img/A.png";
import D from "../src/assets/img/D.png";
import Socials from "./Socials";

export default function Home() {
  return (
    <>
      <div className="container-wrap">
        <div id="fh5co-blog" className="blog-flex">
          <div
            className="featured-blog"
            style={{
              backgroundImage: `url(${ProfilePhoto})`,
            }}
          ></div>
          <div className="blog-entry fh5co-light-grey">
            <div className="row padding-bottom-percent-5">
              <div className="blog-post">
                <span
                  className="img"
                  style={{ backgroundImage: `url(${L})` }}
                ></span>
                <div className="desc">
                  <h3>
                    Leading team towards success by guiding individuals to realize their full potential
                  </h3>
                </div>
              </div>
            </div>
            <div className="row padding-bottom-percent-5">
              <div className="blog-post">
                <span
                  className="img"
                  style={{ backgroundImage: `url(${E})` }}
                ></span>
                <div className="desc">
                  <h3>
                    Empowering creative and innovative minds to build a better future
                  </h3>
                </div>
              </div>
            </div>
            <div className="row padding-bottom-percent-5">
              <div className="blog-post">
                <span
                  className="img"
                  style={{ backgroundImage: `url(${A})` }}
                ></span>
                <div className="desc">
                  <h3>
                    Adapting to the latest trend and technology, competing against the greatest
                  </h3>
                </div>
              </div>
            </div>
            <div className="row padding-bottom-percent-5">
              <div className="blog-post">
                <span
                  className="img"
                  style={{ backgroundImage: `url(${D})` }}
                ></span>
                <div className="desc">
                  <h3>
                    Driven to deliver exceptional results embracing challenges as opportunities for growth and success
                  </h3>
                </div>
              </div>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}
