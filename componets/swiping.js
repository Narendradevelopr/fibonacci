function demo(a,b){
console.log("bofore",a,b)
temt=a,b
a=b
b=temt
console.log("after",a,b)
}
demo(10,20)