function college(cb){
    console.log("college gaye");
    setTimeout(()=>{
        console.log("college se aa gae");
        cb(ghar);
    },5000)
}
function maggi(cb){
    console.log("Maggi lene gaye");
    setTimeout(()=>{
        console.log("maggi leke aa gaye");
        cb();
    },5000)
}
function ghar(){
    console.log("cooking start");
    setTimeout(()=>{
        console.log("cooking end");
    },5000)
}

college(maggi);