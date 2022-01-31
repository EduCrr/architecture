import styled from "styled-components";

export const Container = styled.div<{ menu: boolean }>`
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
    margin: 0px 0px 0px 30px;
    transition: all ease 0.4s;

    svg {
      font-size: 20px;
      color: #67686a;
    }
  }
  a.active {
    color: white;
  }
  .menu {
    display: none;
  }
  @media (max-width: 1024px) {
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    nav,
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ul {
      top: 0;
      right: ${(props) => (props.menu ? "0px" : "-50px")};
      width: ${(props) => (props.menu ? "30%" : "0%")};
      height: 100vh;
      background-color: #1f2024;
      position: fixed;
      flex-direction: column;
      opacity: ${(props) => (props.menu ? "1" : "0")};
      z-index: ${(props) => (props.menu ? "99" : "-99")};
      transition: all ease 0.8s;
    }
    ul li {
      margin: 10px 0px 10px 0px;
    }
    .menu {
      display: flex;
    }
  }
  @media (max-width: 600px) {
    ul {
      width: ${(props) => (props.menu ? "100%" : "0%")};
    }
  }
`;
