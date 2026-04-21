import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import Link from "next/link";

const AddABook = ({ createBook }) => {
    return (
        <Modal>
            <Button variant="secondary">Add A Book</Button>
            <div>
                <Link href={'/book/new'}>
                <Button>NEW BOOK</Button>
                </Link>
            </div>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Create Book Card</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and well get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createBook} className="flex flex-col gap-4">
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
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit">create</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}

export default AddABook