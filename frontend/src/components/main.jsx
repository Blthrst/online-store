import "../styles/Home.css"

export function Main() {
    return (
        <div className="home">
            <header>Welcome to our shop</header>
            <p className="question">What I can do here?</p>
            <p className="answer">
                Here you can add clothes to your cart and create your own clothes in the editor to put them up for sale later
            </p>
            <p className="question">Как я могу сообщить о найденных багах?</p>
            <p className="answer">О найденных багах можно сообщить мне в телеграм, но мне будет как-то похуй.</p>
        </div>
    )
}