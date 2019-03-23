import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Row,Col} from 'reactstrap';
class Health extends Component {
    state = {}
    render() { 
        return (
            <Row>
                <Col>
                    <div id="currentHitPoints">
                        Hit Points: {this.props.hitPoints}/{this.props.maxHitPoints}
                        <FontAwesomeIcon icon={["fal","dice-d10"]}/>
                    </div>
                    {/* <div id="death-saves">
                        Death Saves:  
                        <input type="checkbox" name="1st Attempt" id="attempt1"/>
                        <input type="checkbox" name="2nd Attempt" id="attempt2"/>
                        <input type="checkbox" name="3rd Attempt" id="attempt3"/>
                    </div> */}
                </Col>
                <Col>
                    AC: {this.props.ac}
                </Col>
                <Col>
                Profficiency Bonus: +{this.props.proffBonus}
                </Col>
            </Row>
        );
    }
}
 
export default Health;