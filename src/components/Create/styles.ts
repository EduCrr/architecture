import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 4rem;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  .left-side {
    width: 370px;
    img {
      width: inherit;
    }
  }
  .right-side {
    width: 600px;
    h2 {
      font-size: 45px;
    }
  }
  .btn {
    width: 30%;
    button {
      width: 100%;
    }
  }
  @media (max-width: 1024px) {
    padding: 0px 10px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    .right-side {
      margin-top: 20px;
      width: 100%;
      text-align: center;
      img {
      }
      .btn {
        margin: auto;
      }
    }
  }
  @media (max-width: 600px) {
    .right-side {
      h2 {
        font-size: 37px;
      }
      .btn {
        width: 100%;
      }
    }
  }
`;
