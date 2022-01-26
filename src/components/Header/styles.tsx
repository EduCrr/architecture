import styled from "styled-components";

export const Container = styled.div`
  z-index: 999;
  top: 10px;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease 0.4s;
  max-width: 1200px;
  margin: auto;
  .logo {
    padding: 10px;
  }
  ul {
    display: flex;
  }
  ul li {
    margin: 0px 0px 0px 10px;
    transition: all ease 0.4s;

    svg {
      font-size: 20px;
    }
  }
`;
