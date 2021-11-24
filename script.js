function check(){
    var age;
    age = Number(document.getElementById("age").value);

    if(age < 18) {
       alert("Du är ju inte ens 18......");
    }

    else if(age > 65) {
        alert("Tyvärr men du är för gammal för den här sidan!")
    }

    else{
       alert("Du är tillräckligt gammal, du får komma in!!!");
    }
}