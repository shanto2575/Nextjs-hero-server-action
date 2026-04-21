import { BookOpen } from '@gravity-ui/icons';
import { Card, Link } from "@heroui/react";

const BookCard = ({ book }) => {
    // console.log(book)
    const { title, price, category, author } = book
    return (
        <div>
            <Card className="w-[400px]">
                <BookOpen aria-label="Dollar sign icon" className="text-primary size-6" role="img" />
                <Card.Header className="text-center space-y-3">
                    <Card.Title>Title : {title}!</Card.Title>
                    <p>Author : {author}</p>
                    <p>Category : {category}</p>
                    <p>Price  : {price}</p>
                </Card.Header>
                <Card.Footer className="flex justify-center items-center">
                    <Link
                        aria-label="Go to Acme Creator Hub (opens in new tab)"
                        href=" "
                        rel="noopener noreferrer"
                        target=""
                    >
                        Buy Now
                        <Link.Icon aria-hidden="true" />
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default BookCard
