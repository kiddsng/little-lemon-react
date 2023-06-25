import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

import ShortDescription from "./ShortDescription";

const CallToAction = () => {
	const subheading = "Chicago";
	const text =
		"We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";

	return (
		<header>
			<Box bgColor="#495E57">
				<Flex
					direction={["column", "row"]}
					w="100%"
					maxW="1080px"
					mx="auto"
					pos="relative"
                    p={6}
				>
					<Box>
						<Heading as="h1" size="3xl" color="#F4CE14" fontWeight="medium">
							Little Lemon
						</Heading>
						<ShortDescription subheading={subheading} text={text} />
						<Link to="/booking">
							<Button
								size="sm"
								bg="#F4CE14"
								rounded="xl"
								fontSize="lg"
								p={6}
								ml={2}
								my={5}
							>
								Reserve a Table
							</Button>
						</Link>
					</Box>
					<Image
						src={require("../assets/restaurantfood.jpg")}
						alt="Little Lemon"
						w="300px"
						h="380px"
						rounded="2xl"
						pos="absolute"
						right={0}
						top={5}
						hideBelow="md"
                        ignoreFallback
					/>
				</Flex>
			</Box>
		</header>
	);
};

export default CallToAction;
