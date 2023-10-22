import { Tab, Tabs } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default React.memo(function Navigation() {
	const location = useLocation();
	const currentTab = location?.pathname || '/';

	return (
		<Tabs value={currentTab}>
			<Tab label="Счётчик" value="/counter" to="/counter" component={Link} />
			<Tab label="Список людей" value="/profiles" to="/profiles" component={Link} />
			<Tab label="Два сообщения" value="/two-messages" to="/two-messages" component={Link} />
		</Tabs>
	);
});