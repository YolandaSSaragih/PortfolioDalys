import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am an{" "}
              <span className="purple">Information Systems student</span>{" "}
              with a strong passion for{" "}
              <span className="purple">Data Analysis</span>.
              I enjoy working with data to uncover insights, identify patterns,
              and support data-driven decision making.
              <br />
              <br />
              I’m experienced in using{" "}
              <i>
                <b className="purple">
                  {" "}
                  SQL, Python, Excel, and data visualization tools{" "}
                </b>
              </i>
              to analyze datasets and present insights in a clear and meaningful way.
              <br />
              <br />
              With a background in{" "}
              <span className="purple">System Analysis</span> and{" "}
              <span className="purple">Web Development</span>, I am able to
              understand business requirements, analyze processes, and translate
              data insights into actionable solutions.
              <br />
              <br />
              Whenever possible, I enjoy working on projects that combine
              <b className="purple"> data analysis, visualization, and web-based dashboards </b>
              to deliver impactful insights and user-friendly analytical solutions.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
