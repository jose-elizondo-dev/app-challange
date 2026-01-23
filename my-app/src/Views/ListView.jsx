import "./ListView.css";

const ListView = (props) => {
    const items= props.items
    return <div>
        <h1>Hi List view</h1>
        <section className="menu">
            <header className="menu__header">
                <h2 className="menu__title">Menu</h2>
                <p className="menu__subtitle">{items.length} items</p>
            </header>

            <div className="menu__grid">
                {items.map((item) => (
                    <article key={item.id} className="card">
                        <div className="card__top">
                            <h3 className="card__name">{item.name}</h3>
                            <span className="card__price">${item.price.toFixed(2)}</span>
                        </div>

                        <div className="card__meta">
                            <span className="pill">{item.category}</span>
                            <span className={`pill ${item.isAvailable ? "pill--ok" : "pill--off"}`}>
                                {item.isAvailable ? "Available" : "Not available"}
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    </div>
}

export default ListView