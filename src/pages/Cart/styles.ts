import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin: 2rem auto;
  max-width: 1200px;
  min-height: 100vh;
  .cart {
    width: 350px;
  }
  .cartInfo {
    display: flex;
    flex-direction: column;
    margin-bottom: 45px;
    img {
      height: 250px;
      width: inherit;
      object-fit: cover;
      margin-bottom: 15px;
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .checkCart {
    position: fixed;
    right: 80px;
    width: 350px;
    background-color: #dc9763;
    height: auto;
    color: white;
    display: flex;
    padding: 20px;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    div {
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
