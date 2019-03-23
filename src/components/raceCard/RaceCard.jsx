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
                <Row className="my-5">
                    <Card className="bg-light">
                        <CardBody>
                            <CardTitle><h4>{race.name}</h4></CardTitle>
                            <CardSubtitle>{race.desc}</CardSubtitle>
                            <CardText>
                                <Row className="my-3">
                                    {race.asi_desc}
                                </Row>
                                <Row className="my-3">
                                    <Col xs="2"><strong>Speed: </strong>{race.speed.walk}</Col>
                                    <Col>{race.size}</Col>
                                </Row>
                                <Row className="my-3">
                                    {race.alignment}
                                </Row>
                                <Row className="my-3">
                                    {race.age}
                                </Row>
                                <Row className="my-3">
                                {race.languages}
                                </Row>
                            </CardText>
                            <Button color="primary" block={true}>Select {race.name}</Button>
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