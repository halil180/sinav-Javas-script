let array = [1,5,-2]

let toplam = 0; 
for (let index = 0; index < array.length; index++) {
    if (array[index] >= 0) {
        toplam = toplam + array[index]
       
    }else{

    }
    
}
console.log("positif sayilar toplami  = " +  toplam)