import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomePage from "./pages/HomePage.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Info from "./components/Info.jsx";

function App() {
    return (
        <Router>
            <HeaderComponent/>
            <Info/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}

export default App
