import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  .about {
    text-align: center;
    max-width: 800px;
    margin: auto;
  }
`;
export const Gallery = styled.div`
  margin: 5rem 0px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 0px;

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
