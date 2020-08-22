import React from "react";
import Lists from "./sub/index";
import AddItem from "./sub/add";
import EditItem from "./sub/edit";
import "../styles.css";

import { Link, Route, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <div className="nav-wrapper blue lighten-3">
              <Link to="/" className="brand-logo right title">
                Post
              </Link>
              <ul className="left">
                <li>
                  <Link to="/">
                    <button className="btn purple">
                      View List
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/add">
                    <button className="btn">Add Item</button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <br />
          <Route path="/" exact component={Lists} />
          <Route path="/add" component={AddItem} />
          <Route path="/edit/:id" component={EditItem} />
          <br />
          <br />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
