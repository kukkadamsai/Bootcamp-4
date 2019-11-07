import React from 'react';

class Search extends React.Component {
	filterUpdate() {
		const value = this.myValue.value;
        this.props.filterUpdate(value)
	}
	render() {
		return (
			<form>
				<input
					type="text"
					ref={(value) => {this.myValue = value}}
					placeholder="Type to filter..."
					onChange={this.filterUpdate.bind(this)}
				/>
			</form>
		);
	}
}
export default Search;