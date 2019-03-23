import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Health from './components/health/Health';
import Stats from './components/stats/Stats';
import Login from './components/pages/login/Login';
import Fetch from './components/fetch/Fetch';
import Race from './components/pages/race/Race';

import {library} from '@fortawesome/fontawesome-svg-core';
// eslint-disable-next-line
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import {fab} from '@fortawesome/free-brands-svg-icons';
// import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faDiceD10,faDiceD20,fal} from '@fortawesome/pro-light-svg-icons';
import {Container,Row} from 'reactstrap';

library.add(faDiceD10,faDiceD20,fal);
const x={name:"Alderashe",level:5,race:"Half-Elf",class:"Ranger",hp:{hitPoints:32,maxHitPoints:32},stats:{str:1,con:1,dex:1,int:1,wis:1,cha:1},ac:14,proffBonus:2};
class App extends Component {
  state={page:"home"};
  render() {
    return (
      <Container fluid={true}>
        <Race handler={(state)=>{
          this.setState({page:state});
        }}/>
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
