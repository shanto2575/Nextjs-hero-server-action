import { Input, Label, TextField, Select, ListBox, Button } from '@heroui/react'
import React from 'react'
import { addToTask } from '../../lib/action'


const NewTasks = () => {
    return (
        <div>
            <form action={addToTask} className="flex flex-col gap-4">
                <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your title" />
                </TextField>
                <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your task Description" />
                </TextField>

                <Select name="Priority" className="w-[256px]" placeholder="Select one">
                    <Label>Priority</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="low" textValue="Low">
                                Low
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="medium" textValue="Medium">
                                Medium
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="high" textValue="High">
                                High
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>


                <Select name="Status" className="w-[256px]" placeholder="Select one">
                    <Label>status</Label>
                    <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="Pending" textValue="Pending">
                                Pending
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Progress" textValue="Progress">
                                Progress
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Completed" textValue="Completed">
                                Completed
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Button slot={'close'} variant="secondary">
                    Cancel
                </Button>
                <Button type="submit">Tasks Submit</Button>
            </form>
        </div>
    )
}

export default NewTasks
