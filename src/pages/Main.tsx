import '../styles/Main.css'
import { EnterTask } from '../components/EnterTask'
import { Task } from '../components/Task'
import { useState } from 'react'
import { ITask } from '../models/TaskModel'
import { tasks } from '../data/tasks'

export const Main = () => {
    const [tasksArr, setTaskArr] = useState<Array<ITask>>([...tasks]);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);

    const createIdTask = (id: number) => {        
        return id;
    }

    const changeStyle = (id: number) => {
        const idTask = String(id);

        const getId = document.getElementById(idTask);

        if (getId != undefined) {
            getId.style.color = 'grey';
            getId.style.textDecoration = 'line-through'
        }
    }
    
    const getTasks = (task: ITask) => {
        const temp = [...tasksArr, task];
        setTaskArr(temp);
    }

    const deleteTask = (task: number) => {
        const temp = [...tasksArr];
        temp.splice(task, 1);
        setTaskArr(temp);
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
                            createIdTask={() => createIdTask(index)}
                            changeStyle={() => changeStyle(index)}
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