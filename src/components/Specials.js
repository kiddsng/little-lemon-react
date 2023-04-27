import Bruchetta from "../assets/bruchetta.svg";

const specials = [
    {
        id: "greek-salad",
        title: "Greek salad",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        price: 12.99,
        image: require("../assets/greek salad.jpg")
    },
    {
        id: "bruchetta",
        title: "Bruchetta",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: 5.99,
        image: Bruchetta
    },
    {
        id: "lemon-dessert",
        title: "Lemon dessert",
        description: "This comes straight from grandma's recipe book, every last ingredients has been sourced and is as authentic as can be imagined.",
        price: 4.99,
        image: require("../assets/lemon dessert.jpg")
    },
]

const Specials = () => {
    return (
        <main>
           <section className="Main-header">
                <h1>This week's specials!</h1>
                <button className="Button">Online Menu</button>
           </section>
           <section className="Main-menu">
                {specials.map((special, index) => {
                    return (
                        <div key={special.id} id={special.id} className="Food-item">
                            <img src={special.image} alt={special.title} />
                            <div className="Food-item-header">
                                <h3 className="Food-item-name">{special.title}</h3>
                                <h3 className="Food-item-price">${special.price}</h3>
                            </div>
                            <p>{special.description}</p>
                            <strong>Order a delivery</strong>
                        </div>
                    )
                })}
           </section>
        </main>
    );
};

export default Specials;