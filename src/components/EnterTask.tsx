import React, { ChangeEvent, useState } from 'react'
import '../styles/EnterTask.css'
import { Button } from 'react-bootstrap'
import { ITask } from '../models/TaskModel'
import { Error } from './Error'

interface EnterTaskProps {
  getTasks: (task: ITask) => void
  tasksArr: Array<ITask>
}

export const EnterTask = ({ getTasks }: EnterTaskProps) => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState('')

  const addTask = (event: React.FormEvent) => {
    const date = new Date()
    setError('')
    event.preventDefault()
    const tempTask: ITask = {
      id: +date,
      title: value,
    }

    if (value.trim().length === 0) {
      setError('Enter the task!')
      return
    }

    getTasks(tempTask)
    console.log(tempTask);
    
    setValue('')
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div style={{ display: 'block' }}>
      <form
        style={{ display: 'flex', alignItems: 'center' }}
        onSubmit={addTask}
      >
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="enter-task py-2 px-4"
        />
        <Button type="submit" variant="danger" className="py-2 px-4">
          Create task
        </Button>
      </form>
      {error && <Error error={error} />}
    </div>
  )
}
