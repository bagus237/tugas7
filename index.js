var name = "Bagus";
var money = 850000;
var age = 18;



if (name == 0 ){
 console.log("Anda Tidak Boleh Memesan");
  throw new Error('Program Berhenti');
}

//di atas 17
if (age > 17 ){
  console.log("Anda hanya bisa pesan anggur");
  if (money >= 300000 ){
  console.log("Anda bisa pesan minum. Sisa uang anda:", money - 300000);
} else{
 console.log("Uang tidak cukup anda harus pulang");
}
} 
//dibawah 17
if (age < 17 ){
  console.log("Anda hanya bisa pesan juice");
  if (money >= 50000 ){
  console.log("Anda bisa pesan minum. Sisa uang anda:", money - 50000);
} else{
  console.log("Uang Tidak Cukup Anda Harus Pulang");
}
}


