import React, { Component } from 'react';
import {Row,Col,Button,Card,CardText,CardBody,CardTitle,CardSubtitle} from 'reactstrap';

class RaceCard extends Component {
    state = {
        isLoaded:false,
        races:[],
    }
    componentWillMount(){
        fetch('http://www.dnd5eapi.co/api/races/')
            .then(res=>res.json())
            .then(json => {
                this.setState({
                    isLoaded:true,
                    races:json.results,
                })
            });
    }
    // Get the details of the race object after it's been created, because I obviously don't understand react life cycles yet
    getRaceDetails(){
        const {races}=this.state;
        if(races.length>0){
            console.log(races[0].name);
        }
    }
    render() { 
        const {races} = this.state;
        const raceList = races.map((race,index) =>{
                fetch(race.url)
                .then(res=>res.json())
                .then(json=>{
                    race.expanded=json;
                    // console.log(race);
                });
            return (
                <Col xs="12" lg="6" className="my-5">
                    <Card className="bg-light">
                        <CardBody>
                            <CardTitle className=""><h4>{race.name}</h4></CardTitle>
                            <CardSubtitle></CardSubtitle>
                            <CardText>
                            </CardText>
                            <Button color="primary" block={true}>Select {race.name}</Button>
                        </CardBody>
                    </Card>
                </Col>
            );
        });
        return (
            <Row>
                {raceList}
                {/* {console.log(races)} */}
                {this.getRaceDetails()}
            </Row>
        );
    }
}
 
export default RaceCard;