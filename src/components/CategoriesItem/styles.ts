import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem auto;
  max-width: 1200px;
  .items {
    display: flex;
    flex-direction: column;
    width: 33%;
    img {
      height: 400px;
      margin-bottom: 20px;
      width: 100%;
      box-shadow: rgb(40 41 44) 1px 1px 30px;
      object-fit: cover;
    }
  }
`;
