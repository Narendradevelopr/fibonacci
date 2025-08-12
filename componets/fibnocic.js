function fibonacci(number){
    let a=0,b=1
    while(a<number){
        console.log(a)
        let temt =a+b
        a=b
        b=temt
    }
}
fibonacci(20)  
// outout= 1,1,2,3,5,8,13   -> fibonacci sequence


//fibonacci is a sequence where each number is the sum of the two preceding ones call as a fibonacci sequence

//nonfibonacci numbers
function fibonacci(num){
    fib=[]
    let a=0, b=1;
    while(a<num){
        fib.push(a)
        let c=a+b
        a=b
        b=c
    }
 nonfib=[]
for(i=0;i<num;i++){
    if(!fib.includes(i)){
        nonfib.push(i)
    }
    
}
return nonfib
}
fibonacci(20)
console.log(nonfib)

//out put =[
//    4,  6,  7,  9, 10, 11,
//   12, 14, 15, 16, 17, 18,
//   19,]