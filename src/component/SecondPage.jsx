import React from 'react';
import '../index.css';
import {secondPageElements} from '../../public/assets/constData'

function SecondPage() {
    return (
        <>
            <div className="mainpage">
                <div className="leftdiv">
                    <div className="heading">
                        Learn, Practise & Test With 
                    </div>

                    <div className="pedagogy-heading">
                        Pedagogy
                    </div>

                    <div className="description">
                        <b>Experience a Radical way to <br/> Learn,Practice & Test from Books </b> <br/>
                    </div>

                    <p className='description-second'>
                        Practice from your favourite books, configure your own tests, attempt <br/> tests created by super Authors & watch bite sized videos & transform <br/> the way you interact with your books
                    </p>
                </div>

                <div className="rightdiv">
                    <div className="image1" >
                        <img src="../../public/assets/Rectangle 14.png" alt="react"/>
                    </div>

                    <div className="image2">
                        <img src="../../public/assets/Rectangle13.png" alt="react"/>
                    </div>
                </div>
               
            </div>      
        </>
    );
}

export default SecondPage;