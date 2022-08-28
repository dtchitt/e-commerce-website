import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

type SearchBarProps = {
	bsStyle: string;
};

const SearchBar = (props: SearchBarProps): JSX.Element => {
	return (
		<Form className={props.bsStyle}>
			<Form.Control
				type="search"
				placeholder="Search"
				className="me-0 rounded-0 rounded-start border-0 shadow-none"
				aria-label="Search"
			/>
			<Button
				variant="light"
				className="rounded-0 rounded-end shadow-none"
			>
				Search
			</Button>
		</Form>
	);
};

export default SearchBar;
