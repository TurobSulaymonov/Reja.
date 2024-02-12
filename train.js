console.log("B Task");

function findNumber(raqam) {
 
    let nomerQidirish = 0 
    for(let i = 0; i < raqam.length; i++){
        if(/\d/.test(raqam[i])) {
            nomerQidirish ++
        }
    }
       return nomerQidirish
}



const natija = findNumber("ad2a54y79wet0sfgb9");
console.log(natija); 


/* console.log("A Task");

function salom (harf, raqam){
    let count = 0;
    
    for (let i = 0; i < raqam.length; i++) {
       if(raqam[i] === harf){
        count++;
        }
    }

    return count;
}

const result = salom("s","samarqand sayqali");
console.log(result); */






/* console.log("Jack Ma maslahatlari");
const list = [
    "Yaxshi talaba bo'ling", // 0-20
    "tog'ri boshliq tanlang va koproq hato qiling", //20-30
    "uzingizga ishlashni boshlang", // 30-40
    "Siz kuchli bo'lgan narsalarni qilijng", // 40=50
    "yoshlarga investitetsiya qiling", // 50-60
    "endi dam oling, foydasi yoq", // 60~
];
// callbsck
function maslahatBering (a, callback) {
    if( typeof a !== "number" ) callback ("insert a number", null);
    else if (a <= 20 ) callback(null, list[0]);
    else if (a > 20 && a <= 30) callback(null, list[1]);
    else if (a > 30 && a <= 40) callback(null, list[2]);
    else if (a > 40 && a <= 50) setTimeout(function () {
     callback(null, list[3]);
    }, 6000);
    else if (a > 50 && a <= 60) callback(null, list[4]);
  else{
   setInterval(function () {
    callback(null, list[5]);
}, 6000); 
/* setTimeout(function () {
    callback(null, list[5]);
}, 3000);
 */
/* }
}
 console.log("passed here");
maslahatBering(23, (err, data) => {
    if(err) console.log("ERROR", err);
    else{
    console.log("Javob:", data);
}
});

console.log("passed here");   */

//async
/*  async function maslahatBering (a) {
    if( typeof a !== "number" ) throw new Error ("insert a number");
    else if (a <= 20 ) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];

  else{  return new Promise ((resolve, reject) => {
    setTimeout(function () {
       resolve(list[5]);
    }, 6000);
  });  */
    //return list[5];
/* setTimeout(function () {
    callback(null, list[5]);
}, 6000); */

//}
//}

// then/catch
/* console.log("passed hre 0");
 maslahatBering(24)
.then((data) => {
console.log("Javob", data);
})
.catch((err) => {
    console.log("ERROR", err);
    })
console.log("passed hre 1");
 */

// async//await
/* async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(31);
    console.log(javob);
    javob = await maslahatBering(41);
    console.log(javob);
}

run(); */






