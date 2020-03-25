import React from "react";
import Header from "./Header"
import Footer from "./Footer";
import Content from "./Content";


function App() {
  return (
    <div className="main">
      <div className="container-fluid px-0">
        <Header/>

        {/*app goes in here*/}
        <div className="container pt-3">
          <Content/>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
