import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { FaBootstrap, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiExpress, SiNpm } from "react-icons/si";

import {
  AboutSectionContainer,
  AboutContainer,
  Photowrapper,
  MyPhoto,
  Background,
  BackgroundTitle,
  BackgroundSubtile,
  Description,
  TechStackContainer,
  TechStackHeading,
  Tools,
  ToolList,
  ToolItem,
} from "./styledComponents";

function AboutSection() {
  const { isDarkMode } = useContext(themeContext);
  return (
    <AboutSectionContainer id="about">
      <AboutContainer>
        <Photowrapper>
          <MyPhoto
            alt="my photo"
            loading="lazy"
            src="https://res.cloudinary.com/dqfmzzr5g/image/upload/v1705160497/sundar_ax5nod.jpg"
          />
        </Photowrapper>
        <Background isDarkMode={isDarkMode}>
          <BackgroundTitle>Background</BackgroundTitle>
          <BackgroundSubtile>My Story</BackgroundSubtile>
          <Description>
          After pursuing my graduation, I initially aspired to contribute to societal change through Civil Services. 

However, recognizing my strength in problem-solving, I transitioned to Software Development. 
Despite initially working on databases and UI development, my passion for becoming a full-stack developer led me to enroll in Nxtwave Disruptive Technologies.

With expertise in Python, React JS, JavaScript, Typescript, CLI, Node JS, HTML, CSS, Docusaurus, Mocha, Chai, MongoDB, Mongoose, and SQL databases, I've accumulated 2 years of valuable tech experience. Currently, I'm actively contributing to a product-based startup.
          </Description>
          <Description>
          Mindgrep Technologies Pvt Ltd (Software Engineer):
          As a Software Developer, I specialized in Framework Development & CLI Enhancement. I introduced new features using React.js, Node.js, Express, and YAML DSL, significantly enhancing the Godspeed CLI and boosting customer satisfaction. Additionally, in Documentation and Content Creation, I utilized Docusaurus, achieving a remarkable 30% increase in outreach through impactful blogs and tech videos. My commitment to Testing Excellence involved detailed feature testing with Mocha and Chai, resulting in an error-free framework and a notable 20% reduction in response time.




User

          </Description>
          <Description>
          Amazon(Transportation Technical Specialist): 
          As a Technical Specialist, I addressed software tickets, achieving a 15% reduction in bugs through the use of HTML, CSS, JavaScript, and React. I also managed transportation databases, refining and analyzing data with SQL, Optimus, and business intelligence to align with demand requirements. A key contribution was boosting capacity planning efficiency by 20% through predictive modeling, optimizing resource allocation, and leading to a 10% reduction in operational costs, resulting in substantial financial savings.
          </Description>
          <Description>
          Nxtwave Disruptive Technologies( Full Stack Development Trainee ):
          Acquired hands-on experience in building Static, Responsive, and Dynamic Web Applications from scratch using the MERN stack.
          Developed a strong foundation in programming with Python and acquired proficiency in both relational and non-relational databases.
          </Description>
          <Description>
          Beyond tech, I find joy in teaching Tabla for the past five years, blending creativity with discipline.
Open to collaborations and eager to explore new opportunities!
          </Description>

        
        </Background>
      </AboutContainer>
      <TechStackContainer isDarkMode={isDarkMode}>
        <TechStackHeading>My core tools and technologies</TechStackHeading>
        <Tools>
          <ToolList>
            <ToolItem>
              <AiFillHtml5
                color="#ff4d15"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              HTML
            </ToolItem>
            <ToolItem>
              <DiCss3
                color="#264de4"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              CSS
            </ToolItem>
            <ToolItem>
              <FaBootstrap
                color="#7a09f7"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Bootstrap
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <RiJavascriptFill
                color="#f0db4f"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Javascript
            </ToolItem>
            <ToolItem>
              <DiReact
                color="#61dbfb"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              React.JS
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022486/Python-logo-notext.svg_uvzbbk.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="Python Icon"
              />
              Python
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022770/sqlite_logo_icon_169724_ox8bsk.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="SQLite Icon"
              />
              SQLite
            </ToolItem>
            <ToolItem>
              <FaNodeJs
                color="#68a063"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Node.JS
            </ToolItem>
            <ToolItem>
              <SiExpress
                style={{
                  marginRight: "0.5rem",
                }}
              />{" "}
              Express.JS
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <SiNpm
                color="#cb3837"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              NPM
            </ToolItem>
            <ToolItem>
              <FaGitAlt
                color="#f05030"
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Git
            </ToolItem>
            <ToolItem>
              <AiFillGithub
                style={{
                  marginRight: "0.5rem",
                }}
              />
              GitHub
            </ToolItem>
          </ToolList>
          <ToolList>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688022067/pngwing.com_rte7ts.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="Figma Icon"
              />
              Figma
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dmlhm8dwi/image/upload/v1688023219/mongodb_original_logo_icon_146424_gfauqe.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="MongoDB Icon"
              />
              MongoDB
              <sup
                style={{
                  color: "#47b147",
                  fontSize: "0.54rem",
                  fontFamily: "Roboto, Mono monospace",
                  marginLeft: "0.2rem",
                }}
              >
                SOON!
              </sup>
            </ToolItem>
            <ToolItem>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="TypeScript Icon"
              />
              TypeScript
            </ToolItem>
          </ToolList>
          <ToolList>
          <ToolItem>
              <img
                src="https://res.cloudinary.com/dzdcjchdc/image/upload/v1705052816/Screenshot_from_2024-01-12_15-16-39_fxqeua.png"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="MochaChai  Icon"
              />
              Mocha and Chai
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dqfmzzr5g/image/upload/v1705053278/m6ct8rz4g2dsiggkpjto.png"
                style={{
                  width: "2rem",
                  marginRight: "0.5rem",
                }}
                alt="Postman Icon"
              />
              Postman
            </ToolItem>
            <ToolItem>
              <img
                src="https://res.cloudinary.com/dqfmzzr5g/image/upload/v1705053526/docusaurus_ideilc.svg"
                style={{
                  width: "1rem",
                  marginRight: "0.5rem",
                }}
                alt="Docusaurus Icon"
              />
              Docusaurus
            </ToolItem>
          </ToolList>
        </Tools>
      </TechStackContainer>
    </AboutSectionContainer>
  );
}

export default AboutSection;
