import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='section'>
            <h1>Something went wrong 😓</h1>
            <p>We couldn't load the page you were looking for.</p>

            {error && (
                <pre>
                    <strong>{error.status}</strong> – {error.statusText || error.message}
                </pre>
            )}

            <Link href="/">← Back to Home</Link>
        </div>
    );
};

export default ErrorPage