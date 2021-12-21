import React, { Component } from 'react';

export default class AllVillagers extends Component {
  state = {
    villagers: [],
    loading: true,
    error: false
  }

  componentDidMount = () => {
    fetch('villater.com')
      .then(res => res.json())
      .then(villagers => this.setState({ villagers }));
  }


  render() {
    const { villagers, loading, error } = this.state;
    return (
      <div>
        
      </div>
    );
  }
}
