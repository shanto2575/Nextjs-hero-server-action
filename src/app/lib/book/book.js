import book from '../../../data/book.json'
export const getbook=async()=>{
    return book;
}

export const postBook=async(newBook)=>{
    newBook.id=book.length+1
    book.push(newBook)
    return { ok : true , message:'add book in card'}
}