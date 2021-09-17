import React, { useState } from "react";
import styled from "styled-components";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = (e) => {
    if (e.target.classList.contains("overlay")) {
      setMenuOpen(false);
      document.body.classList.remove("overflow-hidden");
    }
  };

  if (menuOpen) {
    document.body.addEventListener("click", closeMenu);
  } else {
    document.body.removeEventListener("click", closeMenu);
  }

  return (
    <Container>
      <img src="/images/logo.svg" alt="logo" />
      <img
        src="/images/hamburger.svg"
        alt="hamburger"
        className="hamburger"
        onClick={() => {
          setMenuOpen(!menuOpen);
          document.body.classList.toggle("overflow-hidden");
        }}
      />
      <div className={`overlay ${menuOpen && "overlay-visible"}`}></div>
      <div className={`menu ${menuOpen && "menu-active"}`}>
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
    /* position: relative; */
  }
  img {
    cursor: pointer;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    display: none;
    z-index: 5;
  }
  .overlay-visible {
    display: block;
  }
  .hamburger {
    display: none;
    @media (max-width: 768px) {
      display: block;
      width: 3rem;
      margin-left: auto;
      position: relative;
      z-index: 200;
    }
  }
  .menu {
    display: flex;

    width: 100%;

    @media (max-width: 768px) {
      position: absolute;
      top: 15%;
      width: 90%;
      flex-direction: column;
      background-color: var(--dark-violet);
      z-index: 200;
      padding: 5rem 3rem;
      border-radius: 1rem;
      transform: scale(0);
      opacity: 0;
      visibility: hidden;
      transition: all 167ms;
    }

    .buttons {
      margin-left: auto;

      @media (max-width: 768px) {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    }
  }
  .menu-active {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: 5rem;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding-bottom: 4rem;
    border-bottom: 1px solid hsl(0, 0%, 40%);
    margin-bottom: 4rem;
  }
  li {
    cursor: pointer;
    transition: all 167ms;
  }
  li:hover a {
    color: var(--very-dark-blue);

    @media (max-width: 768px) {
      color: var(--white);
    }
  }
  a {
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--grayish-violet);

    @media (max-width: 768px) {
      font-size: 2.3rem;
      color: var(--white);
    }
  }
`;

export default Header;
