import { Link } from "react-router-dom";
import * as C from "./styles";
export const About = () => {
  return (
    <C.Container>
      <div className="text">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <C.Gallery>
        <div className="item-0">
          <div className="imgHover">
            <img src="https://images.unsplash.com/photo-1579518919756-df28bdaaeab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />

            <div className="middle">
              <div className="text">
                <Link to="/houses">Veja mais</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item-1">
          <div className="imgHover">
            <img src="https://images.unsplash.com/photo-1579518919756-df28bdaaeab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <div className="middle">
              <div className="text">
                <Link to="/houses">Veja mais</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item-2">
          <div className="imgHover">
            <img src="https://images.unsplash.com/photo-1579518919756-df28bdaaeab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <div className="middle">
              <div className="text">
                <Link to="/houses">Veja mais</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item-3">
          <div className="imgHover">
            <img src="https://images.unsplash.com/photo-1579518919756-df28bdaaeab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <div className="middle">
              <div className="text">
                <Link to="/houses">Veja mais</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="item-4">
          <div className="imgHover">
            <img src="https://images.unsplash.com/photo-1579518919756-df28bdaaeab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
            <div className="middle">
              <div className="text">
                <Link to="/houses">Veja mais</Link>
              </div>
            </div>
          </div>
        </div>
      </C.Gallery>
    </C.Container>
  );
};
