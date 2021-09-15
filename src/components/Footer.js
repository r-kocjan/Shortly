import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Full>
      <Container>
        <img src="/images/logo-white.svg" alt="logo" />
        <ul className="footer-menu features">
          <span>Features</span>
          <li>
            <a>Link Shortening</a>
          </li>
          <li>
            <a>Branded Links</a>
          </li>
          <li>
            <a>Analytics</a>
          </li>
        </ul>
        <ul className="footer-menu resources">
          <span>Resources</span>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Developers</a>
          </li>
          <li>
            <a>Support</a>
          </li>
        </ul>
        <ul className="footer-menu company">
          <span>Company</span>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Our Team</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <ul className="social">
          <li>
            <a>
              <img src="/images/icon-facebook.svg" alt="fb" />
            </a>
          </li>
          <li>
            <a>
              <img src="/images/icon-twitter.svg" alt="fb" />
            </a>
          </li>
          <li>
            <a>
              <img src="/images/icon-pinterest.svg" alt="fb" />
            </a>
          </li>
          <li>
            <a>
              <img src="/images/icon-instagram.svg" alt="fb" />
            </a>
          </li>
        </ul>
      </Container>
    </Full>
  );
};

const Full = styled.div`
  padding: 8rem;
  background-color: var(--very-dark-violet);
`;
const Container = styled.footer`
  width: 1128px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  img {
    margin-right: auto;
  }
  .footer-menu {
    margin-right: 8rem;
    span {
      color: var(--white);
      font-size: 1.8rem;
      margin-bottom: 3rem;
      display: block;
    }
    li {
      margin-bottom: 1rem;
      cursor: pointer;
    }
    a {
      transition: all 167ms;
    }
    li:hover a {
      color: var(--cyan);
    }
  }
  .social {
    display: flex;
    align-items: center;
    margin-left: 3rem;
    gap: 2rem;
  }
`;

export default Footer;
