import React, { useRef } from "react";

function Note(props) {
    function moveTo(target) {
        return props.target.current.scrollIntoView();
    }

    return <div>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1 onClick={moveTo}>Click!</h1>
        <h1 onClick={moveTo}>Click!</h1>
        <p ref={props.target}>Content</p>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>
        <h1>Title</h1>


        {/* <h1 onClick={() => scrollTo.current.scrollIntoView()}>Title</h1>
        <p ref={scrollTo}>Content</p> */}
    </div>;
}

export default Note;