import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import Nav from "./Nav";
import ShortDescription from "./ShortDescription";

const ConfirmedBooking = () => {
	const subheading = "Your reservation is confirmed";
	const text = "Thank you for reserving a table with us! We will see you soon.";

	return (
		<>
			<Nav />
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
								Reservations
							</Heading>
							<ShortDescription subheading={subheading} text={text} />
							<Link to="/">
								<Button
									size="sm"
									bg="#F4CE14"
									rounded="xl"
									fontSize="lg"
									p={6}
									ml={2}
									my={5}
								>
									Back to Home
								</Button>
							</Link>
						</Box>
					</Flex>
				</Box>
			</header>
		</>
	);
};

export default ConfirmedBooking;
