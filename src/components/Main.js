import React from "react";
import styled from "styled-components";
const Main = () => {
  return (
    <Full>
      <Container>
        <Shorten>
          <input type="text" placeholder="Shorten a link here..." />
          <button className="button button-cyan button-big button-shorten">
            Shorten It!
          </button>
        </Shorten>
        <div className="results"></div>
        <h2 className="heading-2">Advanced Statistics</h2>
        <p className="paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <Cards>
          <div className="card">
            <h3 className="heading-3">Brand Recognition</h3>
            <p className="paragraph">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card">
            <h3 className="heading-3">Detailed Records</h3>
            <p className="paragraph">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card">
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
  .results {
    margin-bottom: 5rem;
  }
  .paragraph {
    margin: 0 auto;
    font-size: 2rem;
  }
`;

const Shorten = styled.div`
  background-image: url("/images/bg-boost-desktop.svg");
  width: 100%;
  padding: 5.6rem 7rem;
  background-size: cover;
  background-position: bottom;
  background-color: var(--dark-violet);
  border-radius: 1rem;
  display: flex;
  transform: translateY(-50%);
  input {
    width: 80%;
    margin-right: 3.5rem;
    border-radius: 1rem;
    padding: 2.5rem;
    border: 0;
    font-size: 1.9rem;
    font-weight: bold;
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
  }
`;

const Cards = styled.div`
  display: flex;
  text-align: left;
  margin-top: 8rem;
  p {
    margin: 0;
    width: 100%;
  }
`;

export default Main;
