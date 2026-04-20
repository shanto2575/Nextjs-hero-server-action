import { Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react'

const TasksCard = ({ task }) => {
    // console.log(task)
    const { title, description, tags } = task;
    return (
        <Card variant='parimary' className="border p-5 rounded-2xl">
            <Card.Header>
                <Card.Title>{title}</Card.Title>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Header>
            <Card.Footer className='flex gap-5'>
                {
                    tags.map((tag,index)=><div key={index} >
                        {tag}
                    </div>)
                }
            </Card.Footer>
        </Card>
    )
}

export default TasksCard