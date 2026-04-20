import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createTasks = async (formData) => {
    'use server'

    // const title=formData.get('title')
    // const description=formData.get('description')
    // const Priority=formData.get('Priority')
    // const Status=formData.get('Status')
    // const message=formData.get('message')

    // const newtask={title,description,Priority,Status,message}
    const newtask = Object.fromEntries(formData);
    console.log('adding a task with name: ', newtask)

    const res=await postTask(newtask);
    if(res.ok){
        revalidatePath('/task')
    }
    return res;
} 