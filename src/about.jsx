import ProgressBar from "react-bootstrap/ProgressBar";
import Stack from "react-bootstrap/Stack";

export default function About() {
  const cSharp = 90;
  const azure = 80;
  const frontEnd = 30;
  const scripting = 40;
  const ionic = 50;
  const database = 55;
  const microservice = 60;

  return (
    <>
      <div className="container-wrap">
        <aside>
          <div>
            <div className="row padding-top-percent-2">
              <div className="col-md-6 col-md-offset-3 slider-text slider-text-bg">
                <div className="slider-text-inner text-center">
                  <h1>ABOUT ME</h1>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div id="fh5co-blog" className="blog-flex">
          <div className="blog-entry">
            <div className="row padding-top-percent-2 content">
              <h1>Jesus Carlo Borlagdan</h1>
              <p>
                Hi I'm JC! I consider myself as a dynamic individual whose
                passsion for innovation, strategy, and creativity knows no
                bounds. Aside from being technically inclined, I have a passion
                for gaming too where strategic thinking meets the thrill of
                virtual adventures.
              </p>
            </div>
          </div>
          <div className="blog-entry fh5co-light-grey">
            <Stack gap={3}>
              <div className="p-2">
                <h2 className="blog-entry-label">C# .Net</h2>
                <ProgressBar
                  className="color-bg-warning"
                  now={cSharp}
                  label={`${cSharp}%`}
                />
              </div>
              <div className="p-2">
                <h2 className="blog-entry-label">
                  Azure Cloud (Azure DevOps, Azure Cloud Resources)
                </h2>
                <ProgressBar
                  className="color-bg-warning"
                  now={azure}
                  label={`${azure}%`}
                />
              </div>
              <div className="p-2">
                <h2 className="blog-entry-label">Front-end (HTML5, CSS)</h2>
                <ProgressBar
                  className="color-bg-warning"
                  now={frontEnd}
                  label={`${frontEnd}%`}
                />
              </div>
              <div className="p-2">
                <h2 className="blog-entry-label">
                  Scripting (Powershell, YAML)
                </h2>
                <ProgressBar
                  className="color-bg-warning"
                  now={scripting}
                  label={`${scripting}%`}
                />
              </div>
              <div className="p-2">
                <h2 className="blog-entry-label">Ionic with Angular</h2>
                <ProgressBar
                  className="color-bg-warning"
                  now={ionic}
                  label={`${ionic}%`}
                />
              </div>
              <div className="p-2">
                <h2 className="blog-entry-label">Database (SQL, NoSQL)</h2>
                <ProgressBar
                  className="color-bg-warning"
                  now={database}
                  label={`${database}%`}
                />
              </div>
              <div className="p-2">
                <h2 className="blog-entry-label">Microservices</h2>
                <ProgressBar
                  className="color-bg-warning"
                  now={microservice}
                  label={`${microservice}%`}
                />
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
}
