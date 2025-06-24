import './ActivityBox.scss'

function ActivityBox({link, title, backDescription}) {
    return (
        <div className="main__activity-card container">
            <div className="main__activity-inner">
                <div className='main__activity-front'>
                    <img src={link} alt="" className="main__activity-img"/>
                    <p className="main__activity-text">{title}</p>
                </div>
                <div className="main__activity-back">
                    <p className="main__activity-text-back">
                        {backDescription}
                    </p>
                </div>
            </div>
        </div>


    )
}

export default ActivityBox;