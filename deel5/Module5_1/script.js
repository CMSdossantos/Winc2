function huiswerkMaken(vak, callback) {
    setTimeout(()=> {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
    }, 1000)
}

function klaarMetHuisWerk() {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
}

huiswerkMaken("wiskunde", klaarMetHuisWerk);