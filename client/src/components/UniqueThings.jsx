import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './UniqueThings.css';

function uniqueThings() {
    return (
        <div  className='carousel-div'>
            <div id="unique-things" class="carousel slide" data-ride="false">
                <div class="carousel-inner">
                    <div class="carousel-item active container-fluid"> 
                        <img class="unique-things" src={require("./Dhol-damaun.jpg")} alt="dhol-damaun"/>
                            <p className="unique-things-text">Dhol Damaun is an ancient musical  instrument which is played in several
                             festivals religious ceremonies and is essential in the invocation of  rituals of 
                             local deities.. In ancient times it was played to boost the morale of soldiers in 
                             the battlefield. In garhwal, the drummers are referred to as auji ,das or Bajgi. 
                             The auji refer to the knowledge and history that surrounds the performance practice 
                             of the dhol, as Dhol Sagar which means, Ocean of Drumming.</p>
                    </div>
                    <div class="carousel-item container-fluid">
                        <img class="unique-things" src={require("./dhol.jpg")} alt="dhol-damaun"/>
                        <p className="unique-things-text">Dhol Damaun is an ancient musical  instrument which is played in several
                             festivals religious ceremonies and is essential in the invocation of  rituals of 
                             local deities.. In ancient times it was played to boost the morale of soldiers in 
                             the battlefield. In garhwal, the drummers are referred to as auji ,das or Bajgi. 
                             The auji refer to the knowledge and history that surrounds the performance practice 
                             of the dhol, as Dhol Sagar which means, Ocean of Drumming.</p>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#unique-things" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#unique-things" role="button" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            </div>

    );
}

export default uniqueThings;