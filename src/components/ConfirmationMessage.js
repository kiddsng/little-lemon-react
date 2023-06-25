import { Text } from "@chakra-ui/react";

const ConfirmationMessage = ({ numOfDiners, date, time, name }) => {
	return (
		<Text>
			You would like to reserve a table for&nbsp;
			<span style={{ textDecoration: "underline" }}>{numOfDiners}</span>{" "}
			on&nbsp;
			<span style={{ textDecoration: "underline" }}>{date}</span>,&nbsp;
			<span style={{ textDecoration: "underline" }}>{time}</span> under the name
			"<span style={{ textDecoration: "underline" }}>{name}</span>".
		</Text>
	);
};

export default ConfirmationMessage;
