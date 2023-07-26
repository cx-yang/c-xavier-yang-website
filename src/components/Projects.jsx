import React from "react";
import mapty from "../images/mapty.png";
import mtg from "../images/mtg-uncards.png";

function Projects() {
    //have image pop out on hover
    function handleHover() {

    }

    return <div class="album py-5 bg-body-tertiary" id="projects">
        <img href="../images/Ame.JPEG" />
        <div class="container">
            <h1 class="display-5 fw-bold">Projects</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
                <div class="col">
                    <a href="https://github.com/CX-Yang/mtg-un-cards" class="text-decoration-none">
                        <div class="card shadow-sm">
                            <img src={mtg} class="bd-placeholder-img card-img-top" loading="lazy" width="80%" height="225" />
                            <div class="card-body">
                                <p class="card-text">MTG Un-Cards</p>
                                <p class="card-text">Look though legal and banned Cards in Magic the Gathering. <br/>
                                Developed with Express.js and MTG SDK</p><br/>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary"><a class="link-primary" href="https://github.com/CX-Yang/mtg-un-cards">View Repo</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="https://github.com/CX-Yang/Mapty" class="text-decoration-none">
                        <div class="card shadow-sm">
                            <img src={mapty} class="bd-placeholder-img card-img-top" loading="lazy" width="80%" height="225" />
                            <div class="card-body">
                                <p class="card-text">Mapty</p>
                                <p class="card-text">Track distances for your running/cycling workouts at your location.<br/> 
                                Developed with javascript and Leaflet API</p><br/>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary text-decoration-none"><a href="https://github.com/CX-Yang/Mapty">View Repo</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
}

export default Projects;