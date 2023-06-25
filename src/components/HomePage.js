import Nav from "./Nav";
import CallToAction from "./CallToAction";
import Specials from "./Specials";

const HomePage = () => {
	return (
		<>
			<Nav />
			<CallToAction />
			<main>
				<Specials />
			</main>
		</>
	);
};

export default HomePage;
