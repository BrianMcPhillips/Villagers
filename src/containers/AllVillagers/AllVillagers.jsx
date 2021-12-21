import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';

export default class AllVillagers extends Component {
  state = {
    villagers: [],
    loading: true,
    error: false
  }

  // componentDidMount = () => {
  //   fetch('villater.com')
  //     .then(res => res.json())
  //     .then(villagers => this.setState({ villagers }));
  // }


  render() {
    const { villagers, loading, error } = this.state;
    return (
      <div>
        <Loading />
      </div>
    );
  }
}
