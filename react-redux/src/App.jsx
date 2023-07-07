import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Routes, Route} from 'react-router-dom';
import Info from "./components/Info.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    return (
        <div>
            <HeaderComponent/>
            <Info/>
            <Routes>
                <Route path={'*'} element={<NotFound/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </div>
    )
}

export default App
