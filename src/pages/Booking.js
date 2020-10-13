import React from "react";
import { Link } from 'react-router-dom'
import MyCalendar from "../components/MyCalendar"
import { useParams } from "react-router";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {Container, Row, Jumbotron} from 'react-bootstrap'


export default function Booking() {

    let { id } = useParams();

return (

<>
    <header>
        <h1>Elija día para la próxima clase</h1>
    </header>
                <MyCalendar fluid
                    teacher= {id}>
                    
                </MyCalendar>
            
    <Link to="/"> HomePage </Link>
</>

);

}