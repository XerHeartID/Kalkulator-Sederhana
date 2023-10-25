var n1 = Number(prompt("Masukkan Angka Pertama"));
var operator = prompt("Masukkan Operator");
var n2 = Number(prompt("Masukkan Angka Pertama"));

var hasil;
if (operator == "+"){
    if (!isNaN(n1) && !isNaN(n2)){
        var hasil = n1 + n2;
        document.write("Hasil: "+ hasil);
    }
    else{
        alert("Masukan Tidak Valid. Mohon Masukkan Angka.");
    }
}
else if (operator == "-"){
    if (!isNaN(n1) && !isNaN(n2)){
        var hasil = n1 - n2;
        document.write("Hasil: "+ hasil);
    }
    else{
        alert("Masukan Tidak Valid. Mohon Masukkan Angka.");
    }
}
else if (operator == "*"){
    if (!isNaN(n1) && !isNaN(n2)){
        var hasil = n1 * n2;
        document.write("Hasil: "+ hasil);
    }
    else{
        alert("Masukan Tidak Valid. Mohon Masukkan Angka.");
    }
}
else if (operator == "/"){
    if (!isNaN(n1) && !isNaN(n2)){
        var hasil = n1 / n2;
        document.write("Hasil: "+ hasil);
    }
    else{
        alert("Masukan Tidak Valid. Mohon Masukkan Angka.");
    }
}
else if (operator == "%"){
    if (!isNaN(n1) && !isNaN(n2)){
        var hasil = n1 % n2;
        document.write("Hasil: "+ hasil);
    }
    else{
        alert("Masukan Tidak Valid. Mohon Masukkan Angka.");
    }
}
else if (operator == "**"){
    if (!isNaN(n1) && !isNaN(n2)){
        var hasil = n1 ** n2;
        document.write("Hasil: "+ hasil);
    }
    else{
        alert("Masukan Tidak Valid. Mohon Masukkan Angka.");
    }
}
else{
    alert("Masukan Tidak Valid. Mohon Isi Dengan Benar.");
}

// function tambah(){
//     var angka1 = parseFloat(prompt("Masukkan Angka Pertama"));
//     var angka2 = parseFloat(prompt("Masukkan Angka Kedua"));
//     if (!isNaN(angka1) && !isNaN(angka2)){
//         var hasil = angka1 + angka2;
//         document.getElementById("hasil").innerHTML = hasil;
//     }
//     else{
//         alert("Masukan Tidak Valid, Harap Masukkan Angka.");
//     }
// }

// function kurang(){
//     var angka1 = parseFloat(prompt("Masukkan Angka Pertama"));
//     var angka2 = parseFloat(prompt("Masukkan Angka Kedua"));
//     if (!isNaN(angka1) && !isNaN(angka2)){
//         var hasil = angka1 - angka2;
//         document.getElementById("hasil").innerHTML = hasil;
//     }
//     else{
//         alert("Masukan Tidak Valid, Harap Masukkan Angka.");
//     }
// }

// function kali(){
//     var angka1 = parseFloat(prompt("Masukkan Angka Pertama"));
//     var angka2 = parseFloat(prompt("Masukkan Angka Kedua"));
//     if (!isNaN(angka1) && !isNaN(angka2)){
//         var hasil = angka1 * angka2;
//         document.getElementById("hasil").innerHTML = hasil;
//     }
//     else{
//         alert("Masukan Tidak Valid, Harap Masukkan Angka.");
//     }
// }

// function bagi(){
//     var angka1 = parseFloat(prompt("Masukkan Angka Pertama"));
//     var angka2 = parseFloat(prompt("Masukkan Angka Kedua"));
//     if (!isNaN(angka1) && !isNaN(angka2)){
//         if (angka2 !== 0){
//             var hasil = angka1 / angka2;
//             document.getElementById("hasil").innerHTML = hasil;
//         }
//         else{
//             alert("Tidak Dapat Dibagi Oleh 0.")
//         }
//     }
//     else{
//         alert("Masukan Tidak Valid, Harap Masukkan Angka.");
//     }
// }

// function modulus(){
//     var angka1 = parseFloat(prompt("Masukkan Angka Pertama"));
//     var angka2 = parseFloat(prompt("Masukkan Angka Kedua"));
//     if (!isNaN(angka1) && !isNaN(angka2)){
//         var hasil = angka1 % angka2;
//         document.getElementById("hasil").innerHTML = hasil;
//     }
//     else{
//         alert("Masukan Tidak Valid, Harap Masukkan Angka.");
//     }
// }

// function pangkat(){
//     var angka1 = parseFloat(prompt("Masukkan Angka Pertama"));
//     var angka2 = parseFloat(prompt("Masukkan Angka Kedua"));
//     if (!isNaN(angka1) && !isNaN(angka2)){
//         var hasil = angka1 ** angka2;
//         document.getElementById("hasil").innerHTML = hasil;
//     }
//     else{
//         alert("Masukan Tidak Valid, Harap Masukkan Angka.");
//     }
// }