

let user = +prompt(`Birorta sonni tanlang \n 0) Quduq \n 1) Qaychi \n 2) Qogoz`)

let comp = Math.floor(Math.random()*3);


if(comp === 0 && user === 1 || comp === 1 && user === 2 || comp === 2 && user === 0 ){
    alert(`Kompyuter ${comp} : ${user} User \n Kompyuter win`)
}
else if(comp === user){
    alert(`Kompyuter ${comp} : ${user} User \n Durrang`)
}
else{
    alert(`Kompyuter ${comp} : ${user} User \n User win`)
}

// let user = prompt('ismingizni kiriting').toLowerCase

// let ism = 'abduazim'

// if(user = ism){
//     alert(`ism togri kiritildi \n Welcome`)
// }
// else{
//     alert('siz ismni notogri kiritdingiz qaytadan urining')
// }
    

