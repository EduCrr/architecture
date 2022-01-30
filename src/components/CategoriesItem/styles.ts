import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem 0px 0px 0px;
  width: 25%;
  .items {
    img {
      height: 400px;
      width: 100%;
      object-fit: cover;
      border-left: 10px solid transparent;
    }
  }
  .middle {
    text-align: left;
    top: 80%;
    left: 60%;
    width: 100%;
  }
  a {
    font-size: 30px;
  }
`;
