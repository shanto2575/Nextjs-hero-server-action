import { Button, Input, Label, TextField } from '@heroui/react'
import React from 'react'
import { NewBook } from '../../lib/book/action'

const page = () => {
    return (
        <div className=''>
            <div className='flex items-center justify-center flex-col gap-5 space-y-4 m-4'>
                <h2>ADD NEW BOOK</h2>
                <form action={NewBook} className="flex flex-col gap-4">
                    <TextField className="w-full" name="title" type="text">
                        <Label>Tittle</Label>
                        <Input placeholder="Enter your Title" />
                    </TextField>
                    <TextField className="w-full" name="author" type="text">
                        <Label>Author</Label>
                        <Input placeholder="Enter your Author Name" />
                    </TextField>
                    <TextField className="w-full" name="category" type="text">
                        <Label>Category</Label>
                        <Input placeholder="Enter your Category" />
                    </TextField>
                    <TextField className="w-full" name="price">
                        <Label>Price</Label>
                        <Input placeholder="Enter your Book Price" />
                    </TextField>

                    <Button slot="close" variant="secondary">
                        Cancel
                    </Button>
                    <Button slot="close" type="submit">create</Button>
                </form>
            </div>
        </div>
    )
}

export default page
