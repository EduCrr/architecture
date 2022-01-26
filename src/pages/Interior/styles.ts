import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  display: flex;
  justify-content: space-between;
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
    width: 100%;
    overflow-x: hidden;
    height: 550px;

    img {
      height: 500px;
      width: 100%;
      object-fit: cover;
    }
    .slick-dots li button:before {
      margin-top: -30px !important;
      font-size: 20px;
      color: #dc9763;
      opacity: 1;
    }
    .slick-dots {
      width: 100% !important;
      display: flex;
    }
  }
`;
