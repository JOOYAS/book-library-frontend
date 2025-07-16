import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Books from "./pages/books";
import BookDetailed from "./pages/book_detailed";
import LayoutUI from "./components/layout_ui";
import ErrorPage from "./pages/errorPage";
import About from "./pages/about";
import PrivateRoute from "./components/private_routes";
import UserAccount from "./pages/account";

let router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <LayoutUI />
            </PrivateRoute>
        ),
        // loader: loadRootData,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/books/:bookId",
                element: <BookDetailed />
            },
            {
                path: "/about",
                element: <About />
            }
        ],
        errorElement: <ErrorPage />
    },
    {
        path: "/user",
        element: <LayoutUI />,
        children: [
            {
                path: "/user/signup",
                element: <SignUp />
            },
            {
                path: "/user/login",
                element: <Login />
            },
            {
                path: "/user/account",
                element: <UserAccount />
            }
        ],
        errorElement: <ErrorPage />
    }
]);

ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
);
