function download(cb){
    console.log("downloading");
    setTimeout(()=>{
        console.log("done downloading");
        setTimeout(()=>{cb(upload);},3000)
      
    },2000)

}
function compress(cb){
    console.log("compressing");
   
    setTimeout(()=>{
        console.log("done compressing");
        setTimeout(()=>{cb(allwork);},3000)
        
    },3000)

}

function upload(cb){
    console.log("upload");
 
    setTimeout(()=>{
        console.log("done uploading");
        setTimeout(()=>{cb();},3000)
        
    },2000)

}
function allwork(){
    console.log("bete mauj kardi");
    

}

download(compress);
