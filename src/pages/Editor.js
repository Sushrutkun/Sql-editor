import { useMemo, useState } from "react";
import "./Editor.css";
import SideBar from "../components/extra-components/SideBar";
import CodeMirror from "../components/extra-components/CodeMirror";
import Output from "../components/extra-components/Output";
import MainContext from "../MainContext";
import "bootstrap/dist/css/bootstrap.min.css";

function Editor() {
  const [query, setQuery] = useState("SELECT orderID,customerID,employeeID,orderDate from ShipData");
  const [queryHistory, setQueryHistory] = useState({
    saved: ["SELECT orderID,customerID,employeeID,orderDate from ShipData","Select * from orders","SELECT * FROM internetData;", "SELECT id, first_name, last_name FROM internetData;"],
    history: ["Select * from orders"],
    outputData: [],
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryHistory, setQueryHistory }),
    [query, queryHistory]
  );

  return (
    <div className='App-Editor'>
      <MainContext.Provider value={contextValue}>
        <div className='content'>
          <div className='row'>
            <div className='col-md-3'>
              <SideBar />
            </div>
            <div className='col-md-9 col-12 editor-area'>
              <CodeMirror />
              <Output />
            </div>
          </div>
        </div>
      </MainContext.Provider>
    </div>
  );
}

export default Editor;