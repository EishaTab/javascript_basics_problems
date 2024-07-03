const reverse =(str)=>{
    let reversed=''
    for (let i=str.length-1; i>=0; i--){
        reversed= reversed + str[i]
       
    }
    return reversed
}
const palindrome =(str)=>{
    const rs= reverse(str)
    if(rs===str){
        console.log(str, " is a palindrome")
        return;
    }
    else {
        console.log(str, " is not a palindrome")
        return;
    }
}
palindrome("racecar")