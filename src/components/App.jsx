import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";

import Note from "./Note"

function App() {
    const scrollTo = useRef();
    const scrollToAbout = useRef();
    const scrollToProjects = useRef();
    const scrollToContact = useRef();

    return (
        <div class="page">
            <Header target={scrollTo} />
            {/* {<Note scroll={scrollTo} target={scrollTo} />} */}
            <About />
            <Projects />
            <Footer target={scrollTo} />
        </div>
    );
}

export default App;