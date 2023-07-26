import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";

function App() {
    const scrollTo = useRef();

    return (
        <>
        <div class="page">
            <Header target={scrollTo} />
            {/* {<Note scroll={scrollTo} target={scrollTo} />} */}
            <About />
            <Projects />
            <Footer target={scrollTo} />
        </div>
        </>
    );
}

export default App;