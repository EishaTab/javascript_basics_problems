const str1= "hello"
const reverse =(str)=>{
    let reversed=''
    for (let i=str.length-1; i>=0; i--){
        reversed= reversed + str[i]
       
    }
    return reversed
}
const reversed= reverse(str1)
console.log(reversed)