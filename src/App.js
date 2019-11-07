import React from 'react';

import Search from './components/Search';

import ViewBuilding from './components/ViewBuilding';

import BuildingList from './components/BuildingList';

import Credit from './components/Credit';

import AddBuilding from './components/AddBuilding';

import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: [],
      data: this.props.data
    };
  }


  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }


  selectedUpdate(id) {
    const clicked = this.state.selectedBuilding.concat([id]);
    this.setState({
      selectedBuilding : clicked
    });
  }


  removeUpdate(code) {
    var check = obj => obj.code === code;
    if (this.state.data.some(check)) {
      var removeData = this.state.data.slice();
      for (var i = 0; i < removeData.length; i++) {
        if (removeData[i].code === code) {
          removeData.splice(i, 1);
          break;
        }
      }
      for (var j = 0; j < removeData.length; j++) {
        removeData[j].id = j + 1;
      }
      this.setState({
        data: removeData
      })
    }
  }


  addUpdate(obj) {
    if (obj.code && obj.name) {
      var updateData = this.state.data.slice();
      updateData.push(obj);
      updateData.sort((a, b) => a.code.localeCompare(b.code));
      for (var i = 0; i < updateData.length; i++) {
        updateData[i].id = i + 1;
      }
      this.setState({
        data: updateData
      })
    }
  }

  
  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <div className="split">
            <b>UF Directory App</b>
          </div>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />

        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <div className="split">
                      <b>Code Building</b>
                    </div>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeUpdate={this.removeUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <div className="split">
                <ViewBuilding
                  selectedBuilding={this.state.selectedBuilding}
                  data={this.state.data}
                />
              </div>
              <div className="split">
                <AddBuilding
                  addUpdate={this.addUpdate.bind(this)}
                />
              </div>
              <div className="split">
                <RemoveBuilding
                removeUpdate={this.removeUpdate.bind(this)}
                />
              </div>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;