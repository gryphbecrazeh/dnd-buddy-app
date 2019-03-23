import React, { Component } from 'react';
import {Row,Col,Button,Card,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';

class RaceCard extends Component {
    state = {
        isLoaded:false,
        races:[],
    }
    componentWillMount(){
        fetch('https://api-beta.open5e.com/races/?format=json')
            .then(res=>res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    races:json.results,
                })
            });
    }
    render() { 
        const {races} = this.state;
        const raceList = races.map(race =>{
            return (
                <Row>
                    <Card>
                        <CardBody>
                            <CardTitle>{race.name}</CardTitle>
                            <CardSubtitle>{race.desc}</CardSubtitle>
                            <CardText>
                                <Row>
                                    {race.asi_desc}
                                </Row>
                                <Row>
                                    <Col xs="3" md="6">Speed: {race.speed.walk}</Col>
                                    <Col>Size: {race.size}</Col>
                                </Row>
                                <Row>
                                    {race.alignment}
                                </Row>
                                <Row>
                                    {race.age}
                                </Row>
                                <Row>
                                {race.languages}
                                </Row>
                            </CardText>
                            <Button>Select {race.name}</Button>
                        </CardBody>
                    </Card>
                </Row>
            );
        });
        return (
            <div>
                {raceList}
                {console.log(races)}
            </div>
        );
    }
}
 
export default RaceCard;