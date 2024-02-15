 /* Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
 MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! */
// D Task
 class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qoldiq() {
        const currentTime = new Date();
        console.log(`Hozir ${currentTime.getHours()}:${currentTime.getMinutes()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
    }

    sotish(mahsulot, miqdor) {
        if (mahsulot === 'non' && this.non >= miqdor) {
            this.non -= miqdor;
            console.log(`${miqdor}ta non sotildi.`);
        } else if (mahsulot === 'lagmon' && this.lagmon >= miqdor) {
            this.lagmon -= miqdor;
            console.log(`${miqdor}ta lagmon sotildi.`);
        } else if (mahsulot === 'cola' && this.cola >= miqdor) {
            this.cola -= miqdor;
            console.log(`${miqdor}ta cola sotildi.`);
        } else {
            console.log(`Mavjud emas yoki yetarli miqdorda yo'q.`);
        }
    }

    qabul(mahsulot, miqdor) {
        if (mahsulot === 'non') {
            this.non += miqdor;
            console.log(`${miqdor}ta non qabul qilindi.`);
        } else if (mahsulot === 'lagmon') {
            this.lagmon += miqdor;
            console.log(`${miqdor}ta lagmon qabul qilindi.`);
        } else if (mahsulot === 'cola') {
            this.cola += miqdor;
            console.log(`${miqdor}ta cola qabul qilindi.`);
        } else {
            console.log(`Noto'g'ri mahsulot nomi.`);
        }
    }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq(); 

shop.sotish('non', 3);
shop.qabul('cola', 4);
shop.qoldiq(); 



/* console.log("B Task");

function findNumber(raqam) {
 
    let nomerQidirish = 0 
    for(let i = 0; i < raqam.length; i++){
        if(/\d/.test(raqam[i])) {
            nomerQidirish ++
        }
    }
       return nomerQidirish
}



const result = findNumber("ad2a54y79wet0sfgb9");
console.log(); */ 


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


/* function soliutiom(my_string, k){
    let str = '';
    for( let i = 0; i < k; i++) {
   
        str += k;
    }
    return str
}
const re = soliutiom("jjj",3);
console.log(re);
 */


