import './News.scss'
import MainPageNews from "../../components/componentsHomePage/MainPageNews/MainPageNews";

function News() {

    return (
        <div className='news'>
            <MainPageNews isSlider={false}/>
        </div>
    )
}

export default News