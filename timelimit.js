let lastcall = 0
const timelimit = (fn) => {

    const newCall = new Date()
    if (newCall - lastcall <= 3000) {
        console.log("Plz wait")
        return;
    }
    else {
       lastcall= newCall
        fn()
    }
};
const innerFctn = () => {
    console.log("Inner Function")
}
timelimit(innerFctn)
timelimit(innerFctn)
timelimit(innerFctn)
timelimit(innerFctn)

setTimeout(() => {
    timelimit(innerFctn)
}, 4000);