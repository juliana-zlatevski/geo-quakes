import React from 'react';
import axios from 'axios';

class QuakeList extends React.Component {
    state = {
        quakes: [],
        loading: true
    }

    componentDidMount() {
        axios.get(`https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson`)
            .then((res) => this.setState({
                quakes: res.data.features,
                loading: false
            }))
            .catch((err) => {
                console.log(err);
            })
    }

    mapOverQuakes() {
        return this.state.quakes.map((quake) => {
            return(
                <p>M { quake.properties.mag } - { quake.properties.place }</p>
            )
        })
    }

    render() {
        return (
            <div id='info'>
                { this.mapOverQuakes() }
            </div>
        )
    }
}

export default QuakeList;