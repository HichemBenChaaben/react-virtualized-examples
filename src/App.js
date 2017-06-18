import React, { Component } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'
import logo from './logo.svg';
import './App.css';


const Card = ({ name, email, image, showDetails }) => {
  return <div className="card">
    <div className="card-img">
      <img src={image} />
    </div>
    <div className="details">
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  </div>;
}

class App extends Component {
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
  }
  renderRow({ index, isScrolling, key, style }) {
    return <div key={index} style={style} className="list-cards">
      <Card
        name={this.props.data[index].name}
        email={this.props.data[index].email}
        image={this.props.data[index].image}
      />
    </div>
  }
  handleClick(index) {
    this.setState({
      visible: [
        ...this.state.visible,
        this.state.visible[index] = !this.state.visible[index]
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="list">
          <AutoSizer>
            {
              ({ width, height }) => {
                return <List
                  width={width}
                  height={height}
                  rowHeight={100}
                  rowRenderer={this.renderRow}
                  rowCount={this.props.data.length} />
              }
            }
          </AutoSizer>
        </div>
      </div>
    );
  }
}

export default App;
