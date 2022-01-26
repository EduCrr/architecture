import styled from "styled-components";

export const Container = styled.div`
  width: 33%;
  margin: 4rem auto;
  .items {
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
      height: 400px;
      margin-bottom: 20px;
      width: 100%;
      object-fit: cover;
      border-left: 10px solid transparent;
    }
  }
  .middle {
    text-align: left;
    top: 70%;
    left: 25%;
  }
  a {
    font-size: 30px;
  }
`;
