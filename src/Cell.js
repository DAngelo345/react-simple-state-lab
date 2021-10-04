import React, { Component } from 'react';

export default class Cell extends Component {
    constructor() {
        super();
        this.state = {
            color: '#fff',
        };
    
    }
    render() {
        return (
          <div className='cell' style={{backgroundColor: '#FFF'}}></div>
        )
      }
}