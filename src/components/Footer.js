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
  @media (max-width: 768px) {
    padding-bottom: 3.5rem;
  }
`;
const Container = styled.footer`
  width: 1128px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  img {
    margin-right: auto;
    @media (max-width: 768px) {
      margin: 0 auto;
      margin-bottom: 6rem;
    }
  }
  .footer-menu {
    margin-right: 8rem;

    @media (max-width: 768px) {
      margin: 0;
    }
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
    @media (max-width: 768px) {
      li:last-child {
        margin-bottom: 3.5rem;
      }
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
    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }
`;

export default Footer;
