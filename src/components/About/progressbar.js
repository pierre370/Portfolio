import React from "react";

function Progressbar(niv) {
    let classsuctom = "";
    let title = "";
    if(niv.message === 'confirmer'){
        classsuctom = "progress-bar-fill-conf";
        title = "Bonnes connaissances";
    }else if(niv.message === 'inter'){
        classsuctom = "progress-bar-fill-inter";
        title = "intermédiaire";
    }else {
        classsuctom = "progress-bar-fill-deb";
        title="débutant"
    }
    return (

        <div title={title} className="progress-bar">
            <div title={title} className={classsuctom}></div>
        </div>
    );
}

export default Progressbar;