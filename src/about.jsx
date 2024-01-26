export default function About() {
  return (
    <>
      <section id="about">
        <div className="container reveal">
          <h2>About Me</h2>
          <div className="text-container">
            {/* <div className="text-box">
            </div> */}
              <img src={"../src/assets/img/about-me-nobg.png"}/>
            <div className="text-box">
              <h3>Section Text</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
