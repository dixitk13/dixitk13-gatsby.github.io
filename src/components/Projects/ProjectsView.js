import React from "react";
import styled from "styled-components";

import { device } from "../../utils/device";
import ProjectCard from "./ProjectCard";

export default ({ data, cardNumber, ...rest }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <CardsContainer>
      {edges.map((edge, i) => {
        const { node } = edge;
        const { excerpt, frontmatter, html } = node;
        return (
          <ProjectCard
            key={i}
            id={i}
            open={cardNumber === i}
            active={cardNumber !== -1}
            html={html}
            body={excerpt}
            {...frontmatter}
            {...rest}
          />
        );
      })}
    </CardsContainer>
  );
};

const CardsContainer = styled.div`
  @media ${device.desktop} {
    display: flex;
    flex-flow: row wrap;
    width: 40vw;
    padding: 0 10px 0 0px;
    height: 100%;
    overflow: scroll;
  }
  @media ${device.mobile} {
    width: 90vw;
    display: flex;
    padding: 0;
    flex-direction: column;
  }
`;