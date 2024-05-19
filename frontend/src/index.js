import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./context/globalContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import "./index.scss";
import Signup from "./Components/Signup";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/main",
		element: <App />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<GlobalProvider>
			<RouterProvider router={router} />
		</GlobalProvider>
	</React.StrictMode>
);
