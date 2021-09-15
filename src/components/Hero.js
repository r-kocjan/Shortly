import React from "react";
import styled from "styled-components";
const Hero = () => {
  return (
    <Full>
      <Container>
        <div className="content">
          <h1 className="heading-1">
            More than just <br /> shorter links
          </h1>
          <p className="paragraph">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="button button-big button-cyan">Get Started</button>
        </div>
      </Container>
      <img
        src="/images/illustration-working.svg"
        alt="hero"
        className="hero-image"
      />
    </Full>
  );
};

const Full = styled.div`
  margin-top: 15rem;
  padding-bottom: 25rem;
  min-height: 90vh;
  .hero-image {
    position: absolute;
    top: 60%;
    transform: translate(13%, -50%);
    right: 0;
    width: 50%;
  }
`;
const Container = styled.section`
  width: 1128px;
  margin: 0 auto;
  position: relative;
`;

export default Hero;
