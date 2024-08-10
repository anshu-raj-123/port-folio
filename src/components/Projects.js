import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import socialPic from "../assets/img/social-media-pic.png";
import ecommerce from "../assets/img/ecommerceImg.png";
import newsSite from "../assets/img/newsImg.png";
import ticToe from "../assets/img/tictoeImg.png";
import weather from "../assets/img/weather screenshot.png";
import invoicer from "../assets/img/Invoicer.png";
import AIgenerated from "../assets/img/AIgenerated.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Social Media Site",
      description: "Designed and implemented a MERN-based social platform",
      imgUrl: socialPic,
      link: "https://social-media-321.netlify.app/",
    },
    {
      title: "E-commerce Site",
      description: "E-commerce site using HTML, CSS, and ReactJs",
      imgUrl: ecommerce,
      link: "https://e-commerce-project123.netlify.app/",
    },
    {
      title: "AI-Driven Character Dialogue Generator",
      description: " A React-based tool that generates and customizes character dialogues using AI, with text-to-speech functionality for immersive interaction.",
      imgUrl: AIgenerated,
      link: "https://anshu-raj-123.github.io/TextToSpeech/",
    },
    {
      title: "News Website",
      description: "Get daily updates and news articles",
      imgUrl: newsSite,
      link: "https://news-site123.netlify.app/",
    },
    {
      title: "TicToe Game",
      description: "Play a 3x3 board game",
      imgUrl: ticToe,
      link: "https://ticc-tacc-game.netlify.app/",
    },
    {
      title: "Weather Website",
      description: "Get real-time weather information",
      imgUrl: weather,
      link: "https://weather-app-3211.netlify.app/",
    },
    {
      title: "Invoice Website",
      description: "Generate invoices for any items",
      imgUrl: invoicer,
      link: "https://invoicer-123.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>About Me</h2>
                  <p>
                  I'm passionate about crafting websites and solving challenges. I enjoy making things work and always try to learn new stuff. I work well in teams and like creating cool and useful things. Currently, I'm looking for new opportunities to grow and contribute.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">My Work</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Education</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard key={index} {...project} oncli />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
    <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'magenta', backgroundColor: 'yellow', display: 'inline-block', padding: '5px' }}>
            Software Engineer at Sphinx Analytics
        </h3>
        <p style={{ textAlign: 'left', marginTop: '10px' }}>
            - Implemented Firebase authentication, storage, and database features, ensuring secure and efficient data management.
        </p>
        <p style={{ textAlign: 'left' }}>
            - Integrated LLM models for enhanced website performance, optimizing user experience and engagement.
        </p>
        <p style={{ textAlign: 'left' }}>
            - Designed intuitive website layouts, while proficiently managing back-end functionalities.
        </p>
    </div>
</Tab.Pane>


<Tab.Pane eventKey="third">
    <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: 'magenta', backgroundColor: 'yellow', display: 'inline-block', padding: '5px' }}>
            Bachelor of Technology in Computer Science Engineering
        </h3>
        <p style={{ textAlign: 'left', marginTop: '10px' }}>
            - Orissa Engineering College, Bhubaneswar
        </p>
        <p style={{ textAlign: 'left' }}>
            - Scored: 8.4 CGPA
        </p>
        <p style={{ textAlign: 'left' }}>
            - Duration: August 2018 - September 2022
        </p>
    </div>
</Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt =" "></img>
    </section>
  );
};
