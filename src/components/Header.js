import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <img src="/images/logo.svg" alt="logo" />
      <div className="desktop-menu">
        <Menu>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
        </Menu>
        <div className="buttons">
          <button className="button button-login" type="button">
            Login
          </button>
          <button className="button button-cyan" type="button">
            Sign Up
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  margin-top: 4.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
  img {
    cursor: pointer;
  }
  .desktop-menu {
    display: flex;

    width: 100%;

    @media (max-width: 768px) {
      display: none;
    }

    .buttons {
      margin-left: auto;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: 5rem;
  gap: 3rem;

  li {
    cursor: pointer;
    transition: all 167ms;
  }
  li:hover a {
    color: var(--very-dark-blue);
  }
  a {
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--grayish-violet);
  }
`;

export default Header;
