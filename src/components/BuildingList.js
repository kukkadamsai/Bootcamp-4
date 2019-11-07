import React from 'react';

class BuilingList extends React.Component {
	render() {
		const {data, filterText, selectedUpdate, removeUpdate} = this.props;

		const buildingList = data
		.filter(directory => {
			return directory.code.toLowerCase().indexOf(filterText.toLowerCase()) >= 0 ||
			directory.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
		})
		.map(directory => {
			return (
				<tr
				key={directory.id}>
					<th className={'code'} onClick={() => removeUpdate(directory.code)} >{directory.code} </th>
					<th className={'name'} onClick={() => selectedUpdate(directory.id)} > {directory.name} </th>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
