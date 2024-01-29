import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Projects() {
  return (
    <>
      <div className="container-wrap">
        <aside>
          <div>
            <div className="row padding-top-percent-2">
              <div className="col-md-6 col-md-offset-3 slider-text slider-text-bg">
                <div className="slider-text-inner text-center">
                  <h1>PROJECTS</h1>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div id="fh5co-contact">
          <div className="row padding-bottom-percent-5 padding-top-percent-2">
            <div className="col-md-3 text-center">
              <Card border="dark">
                <Card.Header>Alloc8</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Migrating legacy architecture to an event driven scalable microservice architecture.
                    Managing team of senior software engineers that introduces product features and platform team focusing on automating processes
                    and maintainance to the cloud infrastructure of the company.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="padding-left-percent-5">
                    Technical Lead
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
            <div className="col-md-3 text-center">
              <Card border="dark">
                <Card.Header>i21 by iRely-Philippines Inc.</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Developing integrations with other modules included in a proprietary accounting software of the company.  Designated to Sales module 
                    to introduce new features and fix issues found in the product.  Managing the code versioning, code quality of the sales team and keeping the releases
                    up to date.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="padding-left-percent-5">
                    Web Application Developer
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
            <div className="col-md-3 text-center">
              <Card border="dark">
                <Card.Header>COMP-229</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Build a web application using vite with react to briefly introduce our personal background and technical expertise.  Showcasing
                    knowledge gained from the early weeks of lecture and laboratory practices.  Assisting colleagues with difficulties and understanding
                    with the current lecture.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="padding-left-percent-5">
                    Student
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
            <div className="col-md-3 text-center">
              <Card border="dark">
                <Card.Header>COMP-246</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Create a documentation for a proposed invoicing system that will cater the needs of business owners and project managers
                    to plan a feasible delivery of the project.  The documentation includes technical details to allow the implementation team build a robust
                    architecture for to the project.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="padding-left-percent-5">
                    Student
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
