import React from "react";
import ReactImageMagnify from 'react-image-magnify';
import surati from "../assets/images/2.png";


const Test = ()=>{
    return (
        <>
        <div style={{width:"500px"}}>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: surati
                    },
                    largeImage: {
                        src: surati,
                        width: 600,
                        height: 400
                    }
                }} />
        </div>
        </>
    )
}

export default Test;