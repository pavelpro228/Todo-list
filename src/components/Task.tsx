import '../styles/Task.css'
import { MdDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface TaskProps {
    title: string
    isCompleted: boolean
    deleteTask: () => void
    doneTask: () => void
    changeStyleTitle: () => void
    createIdTaskTitle: () => number
}

export const Task = ({ title, deleteTask, doneTask, changeStyleTitle, createIdTaskTitle }: TaskProps) => {
    const idTask = String(createIdTaskTitle());
    
    return (
        <div className="task mt-5 border py-3 rounded">
            <strong id={`title-${idTask}`}>{title}</strong>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div id={`done-${idTask}`} className='done-task'>
                    <MdDone onClick={() => {
                        doneTask();
                        changeStyleTitle();
                    }}/>
                </div>
                <MdDelete className='delete-task' onClick={deleteTask}/>
            </div>
        </div>
    )
}