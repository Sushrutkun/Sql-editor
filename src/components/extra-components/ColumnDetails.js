import { Virtuoso } from "react-virtuoso"
import { queryDataAlt as queryData } from "../../assets/data/data"
import { getTableColumns } from "../../assets/data/tableHelpers"

const ColumnDetails = () => {
  return (
    <Virtuoso
      data={queryData}
      itemContent={(index) => (
        <div>
          <table>
            {getTableColumns(queryData)}
          </table>
        </div>
      )}
    />

  )
}

export default ColumnDetails