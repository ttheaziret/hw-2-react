import React, { Component } from 'react';

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      square1Color: 'red',
      square2Color: 'blue'
    };
  }

  toggleSquareColors = () => {
    this.setState((prevState) => ({
      square1Color: prevState.square1Color === 'red' ? 'blue' : 'red',
      square2Color: prevState.square2Color === 'red' ? 'blue' : 'red',
    }));
  };

  render() {
    const { square1Color, square2Color } = this.state;

    const squareStyle = {
      width: '200px',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      margin: '10px',
      borderRadius: '5px',
      fontSize: '24px',
      fontWeight: 'bold',
    };

    return (
      <div>
        <div
          style={{ ...squareStyle, backgroundColor: square1Color }}
          onClick={this.toggleSquareColors}
        >
          Square 1
        </div>
        <div
          style={{ ...squareStyle, backgroundColor: square2Color }}
          onClick={this.toggleSquareColors}
        >
          Square 2
        </div>
      </div>
    );
  }
}

export default Square;
