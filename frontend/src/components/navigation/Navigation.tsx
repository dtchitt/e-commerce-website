import { Outlet } from "react-router-dom";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

const Navigation = () => {
	return (
		<>
			<PrimaryNav />
			<SecondaryNav />
			<Outlet></Outlet>
		</>
	)
}

export default Navigation;