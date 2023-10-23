import { useState } from "react";
import { ScaleLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function App() {
  return (
    <div className="sweet-loading" style={{textAlign:'center',scale:"5",marginTop:"300px"}}>
      <ScaleLoader color="#36d7b7"/>
    </div>
  );
}

export default App;