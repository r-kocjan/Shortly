import React from "react";
import styled from "styled-components";
const Boost = () => {
  return (
    <Full>
      <Container>
        <h2 className="heading-2 white">Boost your links today</h2>
        <button className="button button-cyan button-big">Get Started</button>
      </Container>
    </Full>
  );
};

const Full = styled.div`
  padding: 7rem;
  background-color: var(--dark-violet);
  background-image: url("/images/bg-boost-desktop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background-image: url("/images/bg-boost-mobile.svg");
    background-position: center;
    padding: 8rem 0;
  }
`;
const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    width: 90%;
  }
  h2 {
    margin-bottom: 3rem;
  }
`;

export default Boost;
