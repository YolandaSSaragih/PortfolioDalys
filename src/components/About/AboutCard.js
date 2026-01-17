import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Yolanda Septania Saragih</span>{" "}
            from <span className="purple">North Sumatra, Indonesia</span>.
            <br />
            <br />
            I’m an{" "}
            <span className="purple">Information Systems student</span>{" "}
            with a strong interest in{" "}
            <span className="purple">Data Analysis</span>.
            I enjoy working with data to discover patterns, generate insights,
            and support data-driven decision making.
            <br />
            <br />
            I have experience as a{" "}
            <span className="purple">System Analyst</span> and{" "}
            <span className="purple">UI/UX Designer</span>, which strengthens
            my ability to understand business requirements, analyze processes,
            and translate data insights into clear and meaningful solutions.
            <br />
            <br />
            I’m comfortable working with{" "}
            <span className="purple">
              data analysis tools, SQL, Python, Excel, and visualization tools
            </span>{" "}
            to analyze datasets and communicate insights effectively.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Analyzing data and extracting insights 📊
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating data visualizations & dashboards 📈
            </li>
            <li className="about-activity">
              <ImPointRight /> Understanding business processes & system flows 🧩
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous learning in data and analytics 🚀
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Transforming raw data into actionable insights for better decisions."
          </p>
          <footer className="blockquote-footer">
            Yolanda Saragih
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
