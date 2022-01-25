import styled from "styled-components";

export const Container = styled.div`
  width: 33%;
  margin: 4rem auto;
  .items {
    display: flex;
    flex-direction: column;
    width: 100%;
    img {
      height: 400px;
      margin-bottom: 20px;
      width: 100%;
      box-shadow: rgb(40 41 44) 1px 1px 30px;
      object-fit: cover;
    }
  }
`;
