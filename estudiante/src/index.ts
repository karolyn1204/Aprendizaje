import appConst from "./app";

async function main (){
    console.log("starting app...inicio");
    await appConst.listen(appConst.get("port"));
    console.log("listening on port",appConst.get("port"));
    
}

main();