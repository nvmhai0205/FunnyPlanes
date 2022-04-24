import "./App.css";
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import Client from "./pages/client.module";
import Rank from "./pages/ranking/ranking"
import DataProvider from "./context/DataProvider";

function App() {
    return (
        <BrowserRouter>
            <DataProvider>
                <Client />
            </DataProvider>
        </BrowserRouter>
    );
}

export default App;
