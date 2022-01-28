import styled from "styled-components";

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left-side {
    width: 400px;
    img {
      height: 90vh;
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
      input {
        margin-left: 0px !important;
      }
      button {
        padding: 20px !important;
        margin-top: 2rem;
      }
    }
  }
`;
