import * as C from "./styles";
export const Footer = () => {
  const year = new Date();
  return (
    <C.Container>
      <div className="logo">Architecture {year.getFullYear()}</div>
      <span>Feito por: Eduardo Carraro </span>
    </C.Container>
  );
};
