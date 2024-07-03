const memoize = new Map()
const caching = (val) => {
   
    if (memoize.has(val)) {
        console.log("Cached "+ memoize.get(val)  + " value returned for "+ val)
        return memoize.get(val);
    }
    else {
        const result = val * val;
        memoize.set(val,result)
        console.log("Calucalted "+ result + " value returned for "+ val)
        return result
    }
}
caching(2);
caching(2);
caching(3);
caching(2);
