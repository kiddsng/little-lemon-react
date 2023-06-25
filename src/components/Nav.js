import { NavLink } from "react-router-dom";
import { Flex, Image, Stack } from "@chakra-ui/react";

import logo from "../logo.svg";
import { navLinks } from "../constants";

const Nav = () => {
	return (
		<nav>
			<Flex
				direction={{ base: "column", md: "row" }}
				w="100%"
				maxW="1080px"
				justify="space-between"
				align="center"
				gap={3}
				mx="auto"
				p={6}
			>
				<Image src={logo} alt="Logo" ignoreFallback />
				<Stack
					direction={{ base: "column", md: "row" }}
					spacing={{ base: 4, md: 8 }}
				>
					{navLinks.map((navLink) => (
						<NavLink
							key={navLink.id}
							id={navLink.id}
							to={`/${navLink.url}`}
							style={({ isActive }) => {
								return {
									color: isActive ? "white" : "black",
									backgroundColor: isActive ? "#495E57" : "white",
									fontWeight: isActive ? "bold" : "medium",
									borderRadius: "12px",
									padding: "5px 12px",
                                    textAlign: "center",
								};
							}}
						>
							{navLink.title}
						</NavLink>
					))}
				</Stack>
			</Flex>
		</nav>
	);
};

export default Nav;
