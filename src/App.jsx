import './style/null.css'
import './style/global.css'
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Gallery from "./pages/Gallery/Gallery";
import Poem from "./pages/Poem/Poem";
import Contacts from "./pages/Contacts/Contacts";
function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/poem" element={<Poem/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
