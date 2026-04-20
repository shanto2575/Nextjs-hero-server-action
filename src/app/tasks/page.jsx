import React from 'react'
import { getTask } from '../lib/tasks'
import TasksCard from '../../Components/Tasks/TasksCard';
import AddTasks from '../../Components/Tasks/AddTasks';
import { createTasks } from '../lib/action';

const TaskPage = async() => {
    const tasks=await getTask();
    // console.log(tasks)
    return (
        <div>
            <h2>Task : {tasks.length} </h2>
            <div className='my-10'>
                <AddTasks createTasks={createTasks}></AddTasks>
            </div>
            <div className='grid grid-cols-3 gap-10 m-5'>
                {
                    tasks.map(task=><TasksCard key={task.id} task={task}></TasksCard>)
                }
            </div>
        </div>
    )
}

export default TaskPage
