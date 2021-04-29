console.log("awesome") //1
setTimeout(()=> console.log("opera"), 0)//doesn't block the main process //3

console.log("classic") //2

//callstack -> LIFO last input first output

//callback queue - > FIFO First in first out
//process responses for asynchronous functions



function a (){
    return 1
}

function b (){
    a()
}

function c(){
    b()
}

c()