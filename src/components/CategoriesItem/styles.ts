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
  @media (max-width: 1024px) {
    padding: 0px 10px;
    overflow-x: hidden;
    select {
      margin-left: 20px;
    }
    .items {
      img {
        border-left: 0px solid transparent !important;
      }
    }
    .middle a {
      font-size: 23px;
    }
  }
  @media (max-width: 768px) {
    width: 33%;
  }
  @media (max-width: 650px) {
    width: 50%;
    .middle {
      left: 50%;
      width: 90%;
    }
  }
  @media (max-width: 450px) {
    width: 100%;
    .middle a {
      font-size: 30px;
    }
  }
`;
