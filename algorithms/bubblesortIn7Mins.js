var toSort = [2,6,7,9,8,4,3,5,6,7,8]
function sort(arr){
var swp = 0
var tmp = 0
for(let i = 0; i < arr.length - 1; i++) {
	if(arr[i] > arr[i+1]){
		tmp = arr[i+1]
		arr[i+1] = arr[i]
		arr[i] = tmp
		swp += 1
    }
}
return swp
}

while(sort(toSort) > 0){
sort(toSort)
}
console.log(toSort)
