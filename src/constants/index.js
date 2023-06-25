import greeksalad from "../assets/greeksalad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemondessert from "../assets/lemondessert.jpg";

import restaurant from "../assets/restaurant.jpg";
import restaurantchef from "../assets/restaurantchef.jpg";
import restaurantfood from "../assets/restaurantfood.jpg";

export const navLinks = [
	{
		id: "home",
		title: "Home",
		url: "",
	},
	{
		id: "reservations",
		title: "Reservations",
		url: "booking",
	},
];

export const specials = [
	{
		id: "greek-salad",
		title: "Greek salad",
		description:
			"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		price: 12.99,
		image: greeksalad,
	},
	{
		id: "bruchetta",
		title: "Bruchetta",
		description:
			"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		price: 5.99,
		image: bruchetta,
	},
	{
		id: "lemon-dessert",
		title: "Lemon dessert",
		description:
			"This comes straight from grandma's recipe book, every last ingredients has been sourced and is as authentic as can be imagined.",
		price: 4.99,
		image: lemondessert,
	},
];

export const restaurantImages = [
	{
		title: "Restaurant",
		image: restaurant,
	},
	{
		title: "Restaurant Chef",
		image: restaurantchef,
	},
	{
		title: "Restaurant Food",
		image: restaurantfood,
	},
];

export const occasions = [
	{
		title: "None",
		value: "None",
	},
	{
		title: "Birthday",
		value: "Birthday",
	},
	{
		title: "Anniversary",
		value: "Anniversary",
	},
];

export const seatings = [
	{
		title: "Indoor",
		value: "Indoor",
	},
	{
		title: "Outdoor",
		value: "Outdoor",
	},
];