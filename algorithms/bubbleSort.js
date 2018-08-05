le(sort() > 0) {
sort()
}

function sort(){
var tmp = 0
var swp = 0
for(let i =0; i < ar.length - 1; i++){
	if(ar[i] > ar[i+1]){
		tmp = ar[i+1]
		ar[i+1] = ar[i]
		ar[i] = tmp
		swp += 1
       }
}
return swp
       }
console.log(ar)
