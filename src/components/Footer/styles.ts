import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 0px 10px;
  }
  @media (max-width: 465px) {
    flex-direction: column;
    .logo {
      margin-bottom: 10px;
    }
  }
`;
