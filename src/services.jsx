import Card from "react-bootstrap/Card";

export default function Services() {
  return (
    <>
      <div className="container-wrap">
        <aside>
          <div>
            <div className="row padding-top-percent-2">
              <div className="col-md-6 col-md-offset-3 slider-text slider-text-bg">
                <div className="slider-text-inner text-center">
                  <h1>SERVICES</h1>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div id="fh5co-contact">
          <div className="row padding-bottom-percent-5 padding-top-percent-2">
            <div className="col-md-3 text-center">
              <Card>
                <Card.Img variant="top" src="/src/assets/img/web-dev.jpg" />
                <Card.Body>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    Specialize in offering professional web development
                    services, crafting tailored solutions to bring your digital
                    vision to life.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 text-center">
              <Card>
                <Card.Img variant="top" src="/src/assets/img/mobile-dev.png" />
                <Card.Body>
                  <Card.Title>Mobile Development</Card.Title>
                  <Card.Text>
                    Expertise in native & hybrid mobile app development
                    delivering a quality outcome in a limited time frame.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 text-center">
              <Card>
                <Card.Img
                  variant="top"
                  src="/src/assets/img/tech-advising.png"
                />
                <Card.Body>
                  <Card.Title>Technical Advising</Card.Title>
                  <Card.Text>
                    Designing a future proven architecture and solutions that
                    guarantees scalability, high availability and reliability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 text-center">
              <Card>
                <Card.Img
                  variant="top"
                  src="/src/assets/img/people-management.png"
                />
                <Card.Body>
                  <Card.Title>People Management</Card.Title>
                  <Card.Text>
                    Exceptional team management skills ensuring workload balance
                    with reasonable deliveries and smooth team integration.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
