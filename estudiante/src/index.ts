import app from "./app";

async function main (){
    console.log("starting app...");
    await app.listen(app.get("port"));
    console.log("listening on port",app.get("port"));
    
}

main();