import { Task } from "../types";



interface Props {
    task: Task;
}

const TaskCard = ({task}: Props) => {
  return (
    <div className=" bg-main-bg-color p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500">{task.content}</div>
  )
}

export default TaskCard;
