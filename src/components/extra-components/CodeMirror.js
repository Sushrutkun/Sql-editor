import EditorPanel from "./EditorPanel";
import { useContext } from "react";
import MainContext from "../../MainContext";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/mode-sql";

const Editor = () => {
  const { query, setQuery } = useContext(MainContext);

  return (
    <div className='editor'>
      <div className='row'style={{display:'flex',flexWrap:'nowrap'}}>
        <div className='col-md-8 col-lg-9 col-xl-10 col-12 no-gutters'style={{width:'500px'}}>
            <AceEditor
            mode="sql"
            theme="monokai"
            name="Editor"
            value={query}
            onChange={(value) => setQuery(value)}
            editorProps={{ $blockScrolling: true }}
          />
          <p style={{ fontSize: "0.8rem" }} className='text-2 pt-3 mb-0'>
            <strong>NOTE: </strong>Click on a Previously Saved Query to Begin.
          </p>
        </div>
        <div className='col-md-4 col-lg-3 col-xl-2' style={{width:'400px',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <EditorPanel />
        </div>
      </div>
    </div>
  );
};

export default Editor;