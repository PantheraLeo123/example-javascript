
let arr=[1,2,3,4]

function getFirstValue(arr){
if(Array.isArray(arr)){
    console.log(arr[0])
} else {
    console.log("hata")
}
}
getFirstValue(arr)