import resume from "../../../static/Dixit_Keshavbhai_Patel_2018.pdf";
import React from "react";
import styled from "styled-components";
import { rhythm } from "../../utils/typography";

const DownloadLink = styled.a`
  text-align: center;

  &:hover {
    box-shadow: none;
  }
`;

const SimpleButton = styled.button`
  text-decoration: none;
  background: transparent;
  padding: 0;
  border: none;
  width: 90px;
  cursor: pointer;
  margin: ${rhythm(0.25)};
  font-size: ${rhythm(0.5)};
  text-align: center;
  background: rgb(236, 237, 238);
  border-radius: 3px;
  outline: none;
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const DownloadButton = styled(SimpleButton)`
  &:hover {
    background: rgb(226, 227, 228);
    transition-delay: 0.2s;
  }
  &:before {
    opacity: 0;
    position: absolute;
    content: attr(data-hover);
    transform: translate(-150%, 0);
    transition: 0.4s, opacity 0.6s;
  }
  &:hover:before {
    opacity: 1;
    transform: translate(25%, 0);
    transition-delay: 0.2s;
  }

  span {
    width: 100%;
    transition: 0.6s;
    transition-delay: 0.2s;
    display: inline-block;
    &:hover,
    &:focus {
      opacity: 0;
      transform: scale(0.3);
    }
  }
`;

const Buttons = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: space-evenly;
`;

const DownloadButtonsView = () => (
  <Buttons>
    <DownloadLink download target="_blank" href={resume}>
      <DownloadButton
        type="button"
        data-hover="Download"
        data-active="Starting..."
      >
        <span>Resume</span>
      </DownloadButton>
    </DownloadLink>
    <SimpleButton>
      <span>no-op</span>
    </SimpleButton>
  </Buttons>
);

export default DownloadButtonsView;
