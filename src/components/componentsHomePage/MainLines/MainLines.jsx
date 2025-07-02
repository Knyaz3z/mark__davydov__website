import { useState, useEffect } from 'react';
import './MainLines.scss';

function MainLines() {
    const connections = [
        {
            source: "Учись",
            target: "Всегда чему-то новому, достигай новых вершин",
            color: "#9500C5"
        },
        {
            source: "Играй",
            target: "С теми, кого действительно ценишь",
            color: "#FF6B00"
        },
        {
            source: "Твори",
            target: "Чтобы всегда оставаться в тонусе",
            color: "#00C4CC"
        }
    ];

    const [activeConnection, setActiveConnection] = useState(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setAnimated(true);
    }, []);

    return (
        <div className="game-board">
            <div className="game-path">
                {connections.map((item, index) => (
                    <div
                        key={index}
                        className={`game-card ${animated ? 'animated' : ''}`}
                        style={{ '--delay': index * 0.2 + 's', '--card-color': item.color }}
                        onMouseEnter={() => setActiveConnection(index)}
                        onMouseLeave={() => setActiveConnection(null)}
                    >
                        <div className="game-card__header">
                            <h3>{item.source}</h3>
                        </div>
                        <div className={`game-card__content ${activeConnection === index ? 'active' : ''}`}>
                            <p>{item.target}</p>
                        </div>
                        <div className="game-card__connector"></div>
                    </div>
                ))}
            </div>
            <div className="game-pieces">
                {connections.map((_, index) => (
                    <div
                        key={index}
                        className={`game-piece ${activeConnection === index ? 'active' : ''}`}
                        style={{ '--piece-color': connections[index].color }}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainLines;