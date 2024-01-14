import { Column } from "../types"

interface Props {
    column: Column
}

const ColumnContainer = (props: Props) => {

    const {column} = props
  return (
    <div className="bg-column-bg w-[350px] h-[500px] max-h-[500px]">{column.title}</div>
  )
}

export default ColumnContainer