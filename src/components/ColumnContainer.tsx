import TrashIcon from "../icons/TrashIcon";
import { Column, Id } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn } = props;
  return (
    <div className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      <div className=" bg-main-bg-color text-md cursor-grab rounded-md rounded-b-none p-3 border-column-bg border-4 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-column-bg px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>

        <button title="delete" onClick={() => {
          deleteColumn(column.id);
        }} className="stroke-gray-500 hover:stroke-white hover:bg-column-bg rounded px-1 py-2">
            <TrashIcon />
        </button>

      </div>

      {/* column task container */}
      <div className="flex flex-grow">Content</div>
      {/* column footer */}
      <div className="">Footer</div>
    </div>
  );
};

export default ColumnContainer;
