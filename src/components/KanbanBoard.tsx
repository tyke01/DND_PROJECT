import PlusIcon from "../icons/PlusIcon";

import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

import { Column, Id } from "../types";
import ColumnContainer from "./ColumnContainer";

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  const columnsId = 
  // console.log(columns);

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <DndContext>
        <div className="m-auto flex gap-4">
          <div className="flex gap-2">
           <SortableContext items={columnsId}>
             
             {columns.map((column) => (
               <ColumnContainer
                 column={column}
                 key={column.id}
                 deleteColumn={deleteColumn}
               />
             ))}
           </SortableContext>
          </div>
          <button
            className="h-[60px] w-[350px] min-w-[350px] cursor-pointer bg-main-bg-color border-2 border-column-bg p-4 ring-rose-500 hover:ring-2 flex gap-2"
            onClick={() => {
              createNewColumn();
            }}
          >
            <PlusIcon />
            Add Column
          </button>
        </div>
      </DndContext>
    </div>
  );

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }
  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((column) => column.id !== id);
    setColumns(filteredColumns);
  }
};

function generateId() {
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;
