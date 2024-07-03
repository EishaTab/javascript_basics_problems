import process from 'process' 

let args= process.argv
if(args.length<=3){
    console.log("Plz enter at least 2 number")
    process.exit(1)
}
else{
    console.log(parseInt( args[2]) +parseInt (args[3]))

    process.exit(1)
}