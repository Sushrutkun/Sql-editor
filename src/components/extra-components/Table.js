import { Virtuoso } from "react-virtuoso"
import { getTableHeadFromData, getTableRowsFromData } from "../../assets/data/tableHelpers"

const Table = (props) => {
  return (
    <div className='query-table'>
      {props.result.length > 0 ? (
        <Virtuoso
          data={props.result}
          itemContent={(index) => (
            <table>
              <thead>
                {getTableHeadFromData(props.result)}
              </thead>
              {getTableRowsFromData(props.result)}
            </table>
          )}
        />
      ) : null}
    </div>
  )
}

export default Table
// import { Virtuoso } from 'react-virtuoso';
// import { getTableHeadFromData, getTableRowsFromData } from "../../assets/data/tableHelpers";

// const Table = (props) => {
//   return (
//     <div className='query-table'>
//       {props.result.length > 0 ? (
//         <Virtuoso
//           data={props.result}
//           itemContent={(index) => (
//             <div key={index}>{getTableRowsFromData(props.result)[index]}</div>
//           )}
//         />
//       ) : null}
//     </div>
//   );
// }

// export default Table;
