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
`;
