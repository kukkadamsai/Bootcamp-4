import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding} = this.props;

		const building = selectedBuilding.map(id => {
			const {code, name, coordinates, address} = data[id - 1];
			if (coordinates) {
				return (
					<ul>
						<li> CODE: {code} <br/> </li>
						<li> NAME: {name} <br/> </li>
						<li> COORDINATES: 
							<ul>
								<li> LATITUDE: {coordinates.latitude} <br/> </li>
								<li> LONGITUDE: {coordinates.longitude} <br/> </li>
							</ul>
						</li>
						<li> ADDRESS: {address} <br/> </li>
					</ul>
				)
			}
			else {
				return (
					<ul>
						<li> CODE: {code} <br/> </li>
						<li> NAME: {name} <br/> </li>
					</ul>
				)
			}
		})

		selectedBuilding.pop();

		return (
			<div>
				<b>Click on a name to view more information</b>
				{building}
			</div>
		);
	}
}
export default ViewBuilding;
