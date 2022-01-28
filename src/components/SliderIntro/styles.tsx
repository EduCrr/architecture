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
    max-width: 400px;
    h1 {
      font-size: 60px;
    }
  }
  .right-side {
    flex: 1;
    img {
      height: 530px;
      width: 100%;
      object-fit: cover;

      &:nth-child(1) {
        border-left: 20px solid transparent;
      }
    }
  }
`;
