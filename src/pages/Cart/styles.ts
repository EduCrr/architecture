import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  .cart {
    max-width: 500px;
  }
  .cartInfo {
    margin: 4rem auto;
    display: flex;
    flex-direction: column;

    img {
      height: 220px;
      width: 350px;
      object-fit: cover;
      margin-bottom: 15px;
    }
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
