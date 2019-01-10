import styled from "styled-components";
import { rhythm } from "../utils/typography";

import { device } from "../utils/device";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  z-index: 2;
  border-radius: ${rhythm(0.25)};
  min-height: ${rhythm(4)};
  border-top: ${rhythm(0.5)} solid transparent;
  overflow: hidden;
  margin: 5px 0;
  padding: ${rhythm(0.25)} ${rhythm(0.5)};
  position: relative;
  border-top: 6px solid #3f4eae;
  // transition: all 1s ease;

  @media not screen and ${device.mobile} {
    &:first-child {
      margin-top: 0;
    }
    margin: 5px;
  }
`;

export const HeaderContainer = styled.div`
  align-self: flex-start;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Header = styled.div`
  color: ${props =>
    props.open ? "rgba(0, 0, 0, 0.8);" : "rgba(0, 0, 0, 0.5)"};
  font-size: ${rhythm(0.75)};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const OpenLink = styled.a`
  margin-left: auto;
  font-size: ${rhythm(0.75)};
  margin-top: -3px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

// hate this transition!
export const Description = styled.div`
  font-size: ${rhythm(0.5)};
  color: rgba(0, 0, 0, 0.8);
  transition: all 0.5s ease-in-out;
  opacity: ${props => (props.open ? "1" : "0")};
  height: ${props => (props.open ? "100%" : "0")};
`;

export const Tags = styled.div`
  display: flex;
  align-self: end;
  font-size: ${rhythm(0.5)};
  justify-content: center;
`;

export const Tag = styled.div`
  padding: 3px 6px;
  margin: ${rhythm(0.25)};
  border-radius: ${rhythm(0.25)};
  font-weight: ${rhythm(0.25)};
  color: rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.1);
  @media ${device.desktop} {
    &:nth-child(n + 7) {
      opacity: 0;
    }
  }

  @media ${device.mobile} {
    &:nth-child(n + 5) {
      opacity: 0;
    }
  }
  &:first-child {
    margin-left: 0;
  }
`;