import "./App.css";
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import Client from "./pages/client.module";
import jsonData from "./data.json";
import { useState } from "react";

function App() {

    const [data, setData] = useState(jsonData);

    return (
        <BrowserRouter>
            <Client data={data}/>
        </BrowserRouter>
    );
}

export default App;
