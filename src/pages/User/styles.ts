import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  min-height: 100vh;
  .user-info {
    margin-top: 1rem;
    max-width: 400px;
    form {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 1024px) {
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    .user-info {
      text-align: center;
      margin: auto;
    }
  }
`;
