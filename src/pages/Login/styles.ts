import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  .left-side {
    width: 400px;
    img {
      height: auto;
      width: 400px;
      object-fit: cover;
    }
  }
  .right-side {
    display: flex;
    flex-direction: column;
    width: 50% !important;
    select {
      margin-left: 0px !important;
    }
    form {
      display: flex;
      flex-direction: column;

      button {
        padding: 20px !important;
        margin-top: 2rem;
      }
    }
  }
  @media (max-width: 1024px) {
    padding: 0px 10px;
    flex-direction: column;
    justify-content: flex-start;
    .right-side {
      width: 400px !important;
    }
  }
  @media (max-width: 450px) {
    .left-side,
    .right-side {
      width: 100% !important;
    }
    .left-side {
      img {
        width: 100%;
      }
    }
  }
`;
