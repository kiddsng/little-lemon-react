import { Box, Heading, Text } from "@chakra-ui/react";

const ShortDescription = ({ subheading, text }) => {
	return (
		<Box color="white">
			<Heading as="h2" size="xl" fontWeight="medium" mt={-3}>
				{subheading}
			</Heading>
			<Text w="275px" fontSize="xl" lineHeight={6} mt={4}>
				{text}
			</Text>
		</Box>
	);
};

export default ShortDescription;
