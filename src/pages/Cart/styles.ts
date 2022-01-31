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
      width: 350px;
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
  @media (max-width: 1024px) {
    padding: 0px 10px;
  }
  @media (max-width: 850px) {
    flex-direction: column;
    .checkCart {
      position: relative !important ;
      width: 100%;
      margin: auto;
      justify-content: center;
      align-items: center;
      right: 0;
    }
    .cart,
    .checkCart {
      margin: auto;
      width: 100%;
    }
  }
  @media (max-width: 375px) {
    .checkCart {
      flex-direction: columns;
    }
  }
`;
