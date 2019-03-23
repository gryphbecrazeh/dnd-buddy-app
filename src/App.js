import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Health from './components/health/Health';
import Stats from './components/stats/Stats';
import Login from './components/pages/login/Login';
import Fetch from './components/fetch/Fetch';
import Race from './components/pages/race/Race';

import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faDiceD10,fal} from '@fortawesome/pro-light-svg-icons';
import {faDiceD20} from '@fortawesome/pro-solid-svg-icons';
import {Container,Row,Col} from 'reactstrap';

library.add(faDiceD10,faDiceD20,fal);
const x={name:"Alderashe",level:5,race:"Half-Elf",class:"Ranger",hp:{hitPoints:32,maxHitPoints:32},stats:{str:1,con:1,dex:1,int:1,wis:1,cha:1},ac:14,proffBonus:2};
class App extends Component {
  state={page:"home"};
  render() {
    return (
      <Container fluid={true}>
        <Row className="text-light bg-dark">
          <Col xs="12" className="text-center">
            <h1>
              <FontAwesomeIcon icon={["fas","dice-d20"]}/>
              D&D Companion App
            </h1>
          </Col>
        </Row>
        
        <Race/>
         {/* <Header {...x}/>
         <Health {...x}{...x.hp}/>
         <Stats{...x}/>
        
         <Row>

         </Row> */}
        {/* <Login/> */}
      </Container>
    );
  }
}

export default App;
