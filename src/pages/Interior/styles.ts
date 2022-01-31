import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  .left-side {
    height: 85vh;
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
    width: 60%;
    overflow: hidden;
    height: 100vh;
    top: 0;
    right: 0;
    position: absolute;

    img {
      height: 100vh;
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

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    height: 0vh !important;
    .left-side {
      width: 100%;
      height: 100vh;
      padding: 0px 10px;
      margin-bottom: 20px;
    }
    .right-side {
      height: 100vh !important;
      width: 100%;
      position: relative !important;
      img {
        height: 400px;
      }
      .slick-dots li button:before {
        margin-top: -60px !important;
      }
    }
  }
  @media (max-width: 768px) {
    .right-side {
    }
  }
  @media (max-width: 365px) {
    .left-side {
      .info {
        flex-direction: column;
      }
    }
  }
`;
