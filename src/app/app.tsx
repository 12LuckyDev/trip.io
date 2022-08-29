import "./app.scss";
import { TripForm } from "./components/trip-form/trip-form";
import Container from "react-bootstrap/Container";

function App() {
	return (
		<Container fluid>
			<TripForm />
		</Container>
	);
}

export default App;
