import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import noimg from '../assets/no-cover.png'

const BookDetailed = () => {
    const { bookId } = useParams()
    const [book, setBook] = useState()

    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_BASE_URL}/books/${bookId}`
        )
            .then(res => res.json())
            .then(data => {
                setBook(data);
                console.log(data);

            })
            .catch(error =>
                console.error('error when loading books :', error, 'without loading book data , cannot show details of the book')
            )
    }, [])
    return (
        <section className='section'>
            <div className='book-detail'>
                <h1>{book?.title}</h1>
                <img src={noimg} alt='cover image' />
                <p>Author - {book?.author}</p>
                <p>Genre - Fiction</p>
                <p>Language - English</p>
                <p>Published - {book?.year}</p>
                <p>This is a short summary of the book, describing its themes, story, and characters.</p>
            </div>

        </section>
    )
}

export default BookDetailed