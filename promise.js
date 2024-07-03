const mypromise= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("ih")
    }, 1000)
})
mypromise.then(val=>console.log(val))
console.log(mypromise)