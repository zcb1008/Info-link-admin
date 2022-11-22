import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const withRouter = (Component: typeof React.Component) => {
	function ComponentWithRouterProp(props: any) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} location={location} navigate={navigate} params={params} />;
	}

	return ComponentWithRouterProp;
};
