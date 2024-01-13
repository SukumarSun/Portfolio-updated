import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import themeContext from "../../themeContext/themeContext";

import {
  FooterContainer,
  Email,
  FooterSocials,
  CopyRight,
} from "./styledComponents";

function Footer() {
  const { isDarkMode } = useContext(themeContext);

  return (
    <FooterContainer isDarkMode={isDarkMode}>
      <Email>
        <MdEmail
          style={{
            fontSize: "1.1rem",
            fontWeight: "bolder",
            marginRight: "5px",
          }}
        />
        <a href="mailto:msukumarsundar12@gmail.com">msukumarsundar12@gmail.com</a>
      </Email>
      <FooterSocials>
        <a
          aria-label="github"
          href="https://github.com/SukumarSun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/sukumar-molleti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            color="#0366c3"
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
      </FooterSocials>
      <CopyRight>
        Copyright 2023 © Sukumar Sundar Singh Molleti - All Right Reserved.
      </CopyRight>
    </FooterContainer>
  );
}

export default Footer;
