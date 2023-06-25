import { Text } from "@chakra-ui/react";

const UnavailableMessage = ({ times }) => {
    return (
        <Text color="red" fontSize="sm" mt={4}>Unavailable timings: {times}</Text>
    )
}

export default UnavailableMessage;