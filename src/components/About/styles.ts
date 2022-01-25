import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  .text {
    text-align: center;
    max-width: 800px;
    margin: auto;
  }
`;
export const Gallery = styled.div`
  margin: 4rem 0px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0px;

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .imgHover:hover img {
    opacity: 0.3;
  }

  .imgHover:hover .middle {
    opacity: 1;
  }

  .text {
    border: 2px solid #dc9763;
    background-color: none;
    color: #dc9763;
    font-weight: bold;
    font-size: 16px;
    padding: 16px 32px;
    border-radius: 5px;
  }

  .text:hover {
    color: white;
  }

  .imgHover {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #1f2024;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease 0.5s;
  }
  a {
    color: #dc9763;
  }
  .item-0 {
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 3;
    grid-column-end: 3;
  }
  .item-1 {
    grid-row-start: 1;
    grid-column-start: 3;

    grid-row-end: 3;
    grid-column-end: 6;
  }
  .item-2 {
    grid-row-start: 1;
    grid-column-start: 6;

    grid-row-end: 5;
    grid-column-end: 8;
  }
  .item-3 {
    grid-row-start: 3;
    grid-column-start: 1;

    grid-row-end: 5;
    grid-column-end: 3;
  }
  .item-4 {
    grid-row-start: 3;
    grid-column-start: 3;

    grid-row-end: 5;
    grid-column-end: 6;
  }

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;
