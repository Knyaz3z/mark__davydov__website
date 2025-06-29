import './MainLines.scss'

function MainLines() {
    const connections = [
        {
            source: "Учись",
            target: "Всегда чему-то новому, достигай новых вершин"
        },
        {
            source: "Играй",
            target: "С теми, кого действительно ценишь"
        },
        {
            source: "Твори",
            target: "Чтобы всегда оставаться в тонусе"
        }
    ];

    return (
        <div className="main__box">
            {connections.map((item, index) => (
                <div key={index} className="main__box-group">
                    <div className="main__box-source">
                        <h5>{item.source}</h5>
                    </div>
                    <div className="main__box-target">
                        <p>{item.target}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainLines