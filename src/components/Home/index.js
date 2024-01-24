import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import Header from "../Header";
import AboutSection from "../AboutSection";
import ProjectsSection from "../ProjectsSection";
import ContactSection from "../ContactSection";
import Footer from "../Footer";

import { FaArrowCircleRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import {
  HeroSection,
  InfoContainer,
  MainContainer,
  PersonName,
  RoleType,
  RoleNote,
  MeAnchorLink,
  ScrollUp,
} from "./styledComponents";

function Home() {
  const { isDarkMode } = useContext(themeContext);

  return (
    <>
      <Header />
      {/* Main */}
      <MainContainer isDarkMode={isDarkMode}>
        {/* Hero Section */}
        <HeroSection id="hero">
          <InfoContainer>
            <PersonName>Hi, I'm  Sukumar Sundar Singh Molleti👋</PersonName>
            <RoleType>Full Stack Developer</RoleType>
            <RoleNote>
            Passionate and adaptable Software Engineer with a keen interest in tackling new challenges. 
            Proficient in the end-to-end software development lifecycle,
            including design, coding, testing, and documentation. 
            Currently contributing as a Software Engineer in a product-based startup.
            </RoleNote>
            <MeAnchorLink href="#about">
              See Why You should Work With Me{" "}
              <FaArrowCircleRight
                style={{
                  marginLeft: "7px",
                }}
              />
            </MeAnchorLink>
          </InfoContainer>
        </HeroSection>
      </MainContainer>
      {/* AboutSection */}
      <AboutSection />
      {/* ProjectsSection */}
      <ProjectsSection />
      {/* ContactSection */}
      {<ContactSection /> }
      {/* Footer */}
      <hr />
      <Footer />
      <ScrollUp aria-label="scroll-up" href="#" isDarkMode={isDarkMode}>
        <MdKeyboardDoubleArrowUp
          style={{
            color: isDarkMode ? "#fff" : "#000",
          }}
        />
      </ScrollUp>
    </>
  );
}

export default Home;
