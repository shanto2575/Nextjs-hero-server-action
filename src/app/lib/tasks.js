import task from '../../data/task.json'
export const getTask = async () => {
    return task
}
export const postTask = async (newTask) => {
    newTask.id = task.length + 1
    task.unshift(newTask)
    return { ok: true, messages: 'Task added successfuly' }
}
