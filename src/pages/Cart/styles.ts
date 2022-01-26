import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  margin: 4rem auto;
  max-width: 1200px;
  .cart {
    width: 350px;
  }
  .cartInfo {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
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
    width: 250px;
    background-color: #dc9763;
    height: 150px;
    color: white;
    display: flex;
    padding: 0px 20px;
    justify-content: space-between;
    align-items: center;
  }
`;
