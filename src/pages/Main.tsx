import '../styles/Main.css'
import { EnterTask } from '../components/EnterTask'
import { Task } from '../components/Task'
import { useState } from 'react'
import { ITask } from '../models/TaskModel'
import { tasks } from '../data/tasks'

export const Main = () => {
    const [tasksArr, setTaskArr] = useState<Array<ITask>>([...tasks]);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    const createIdTaskTitle = (id: number) => {
        return id;
    }

    const changeStyleTitle = (id: number) => {
        const idTask = String(id);

        const getIdTitle = document.getElementById(`title-${idTask}`);
        if (getIdTitle != undefined) {
            getIdTitle.style.color = 'grey';
            getIdTitle.style.textDecoration = 'line-through';
        }

        const getIdBtnDone = document.getElementById(`done-${idTask}`);

        if (getIdBtnDone != undefined) getIdBtnDone.style.display = 'none';
    }
    
    const getTasks = (task: ITask) => {
        const temp = [...tasksArr, task];
        setTaskArr(temp);
    }

    const deleteTask = (task: number) => {
        const temp = [...tasksArr];
        temp.splice(task, 1);
        setTaskArr(temp);

        const idTask = String(task);
        const getIdTaskContainer = document.getElementById(`task-${idTask}`);
        if (getIdTaskContainer != undefined) {
            getIdTaskContainer.style.animationName = 'deleteTask';
            getIdTaskContainer.style.animationDelay = "1s";
            getIdTaskContainer.style.animationFillMode = "forward";
        } 
    }

    const doneTask = (task: number, nameTask: ITask) => {
        setIsCompleted(true);
        const temp = [...tasksArr];
        temp.push(nameTask);
        
        setTaskArr(temp);

        temp.splice(task, 1);
        setTaskArr(temp);
    }

    return (
        <>
            <h1 className="site-name text-center py-4 my-0">Todo list</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <>
                    <EnterTask 
                        tasksArr={tasksArr} 
                        getTasks={getTasks}
                    />
                </>
            </div>
            <div style={{display:"flex", justifyContent: "center"}}>
                <div>
                    {tasksArr.length > 0 ? tasksArr.map((task, index) => (
                        <Task 
                            key={task.id} 
                            title={task.title} 
                            deleteTask={() => deleteTask(index)}
                            doneTask={() => doneTask(index, task)}
                            createIdTaskTitle={() => createIdTaskTitle(index)}
                            changeStyleTitle={() => changeStyleTitle(index)}
                            isCompleted={isCompleted}
                        />
                    ))
                    : <strong className='mt-5' style={{fontSize: "30px", color:"blue"}}>You have no tasks!</strong> 
                    }
                </div>
            </div>
        </>
    )
}