import React from 'react'
import { useNavigate } from 'react-router-dom'
import nocoverimg from '../assets/no-cover.png'

const BookCard = ({ book }) => {
    const navigate = useNavigate()

    return (
        <article className="book-card" onClick={() => navigate(`/books/${book._id}`)}>
            <figure>
                <img src={nocoverimg} alt={`${book?.title} book cover`} />
            </figure>
            <section>
                <h3>{book?.title}</h3>
                <p><strong>Author:</strong> {book?.author}</p>
                <p><strong>Year:</strong> {book?.year}</p>
            </section>
        </article>
    )
}

export default BookCard