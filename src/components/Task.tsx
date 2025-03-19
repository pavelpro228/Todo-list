import '../styles/Task.css'
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface TaskProps {
    title: string
    isCompleted: boolean
    deleteTask: () => void
    doneTask: () => void
    changeStyle: () => void
    createIdTask: () => number
    
}

export const Task = ({ title, isCompleted, deleteTask, doneTask, changeStyle, createIdTask }: TaskProps) => {
    const idTask = String(createIdTask());
    
    return (
        <div className="task mt-5 border py-3 rounded">
            <strong id={idTask}>{title}</strong>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className='done-task'>
                    <MdDone onClick={() => {
                        doneTask();
                        changeStyle();
                    }}/>
                </div>
                <MdDelete className='delete-task' onClick={deleteTask}/>
            </div>
        </div>
    )
}