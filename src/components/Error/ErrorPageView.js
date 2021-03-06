import React from "react";
import styled from "styled-components";
import { rhythm } from "../../utils";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.span`
  font-size: ${rhythm(3)};
  font-weight: 500;
  display: block;
  border-bottom: 1px solid #eaeaea;
  text-align: center;
  padding-bottom: ${rhythm(1)};
  width: 200px;
  color: #f61212;
`;

const SubText = styled.p`
  font-size: ${rhythm(2)};
  font-weight: 400;
  margin: 20px 0 0 0;
`;

const ErrorPageView = () => (
  <Section>
    <Text>404</Text>
    <SubText>Page not found</SubText>
  </Section>
);

export default ErrorPageView;
