import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';
import VillagerList from '../../components/VillagerList/VillagerList';


export default class AllVillagers extends Component {
  state = {
    villagers: [],
    loading: true,
    error: false
  }

  componentDidMount = () => {
    fetch('https://thingproxy.freeboard.io/fetch/https://ac-vill.herokuapp.com/villagers')
      .then(res => res.json())
      .then(json => json.map(villager => ({
        _id: villager._id,
        name: villager.name,
        imageUrl: villager.image
      })))
      .then(villagers => {
        this.setState({ villagers, loading: false });
      });
  }


  render() {
    const { villagers, loading, error } = this.state;
    if(loading) return <Loading />;
    return (
      <div>
        <VillagerList villagers={villagers}/>
      </div>
    );
  }
}
