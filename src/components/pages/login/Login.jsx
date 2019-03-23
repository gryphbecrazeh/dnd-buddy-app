import React, { Component } from 'react';
import {Row,Col,Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
class Login extends Component {
    state = {  }
    render() { 
        return (
            <Row>
                <Col>
                    <Button>
                        <FontAwesomeIcon icon={["fal","dice-d20"]}/>
                        <div>Press to Login</div>
                    </Button>
                </Col>
            </Row>
        );
    }
}
 
export default Login;