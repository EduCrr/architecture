import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  align-items: top;
  justify-content: space-between;
  height: 90vh;
  .left-side {
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 38px;
      margin-bottom: 20px;
    }
    .info {
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      margin-bottom: 20px;
      span,
      h3 {
        text-align: left !important;
      }
      .item {
        text-align: left !important;
        flex-direction: column;
        display: flex;
        align-items: flex-start;
      }
    }
  }
  .right-side {
    flex: 1;
    height: 90vh;
    width: 100%;
    overflow-x: hidden;
    img {
      height: 500px;
      width: 100%;
      object-fit: cover;
    }
  }
`;
