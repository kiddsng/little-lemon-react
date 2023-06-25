import { Box, Flex, Heading, Image } from "@chakra-ui/react";

import Nav from "./Nav";
import BookingForm from "./BookingForm";

import { restaurantImages } from "../constants";

const BookingPage = ({ state, dispatch, submitForm }) => {
	return (
		<>
			<Nav />
			<Box bg="#495E57" color="white">
				<Flex direction="column" w="100%" maxW="1080px" mx="auto" p={6}>
					<Heading as="h1" size="3xl" color="#F4CE14" fontWeight="medium">
						Reservations
					</Heading>
					<Heading as="h2" size="xl" fontWeight="medium" mt={-3}>
						Fill in the details below
					</Heading>
					<BookingForm
						times={state}
						dispatch={dispatch}
						submitForm={submitForm}
					/>
				</Flex>
			</Box>
			<Flex direction="row" wrap="wrap" justify="center" gap={10} p={[6, 16]}>
				{restaurantImages.map((restaurantImage) => (
					<Image
						key={restaurantImage.title}
						id={restaurantImage.title}
						src={restaurantImage.image}
						alt={restaurantImage.title}
						w="260px"
						h="240px"
						rounded="2xl"
						objectFit="cover"
					/>
				))}
			</Flex>
		</>
	);
};

export default BookingPage;
