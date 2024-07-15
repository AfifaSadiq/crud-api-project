module.exports = (request) => {
    return new Promise((resolve,reject)=>{
        try {
            let body = "";
            //node js is event driven so we crreate an evevnt to get a stream of data
            request.on("data",(chunk)=>{
                body+=chunk;//append chunk to body
            });
            request.on("end",()=>{
                resolve(JSON.parse(body));
            });
        }catch {
            console.log(err);
            reject(err);
        }
    });
}