import React from 'react'
import { getbook } from '../lib/book/book'
import BookCard from '../../Components/book/BookCard'
import AddABook from '../../Components/book/AddABook'
import { createBook } from '../lib/book/action'

const BooksPage =async () => {
    const book=await getbook()
    return (
        <div className='space-y-5'>
            <h2>book  : {book.length}</h2>
            <AddABook createBook={createBook}></AddABook>
            <div className='grid grid-cols-3 gap-10 m-5'>
                {
                    book.map(book=><BookCard key={book.id} book={book}></BookCard>)
                }
            </div>
        </div>
    )
}

export default BooksPage