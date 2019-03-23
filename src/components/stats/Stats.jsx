import React, { Component } from 'react';
import {Row,Col,Button} from 'reactstrap';

class Stats extends Component {
    state = {  }
    render() { 
        return (
            <Row block={true}>
                <Col>
                    <Button block={true} color="info">
                        Str:{this.props.stats.str}
                    </Button>
                </Col>
                <Col>
                    <Button block={true} color="info">
                        Dex:{this.props.stats.dex}
                    </Button>
                </Col>
                <Col>
                    <Button block={true} color="info">
                        Con:{this.props.stats.con}
                    </Button>
                </Col>
                <Col>
                    <Button block={true} color="info">
                        Int:{this.props.stats.int}
                    </Button>
                </Col>
                <Col>
                    <Button block={true} color="info">
                        Wis:{this.props.stats.wis}
                    </Button>
                </Col>
                <Col>
                    <Button block={true} color="info">
                        Cha:{this.props.stats.cha}
                    </Button>
                </Col>
            </Row>
        );
    }}
 
export default Stats;