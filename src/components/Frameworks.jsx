import React from 'react'
import {Grid} from '@material-ui/core/';

import {Button} from './Button';
import './styles/App.css';


function Frameworks(){
    return(
        <div className="frameworks-cont">
            <h3>Projects by framework</h3>
            <div className="react-cont">
                <h3>React   <i className='fab fa-2x fa-react react'></i></h3>
                <p>Also used with React:  <i className='fab fa-sass sass'></i>,<i className="fab fa-font-awesome font-awe"></i>, Material-UI, AOS Animation </p>
            </div>
            <div className="angular-cont">
                <h3>Angular   <i className='fab fa-2x fa-angular angular'></i></h3>
                <p>Also used with Angular:  <i className='fab fa-sass sass'></i>,<i className="fab fa-font-awesome font-awe"></i>, Flex-Layout, AOS Animation </p>
            </div>
            <div className="vue-cont">
                <h3>Vue   <i className='fab fa-2x fa-vuejs vue'></i></h3>
                <p>Also used with Vue:    <i className='fab fa-css3-alt css'></i>,<i className="fab fa-font-awesome font-awe"></i>,<i className="fab fa-bootstrap boots"></i>,vue-router, AOS Animation </p>
            </div>
        </div>
    )}

export default Frameworks;