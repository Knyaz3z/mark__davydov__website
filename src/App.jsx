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
import News040725 from "./pages/News/EveryNews/News040725/News040725";
import News030324 from "./pages/News/EveryNews/News030324/News030324";
import News010101 from "./pages/News/EveryNews/News010101/News010101";
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
                    <Route path="/news040725" element={<News040725/>}/>
                    <Route path="/news030324" element={<News030324/>}/>
                    <Route path="/news010101" element={<News010101/>}/>
                </Routes>

                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
