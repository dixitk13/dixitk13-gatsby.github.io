import styled from "styled-components";
export const CircularImage = styled.img.attrs({
  tabIndex: 0,
  loading: "lazy",
  alt: "...",
  height: "80px",
  width: "80px",
})`
  border-radius: 50%;
  margin: 10px 30px 10px 20px;
  align-self: center;
  margin-bottom: 1rem;
  background-size: cover;
`;
