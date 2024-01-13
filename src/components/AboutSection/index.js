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
          <BackgroundSubtile>A bit About Me</BackgroundSubtile>
          <Description>
          I am a passionate and results-driven Full Stack Developer currently contributing my skills to Mindgrep Technologies Pvt Ltd in Dharamshala. 
          My journey in the tech world started as a Transportation Specialist at Amazon, 
          where I honed my analytical and problem-solving abilities by utilizing SQL, CRM tools, and 
          business intelligence to optimize transportation resources. I collaborated across regions, 
          working with carriers, supply chain, and retail organizations to forecast future demand and 
          translate it into accurate capacity plans.
          </Description>
          <Description>
          Software Engineer | Mindgrep Technologies Pvt Ltd | 09/2023 - Present, Dharamshala
          Engaged in the development of the backend microservices framework called Godspeed.
          Instrumental in adding new features and enhancing the overall functionality of the platform.
          </Description>
          <Description>
          Transportation Specialist | Amazon | 06/2022 - 09/2023, Hyderabad
          Utilized analytical skills, SQL, and CRM tools to clean, analyze, and refine data for optimal business results.
          Collaborated in a cross-functional environment, working closely with carriers, supply chain, and retail organizations.
          Resolved software bug tickets through data analysis and utilized Optimus software and other tools according to SOP.
          </Description>
          <Description>
          Full Stack Development Trainee | Nxtwave Disruptive Technologies | 04/2022 - 06/2023, Hyderabad
          Acquired hands-on experience in building Static, Responsive, and Dynamic Web Applications from scratch using the MERN stack.
          Developed a strong foundation in programming with Python and acquired proficiency in both relational and non-relational databases.
          </Description>
          <Description>
           B. Tech in Electronics & Communication | MLR Institute of Technology-Hyderabad | 06/2013 - 06/2017
          </Description>
          <Description>
          Full Stack Development,
          MERN Stack,
          Python Programming,
          Relational and Non-Relational Databases,
          Data Analysis,
          Software Bug Resolution,
          Microservices Architecture,
          </Description>
          <Description>
          I am driven by a curiosity to explore new technologies and a commitment to delivering high-quality 
          solutions. Let's connect and build the future together!
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
