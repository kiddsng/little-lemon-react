import { useFormik } from "formik";
import * as Yup from "yup";
import {
	Button,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Radio,
	RadioGroup,
	Select,
	Stack,
	Textarea,
} from "@chakra-ui/react";

import BookingSlot from "./BookingSlot";
import UnavailableMessage from "./UnavailableMessage";
import ConfirmationMessage from "./ConfirmationMessage";

import { occasions, seatings } from "../constants";
import { generateUnavailableTimes } from "../utils";

const FormInput = ({ formik, label, required, ...props }) => {
	const field = formik.getFieldProps(props.name);
	const meta = formik.getFieldMeta(props.name);

	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<FormLabel>
				{label} {required && <span style={{ color: "red" }}>*</span>}
			</FormLabel>
			<Input size="lg" bg="white" color="black" {...field} {...props} />
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

const FormNumberInput = ({ formik, label, required, ...props }) => {
	const field = formik.getFieldProps(props.name);
	const meta = formik.getFieldMeta(props.name);

	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<FormLabel>
				{label} {required && <span style={{ color: "red" }}>*</span>}
			</FormLabel>
			<NumberInput size="lg" {...field} {...props}>
				<NumberInputField bg="white" color="black" />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

const FormSelect = ({ formik, label, required, ...props }) => {
	const field = formik.getFieldProps(props.name);
	const meta = formik.getFieldMeta(props.name);

	return (
		<FormControl isInvalid={meta.error && meta.touched}>
			<FormLabel>
				{label} {required && <span style={{ color: "red" }}>*</span>}
			</FormLabel>
			<Select size="lg" bg="white" color="black" {...field} {...props} />
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

const FormInputWrapper = ({ formik, label, required, name, children }) => {
	const meta = formik.getFieldMeta(name);

	return (
		<FormControl isInvalid={meta.error && meta.touched} mt={4}>
			<FormLabel>
				{label} {required && <span style={{ color: "red" }}>*</span>}
			</FormLabel>
			{children}
			<FormErrorMessage>{meta.error}</FormErrorMessage>
		</FormControl>
	);
};

const BookingForm = ({ times, dispatch, submitForm }) => {
	// Validation schema for the booking formik
	const bookingValidationSchema = Yup.object().shape({
		firstName: Yup.string()
			.min(2, "Must be more than 1 character")
			.required("Required"),
		lastName: Yup.string().optional(),
		email: Yup.string().email("Invalid email address").required("Required"),
		date: Yup.date()
			.min(new Date().toISOString().split("T")[0], "Invalid date")
			.required("Required"),
		time: Yup.string().required("Required"),
		seating: Yup.string()
			.oneOf(["Indoor", "Outdoor"], "Invalid seating")
			.required("Required"),
		numOfDiners: Yup.number()
			.positive()
			.integer()
			.min(1, "Must be greater than or equal to 1")
			.max(10, "Must be less than or equal to 10")
			.required("Required"),
		occasion: Yup.string()
			.oneOf(["None", "Birthday", "Anniversary"], "Invalid occasion")
			.required("Required"),
		comment: Yup.string().optional(),
	});

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			date: new Date().toISOString().split("T")[0],
			time: "",
			seating: "",
			numOfDiners: 1,
			occasion: "",
			comment: "",
		},
		validationSchema: bookingValidationSchema,
		onSubmit: (values) => {
			dispatch({
				type: "reserve",
				date: values.date,
				time: times.selectedTime,
			});
			submitForm(values);
		},
	});

	// For Chakra UI's RadioGroup and Radio components to work with Formik
	const { onChange, ...seatingProps } = formik.getFieldProps("seating");

	return (
		<form onSubmit={formik.handleSubmit}>
			<Heading as="h2" size="lg" fontWeight="medium" mt={4}>
				1. Table reservation
			</Heading>
			<UnavailableMessage
				times={generateUnavailableTimes(formik.values.date, times.bookedTimes)}
			/>
			<Stack
				direction={{ base: "column", md: "row" }}
				spacing={{ base: 4, md: 24 }}
				mt={4}
			>
				<FormInput
					formik={formik}
					label="Date"
					required
					name="date"
					type="date"
					onChange={(date) => {
						formik.setFieldValue("date", date.target.value);
						dispatch({
							type: "select-date",
							date: new Date(formik.values.date),
						});
					}}
				/>
				<FormSelect
					formik={formik}
					label="Time"
					required
					name="time"
					placeholder="Select time"
					onChange={(time) => {
						formik.setFieldValue("time", time.target.value);
						dispatch({
							type: "select-time",
							time: time.target.value,
						});
					}}
				>
					{times.availableTimes.map((availableTime) => (
						<BookingSlot
							key={availableTime}
							id={availableTime}
							availableTime={availableTime}
						/>
					))}
				</FormSelect>
			</Stack>
			<Stack
				direction={{ base: "column", md: "row" }}
				spacing={{ base: 4, md: 24 }}
				mt={4}
			>
				<FormNumberInput
					formik={formik}
					label="Number of Diners"
					required
					name="numOfDiners"
					min={1}
					max={10}
					allowMouseWheel
					onChange={(num) => formik.setFieldValue("numOfDiners", num)}
				/>
				<FormSelect
					formik={formik}
					label="Occasion"
					required
					name="occasion"
					placeholder="Select occasion"
				>
					{occasions.map((occasion) => (
						<option value={occasion.value}>{occasion.title}</option>
					))}
				</FormSelect>
			</Stack>
			<FormInputWrapper formik={formik} label="Seating" required name="seating">
				<RadioGroup {...seatingProps}>
					<Stack direction="row" spacing={10}>
						{seatings.map((seating) => (
							<Radio size="lg" value={seating.value} onChange={onChange}>
								{seating.title}
							</Radio>
						))}
					</Stack>
				</RadioGroup>
			</FormInputWrapper>
			<Heading as="h2" size="lg" fontWeight="medium" mt={10}>
				2. Personal details
			</Heading>
			<Stack
				direction={{ base: "column", md: "row" }}
				spacing={{ base: 4, md: 24 }}
				mt={4}
			>
				<FormInput
					formik={formik}
					label="First name"
					required
					name="firstName"
					type="text"
					placeholder="Enter first name"
				/>
				<FormInput
					formik={formik}
					label="Last name"
					name="lastName"
					type="text"
					placeholder="Enter last name"
				/>
			</Stack>
			<Stack
				direction={{ base: "column", md: "row" }}
				spacing={{ base: 4, md: 24 }}
				mt={4}
			>
				<FormInput
					formik={formik}
					label="Email"
					required
					name="email"
					type="email"
					placeholder="Enter email"
				/>
			</Stack>
			<Heading as="h2" size="lg" fontWeight="medium" mt={10}>
				3. Further requests
			</Heading>
			<FormInputWrapper formik={formik} label="Comment" name="comment">
				<Textarea
					id="comment"
					name="comment"
					size="lg"
					rows={6}
					bg="white"
					color="black"
					placeholder="Feel free to leave a comment for more information/instructions (e.g., Please provide facilities for one wheelchair-bound guest.)"
					{...formik.getFieldProps("comment")}
				/>
			</FormInputWrapper>
			<Flex direction="column" align="center" mt={10}>
				<ConfirmationMessage
					numOfDiners={formik.values.numOfDiners}
					date={formik.values.date}
					time={formik.values.time}
					name={formik.values.firstName + " " + formik.values.lastName}
				/>
				<Button
					type="submit"
					bg="#F4CE14"
					rounded="xl"
					fontSize="lg"
					p={6}
					mt={4}
				>
					Reserve a Table
				</Button>
			</Flex>
		</form>
	);
};

export default BookingForm;
