import React from "react";
import Navbar  from "./Navbar";


function App() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
  
    return (
      <div className="App">
        <Navbar/>
       {/*
       <p>{!data ? "Loading..." : data}</p>*/}
      </div>
    );
  }
  export default App;





