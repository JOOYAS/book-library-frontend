import React, { useEffect, useState } from 'react'
import BookCard from '../components/bookCard'

const Home = () => {
    const [books, setBooks] = useState()
    useEffect(() => {
        fetch(
            `${import.meta.env.VITE_API_BASE_URL}/books`
        )
            .then(res => res.json())
            .then(data => {
                setBooks(data);
                console.log(data);

            })
            .catch(error =>
                console.error('error when loading books :', error, 'without loading books data , cannot show any books')
            )
    }, [])


    return (
        <>
            <section className='hero-section'>
                <h1 className='heading'>Welcome to Book Library</h1>
                <p>Browse your favorite books by category, title, or author.</p>
            </section>

            <section className='section'>
                <h2 className='heading'>Featured Books</h2>
                <ul className='book-grid'>
                    {books?.map(book => (
                        <li key={book?._id}>

                            <BookCard book={book} />
                        </li>
                    ))}
                </ul>

            </section>
        </>
    )
}

export default Home