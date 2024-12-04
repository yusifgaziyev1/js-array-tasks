// Task 
// 1)
// Bir array yaradin adlardan ibaret olsun hemin arraya her hansisa bir adi
// arrayin metodlarindan isdifade etmekle daxil edin daha sonra silin

let names = ["Ramil","Abbas","Hüseyn"];
names.push("Yusif");
console.log(names);
names.splice(1,1);
console.log(names);

// 2)
// let obj = [
//     {
//         name: "Ali",
//         surname: "Aliyev",
//         age: 10,
//         driving: true
//     }, {
//         name: "Veli",
//         surname: "Aliyev",
//         age: 17,
//         driving: false,
//     }, {
//         name: "Mehman",
//         surname: "Aliyev",
//         age: 25,
//         driving: true,
//     },{
//         name: "Nicat",
//         surname: "Aliyev",
//         age:26,
//         driving: false
//     },{
//         name: "Ayxan",
//         surname: "Aliyev",
//         age:15,
//         driving: true
//     },{
//         name: Nihad,
//         surname: "Aliyev",
//         age:19,
//         driving: true
//     }
// ]

// 3)
// bu arrayde adi n ile baslayanlari loga cixaracaq funksiya qurun
// yasi 20 den boyuk ve 26 den kicik olan objectleri console.loga cixaran funksiya yazin
// yasi cut olan ve suruculuk vesieqesi olanlari loga cixaran funksiya yazin

let obj = [
        {
            name: "Ali",
            surname: "Aliyev",
            age: 10,
            driving: true
        }, {
            name: "Veli",
            surname: "Aliyev",
            age: 17,
            driving: false,
        }, {
            name: "Mehman",
            surname: "Aliyev",
            age: 25,
            driving: true,
        },{
            name: "Nicat",
            surname: "Aliyev",
            age:26,
            driving: false
        },{
            name: "Ayxan",
            surname: "Aliyev",
            age:15,
            driving: true
        },{
            name: "Nihad",
            surname: "Aliyev",
            age:19,
            driving: true
        }
    ]

// bu arrayde adi n ile baslayanlari loga cixaracaq funksiya qurun

function startN() {
    for(let i = 0; i < obj.length; i++) {
        if (!obj[i].name.includes("N")) {
            continue
        } else {
            console.log(obj[i].name);
        }        
    }
}

startN();

// yasi 20 den boyuk ve 26 den kicik olan objectleri console.loga cixaran funksiya yazin

let ageControl = () => {
    for(let i = 0; i < obj.length; i++) {
        if (obj[i].age > 20 && obj[i].age < 26) {
            console.log(`${obj[i].name}'ın yaşı ${obj[i].age}'dir.`);
        } else {
            continue;
        }
    }
}

ageControl();

// yasi cut olan ve suruculuk vesieqesi olanlari loga cixaran funksiya yazin

function userControl() {
    for(let i = 0; i < obj.length; i++){
        if (obj[i].age % 2 == 0 && obj[i].driving == true) {
            console.log(`${obj[0].name} adlı userin yaşı ${obj[0].age} cütdür və sürücülük vəsiqəsi ${obj[0].driving} var.`)
        } else {
            continue;
        }
    }
}

userControl();

// 4)
// obj arrayini tersine yazdirin yeni baslangic deyer Ali deyil Nihad olsun

obj.reverse();
console.log(obj);