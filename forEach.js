// let a=[1,2,3,4,5]
// a.forEach(
//     (v)=>
//     {console.log(v)}
// )
// let a=[1,2,3,4]
// a.map((b)=>{
//     console.log(b*3)
// })
let a=[1,2,3,4,5,6,7,8,9,10]
var result = a.filter((v)=>
{
    return v%2==0
}
)
console.log(result)
