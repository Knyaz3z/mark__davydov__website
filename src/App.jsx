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
import News1 from "./pages/News/EveryNews/News1/News1";
import News2 from "./pages/News/EveryNews/News2/News2";
import News3 from "./pages/News/EveryNews/News3/News3";
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
                    <Route path="/news1" element={<News1/>}/>
                    <Route path="/news2" element={<News2/>}/>
                    <Route path="/news3" element={<News3/>}/>
                    <Route path="/news4" element={<News3/>}/>

                </Routes>

                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
