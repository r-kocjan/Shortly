import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Link from "./Link";
const Main = () => {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const fetchShortLink = async (url) => {
    await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => response.json())
      .then((data) => {
        setLinks([...links, { link: url, shortLink: data.result.short_link }]);
        setError(false);
        setLink("");
        inputRef.current.value = "";
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("links")) {
      return;
    }
    const storageLinks = JSON.parse(localStorage.getItem("links"));
    setLinks([...storageLinks]);
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <Full>
      <Container>
        <Shorten>
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={`${error && "input-invalid"}`}
            ref={inputRef}
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            className="button button-cyan button-big button-shorten"
            type="button"
            onClick={() => fetchShortLink(link)}
          >
            Shorten It!
          </button>
          <span className={`span-invalid ${error && "show"}`}>
            Please add a valid link!
          </span>
        </Shorten>
        <div className="results">
          {links.map((link, id) => {
            return <Link key={id} links={link} />;
          })}
        </div>
        <h2 className="heading-2">Advanced Statistics</h2>
        <p className="paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <Cards>
          <div className="card">
            <div className="icon">
              <img src="/images/icon-brand-recognition.svg" alt="recognition" />
            </div>
            <h3 className="heading-3">Brand Recognition</h3>
            <p className="paragraph">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/images/icon-detailed-records.svg" alt="records" />
            </div>
            <h3 className="heading-3">Detailed Records</h3>
            <p className="paragraph">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src="/images/icon-fully-customizable.svg" alt="custom" />
            </div>
            <h3 className="heading-3">Fully Customizable</h3>
            <p className="paragraph">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </Cards>
      </Container>
    </Full>
  );
};

const Full = styled.div`
  background-color: #eff1f7;
`;
const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 15rem;

  @media (max-width: 768px) {
    width: 90%;
  }
  .results {
    margin-bottom: 10rem;
    margin-top: -6rem;
  }
  .paragraph {
    margin: 0 auto;
    font-size: 2rem;
  }
  .results {
    width: 100%;
  }
  .shortened {
    background-color: var(--white);
    border-radius: 1rem;
    text-align: left;
    padding: 2rem 4rem;
    display: flex;
    align-items: center;
    animation: moveIn ease-in 250ms;
    margin-bottom: 2rem;
    position: relative;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      .button-cyan {
        font-size: 1.8rem;
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.1px;
        background-color: hsl(0, 0%, 90%);
        left: 0;
        top: 34%;
      }
    }
  }
  .link {
    font-size: 2.2rem;
    color: var(--very-dark-blue);

    @media (max-width: 768px) {
      margin-bottom: 2rem;
      overflow-x: scroll;
      white-space: nowrap;
      width: 100%;
    }
  }
  .link-short {
    margin-left: auto;
    font-size: 2.2rem;
    color: var(--cyan);
    margin-right: 2rem;
    @media (max-width: 768px) {
      margin: 0;
    }
  }
  .button {
    border-radius: 1rem;
    width: 13rem;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 1.5rem;
    }
  }
  .copied {
    background-color: var(--very-dark-violet);
  }
`;

const Shorten = styled.div`
  background-image: url("/images/bg-shorten-desktop.svg");
  width: 100%;
  padding: 5.6rem 7rem;
  background-size: cover;
  background-position: bottom;
  background-color: var(--dark-violet);
  border-radius: 1rem;
  display: flex;
  transform: translateY(-50%);
  position: relative;

  @media (max-width: 768px) {
    background-image: url("/images/bg-shorten-mobile.svg");
    background-position: center;
    flex-direction: column;
    padding: 4.5rem 3rem;
    background-repeat: no-repeat;
  }

  input {
    width: 80%;
    margin-right: 3.5rem;
    border-radius: 1rem;
    padding: 2.5rem;
    border: 0;
    font-size: 1.9rem;
    font-weight: bold;
    border: 4px solid transparent;
    transition: all 167ms;
    @media (max-width: 768px) {
      padding: 1.5rem;
      width: 100%;
      margin: 0;
      margin-bottom: 1.5rem;
    }
  }

  input:focus {
    border: 4px solid var(--cyan);
  }
  .input-invalid {
    border: 4px solid var(--red);
  }
  .span-invalid {
    color: var(--red);
    font-size: 1.8rem;
    position: absolute;
    left: 0;
    margin-left: 7rem;
    font-style: italic;
    bottom: 1.8rem;
    transition: all 167ms;
    opacity: 0;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      bottom: 1rem;
      margin-left: 3rem;
    }
  }
  .show {
    opacity: 1;
  }
  input:focus {
    outline: none;
  }
  input::-webkit-input-placeholder {
    font-size: 1.9rem;
    font-family: inherit;
    font-weight: bold;
    color: var(--grayish-violet);
    letter-spacing: 1px;
  }
  .button-shorten {
    width: 20%;
    border-radius: 1rem;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  text-align: left;
  align-items: flex-start;
  margin-top: 8rem;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8rem;
    margin-top: 12rem;
  }
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 1rem;
    top: 45%;
    background-color: var(--cyan);
    position: absolute;
    z-index: -1;
    @media (max-width: 768px) {
      width: 1rem;
      height: 90%;
      top: 0;
    }
  }
  .card {
    background-color: var(--white);
    padding: 3.5rem;
    padding-top: 0;
    border-radius: 1rem;
    position: relative;
    @media (max-width: 768px) {
      height: 30rem;
      width: 90%;
    }
    &:nth-of-type(2) {
      margin-top: 6rem;
      @media (max-width: 768px) {
        margin: 0;
      }
    }
    &:nth-of-type(3) {
      margin-top: 12rem;
      @media (max-width: 768px) {
        margin: 0;
      }
    }

    .icon {
      background-color: var(--dark-violet);
      border-radius: 50%;
      width: 80px;
      transform: translateY(-50%);
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    p {
      margin: 0;
      width: 100%;
      font-size: 1.7rem;
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }
    @media (max-width: 768px) {
      h3 {
        margin-top: 8rem;
      }
    }
  }
  .card:not(:last-child) {
    margin-right: 3rem;
    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;

export default Main;
