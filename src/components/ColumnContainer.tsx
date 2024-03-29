import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

import { Column, Id, Task } from "../types";

import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";

interface Props {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  tasks: Task[];
}

const ColumnContainer = (props: Props) => {
  const { column, deleteColumn, updateColumn, createTask, tasks } = props;

  const [editmode, setEditmode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editmode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col opacity-40 border-2 border-rose-500"
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-column-bg w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditmode(true);
        }}
        className=" bg-main-bg-color text-md cursor-grab rounded-md rounded-b-none p-3 border-column-bg border-4 flex items-center justify-between"
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-column-bg px-2 py-1 text-sm rounded-full">
            0
          </div>
          {!editmode && column.title}
          {editmode && (
            <input
              className="bg-black focus:border-rose-500 border rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditmode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditmode(false);
              }}
            />
          )}
        </div>

        <button
          title="delete"
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="stroke-gray-500 hover:stroke-white hover:bg-column-bg rounded px-1 py-2"
        >
          <TrashIcon />
        </button>
      </div>

      {/* column task container */}
      <div className="flex flex-col flex-grow gap-4 p-2 overflow-x-hidden overflow-y-auto">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
          // <div key={task.id}>{task.content}</div>
        ))}
      </div>
      {/* column footer */}
      <button
        onClick={() => {
          createTask(column.id);
        }}
        className="flex gap-2 items-center border-2 border-column-bg rounded-md p-4 border-x-column-bg hover:bg-main-bg-color hover:text-rose-500 active:bg-black"
      >
        <PlusIcon />
        Add Task
      </button>
    </div>
  );
};

export default ColumnContainer;
