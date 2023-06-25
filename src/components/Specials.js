import {
	Card,
	CardBody,
	CardFooter,
	Flex,
	Heading,
	Image,
	Text,
} from "@chakra-ui/react";

import { specials } from "../constants";

const Specials = () => {
	return (
		<section>
			<Flex
				direction="column"
				w="100%"
				maxW="1080px"
				mx="auto"
				my={{ base: 6, md: 24 }}
				px={6}
			>
				<Heading as="h2" size="3xl" fontWeight="medium">
					This week's specials!
				</Heading>
				<Flex
					direction={["column", "row"]}
					wrap="wrap"
					justify={["center", "space-between"]}
					align={["center", "stretch"]}
					gap={4}
					mt={4}
				>
					{specials.map((special) => (
						<Card
							key={special.id}
							id={special.id}
							w="330px"
							h="540px"
							rounded="2xl"
						>
							<Image
								src={special.image}
								alt={special.title}
								h="240px"
								fit="cover"
								align="center"
								roundedTop="2xl"
								ignoreFallback
							/>
							<CardBody>
								<Flex direction="row" justify="space-between" align="center">
									<Heading as="h3" size="lg">
										{special.title}
									</Heading>
									<Text color="#F4CE14" fontSize="lg">
										${special.price}
									</Text>
								</Flex>
								<Text mt={6}>{special.description}</Text>
							</CardBody>
							<CardFooter>
								<strong>Order a delivery</strong>
							</CardFooter>
						</Card>
					))}
				</Flex>
			</Flex>
		</section>
	);
};

export default Specials;
