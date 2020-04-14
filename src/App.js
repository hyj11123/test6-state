import React from "react";
import "./styles/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <div className="header">
          <li>친구</li>
          <input tpye="button" value="이름검색" />
        </div>
        <div className="content">
          <input type="button" value="이름" />
        </div>
      </div>
    );
  }
}

export default App;
