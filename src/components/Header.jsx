import React from "react";

function Header(props) {
    return <div>
        <header class="d-flex justify-content-center py-3 fixed-top mb-5" id="header">
            <ul class="nav nav-pills">
                <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="#footer" class="nav-link" >Contact</a></li>
            </ul>
        </header>
    </div>;
}

export default Header;