import { revalidatePath } from "next/cache"
import { postBook } from "./book"
import { redirect } from "next/navigation"

export const createBook=async(FormData)=>{
    'use server'
    const newBook=Object.fromEntries(FormData)
    console.log(newBook)

    const res=await postBook(newBook)
    if(res.ok){
        revalidatePath('/book')
    }
    return res;
}

export const NewBook=async(FormData)=>{
    'use server'
    const NEWBOOK=Object.fromEntries(FormData)
    console.log(NEWBOOK)

    const res=await postBook(NEWBOOK)
    if(res.ok){
        revalidatePath('/book')
        redirect('/book')
    }
    return res;
}