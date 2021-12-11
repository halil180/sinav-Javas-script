let students =[ 
    "Halil",80 ,
    "mahmut",77,
    "Hulya",88,
    "Hayri",95,
    "Ali",92
]
/// sayilari arraydan ayirma
let sayi = students.filter(Number);
console.log(sayi)


///// sayilari toplama
let toplam = 0; 
for (let index = 0; index < sayi.length; index++) {
    
       toplam = toplam + sayi[index]   
     
}

/// ortalama alma 
console.log("ortalama = "+ toplam / sayi.length)


