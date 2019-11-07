import React from 'react';

class RemoveBuilding extends React.Component {
    update() {
        this.props.removeUpdate(this.code.value);
    }

	render() {
		return (
			<div>
				<b>Click on a code to remove a building or type the code to remove it</b>
                <form>
					<label className="field a-field a-field_a1">
						<input className="field__input a-field__input" placeholder="Enter code..." ref={(value) => {this.code = value}}/>
						<span className="a-field__label-wrap">
							<span className="a-field__label">Code</span>
						</span>
					</label>

					<br/>
					<br/>
					
					<th className={'submit'} onClick = {this.update.bind(this)}>
						Submit
					</th>
				</form>
			</div>
		);
	}
}
export default RemoveBuilding;