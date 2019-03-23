import React, { Component } from 'react';
import {Row,Input,Col} from 'reactstrap';
class Header extends Component {
    state = {}
    render() {
        return (
            <Row>
                <Col>
                    <Input  type="text" name="characterName" placeholder={this.props.name}/>
                </Col>
                <Col xs="2">
                    Level: {this.props.level}
                </Col>
                <Col xs="2">Race: {this.props.race}</Col>
                <Col xs="2">Class: {this.props.class}</Col>
            </Row>
        );
    }
}
 
export default Header;