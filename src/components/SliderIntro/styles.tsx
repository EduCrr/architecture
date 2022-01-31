import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  height: 90vh;

  .left-side {
    max-width: 300px;
    h1 {
      font-size: 60px;
    }
  }
  .right-side {
    flex: 1;
    overflow: hidden;
    img {
      height: 530px;
      width: 100%;
      object-fit: cover;

      &:nth-child(1) {
        border-left: 10px solid transparent;
      }
    }
    .arrows {
      margin-top: 10px;
      display: flex;
      width: 100%;
      justify-content: flex-end;
      div {
        margin-left: 20px;
        color: #dc9763;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1024px) {
    padding: 0px 10px;
    .right-side img {
      height: 450px;
    }
  }
  @media (max-width: 1000px) {
    padding: 0px;

    flex-direction: column;
    .left-side {
      margin-bottom: 20px;
    }
    .left-side,
    .right-side {
      max-width: 100% !important;
      img {
        &:nth-child(1) {
          border-left: 0px solid transparent;
        }
      }
    }
    height: auto;
  }
  @media (max-width: 375px) {
    .left-side h1 {
      font-size: 50px;
    }
  }
`;
