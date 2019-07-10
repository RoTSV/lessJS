
/*let i=1;
let a= +prompt('С какого числа начинать отсчёт');
let b= +prompt('На сколько увеличивать число');
let с = +prompt('Сколько раз увеличивать');
let sum=0;
while (i<10) {
    i++;
    sum=a+sum;
    console.log(sum);
}*/
/*let i=1;
let a= +prompt('С какого числа начинать отсчёт');
let b= +prompt('На сколько увеличивать число');

while (i>a) {  
    i = +prompt('Сколько раз увеличивать', a);
}
let sum=0;
while(i<a){
    i++;
    sum=a+sum;
    console.log(sum);
}*/
/*let b= +prompt('С какого числа начинать отсчёт');
let c= +prompt('На сколько увеличивать число');
let n = +prompt('Сколько раз увеличивать');
let a=0;
    a=b+c*n;

    
    alert(a);*/
    /* function Store(codeProd, product, unit, count, purchPrice, sellPrice) {
        this.codeProd = codeProd;
        this.product = product;
    
        this.unit = unit;
        this.count = count;
        let _purchPrice = purchPrice;
        this.getpurchPrice = function() {
            console.log('Цена закупки, грн.:', _purchPrice);
        }
        this.setpurchPrice = function(p) {
            _purchPrice = p;
        };
        this.sellPrice = sellPrice;
        this.out = function() {
            console.log(`ID код: ${this.codeProd}, Название товара: ${this.product}, Единица измерения: ${this.unit}, Количество: ${this.count}, Цена реализации, грн/${this.unit}: ${this.sellPrice}`)
        };
        this.shelfLife = function(shelfLife, date) {
            if (shelfLife < date) {
                return 'Cрок годности закончился'
            } else {
                return 'Cрок хранения хороший. Приятного аппетита!'
            }
        };
        this.sellProd = function(k) {
            let kol = k;
            if (this.count !== 0 && this.count > kol) {
                this.count = this.count - kol;
                let income = kol * (this.sellPrice - _purchPrice);
                return (`Продаж товара ${this.product} ${this.unit}, Доход, грн.: ${income}, Продано: ${kol}, Остаток на складе: ${this.count}`);
            } else {
                return 'Товара не хватает на складе!';
            }
        };
        this.novaPoshta = function(k, depart, fullname, tel) {
            this.costDev = 50;
            let kolz = k;
            this.depart = depart;
            this.fullname = fullname;
            this.tel = tel;
            if (this.count !== 0 && this.count > kolz) {
                this.count = this.count - kolz;
                return (`Отправка новой почтой ${this.product}, Количество: ${kolz} ${this.unit}, данные покупателя: ${this.fullname}, ${this.tel}, отделение:${this.depart}, Cтоимость доставки, грн: ${this.costDev}, Остаток на складе: ${this.count}`);
            } else {
                return 'Товара не хватает на складе!';
            }
        }
    
    };
    let Store1 = new Store('001', 'Шоколад с орехами Roshen', 'шт.', 32, [], 30);
    // console.log(Store1);
    Store1.out();
    Store1.setpurchPrice(25);
    Store1.getpurchPrice();
    console.log(Store1.sellProd(5));
    let Store2 = new Store('002', 'Конфеты "Бельгийский шоколадный трюфель"', 'шт.', 18, [], 150);
    Store2.out();
    Store2.setpurchPrice(100);
    Store2.getpurchPrice();
    let Store3 = new Store('003', 'Торт "Пьяная вишня', 'кг.', 7, [], 300);
    Store3.out();
    Store3.setpurchPrice(220);
    Store3.getpurchPrice();
    Store1.out();
    console.log(Store3.novaPoshta(3, '№ 96', 'Влад Иванов', '+38 099 332 00 00'));
    console.log(Store2.sellProd(4));
    console.log(Store3.shelfLife(30719, 20719)); */
/*let b= +prompt('С какого числа начинать отсчёт');
let c= +prompt('На сколько увеличивать число');
let n = +prompt('Сколько раз увеличивать');
let a=0;
while(n>a){
    a=b+c*n;
    n++;
    console.log(a); 
}*/
/*let a=9, b=6;
if(a<10 && b>5){
    console.log(1);
}else{
    console.log(2);
}*/
/*for ( let i = 0, j = 1;  j<7; i++, j++ ) {
    i = i + j ;
    console.log(i);
}*/
/*let arr = [10, 2, 3, 'Вася', 5];
let sas = arr.length-1;
for ( i = 0; i <= sas; i++) {
    
	console.log(arr[i]); //выведет 1, 2, 3, 4, 5
}*/
/*let i = 0;
while (i <= 50) {
	console.log(i);
    i++;
    
}*/
/*let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length-1; i++) {
	console.log(arr.length);
}*/



//Найти произведение элементов этого массива
/*let arr = [2, 3, 4, 5];
let result = 1;
for (var i = 0; i < arr.length; i++) {
    result *= arr[i];
    console.log(result);
}*/




/*//Поиск max,min значения длинны массива

let arr = [11, 34, 67, 4, 25];
let max=0;

for (i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]; 
    }   
}
console.log(max);

let min=max;

for (i = 0; i <= arr.length; i++) {
    if (arr[i] < min  ) {
        min = arr[i]; 
    }   	
}
console.log(min);*/



 
/*
// Преобразование строки в массив  
let str = 'adddd вавуууу wewewewe gfgfgfgfggfgfgfgf';
let arr = str.split([' ']);
console.log(arr); 
console.log(arr.length);
*/
/*let a=17;
let b=10;
let c=a-b;
let d=7;

let sum=c+d;
console.log(sum);


let name='Рома!';
console.log('Привет,'+ ' '+name);*/
/*var lang = 'ru';
if (lang == 'ru') {
	var arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
	arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
alert(arr);*/
 
//Перебор массива по типу данных
/*let arr = [11, 34, 67, 'Привет', 4, 'Hello', 25, 33, 'Пока'];
let num = [];
let str = [];
    for ( i = 0; i < arr.length; i++){
     if(typeof arr[i] === 'number'){
         num.push(arr[i]);     
    } else if(typeof arr[i] === 'string'){
         str.push(arr[i]);
    } 
 }
 console.log(num);
 console.log(str);*/
/*let arr = [11, 34, 67, 'Привет', 4, 'Hello', 25, 33, 'Пока', [143, 'fddfdfd']];
let num = [];
let str = [];
    for (let i = 0; i < arr.length; i++){
     if(typeof arr[i] === 'number'){
         num.push(arr[i]);     
    } else if(typeof arr[i] === 'string'){
         str.push(arr[i]);
    } 
    else if(typeof arr[i] === 'object'){
    for( let j=0; j<arr[i].length; j++){
        if(typeof arr[i][j] === 'number'){
            num.push(arr[i][j]);
        } else if(typeof arr[i][j] === 'string'){
            str.push(arr[i][j]);
        }    
    } 
    }
 }
 console.log(num);
 console.log(str);*/
 /*let arr=[22, 34, 23, 45, 34 ];
 arr.pop();
 arr.pop();
 arr.unshift(-1);
 arr.shift();
 console.log(arr);*/

 /*let kochok = {
     name: 'Серёга',
     weight: '103kg',
     ant: {
         bicops: 46,
         chest:130
     }
    };
    kochok.ant.legs = 60;
    /*console.log('Этого качка зовут ', kochok.name, '\n Весит он ', kochok.weight, 'Бицепс у него ', kochok.ant.bicops);*/

    /*let kochok = {
        name: 'Серёга',
        weight: '103kg',
        ant: {
            bicops: 46,
            chest:130
        },
        says: function(){
            console.log('Сегодня грудь')
        }
       };
       kochok.says();
       kochok.last_year= {
        bicops: 42,
        chest: 124,
        legs: 42
       };*/
    /*kochok.result = kochok.ant.bicops - kochok.last_year.bicops;
    console.log(kochok.result)
    for(let i in kochok){
       /* console.log(kochok[i]);
        console.log(i);
        console.log(`Keys is ${i}: ${kochok[i]}`);
        if(typeof kochok[i] === 'object'){
            console.log(kochok[i]);
            for(let j in kochok[i]){
                if(typeof kochok[i][j] === 'string'){
                    console.log(kochok[j]);
                    console.log(kochok[i][j]);
                } else if(typeof kochok[i][j] === 'number'){
                    console.log(kochok[j]);
                }
            }
        } 
    }*/
    /*let kachok = {
        name: 'Серёга',
        weight: '103kg',
        ant: {
            bicops: 46,
            chest:130
        }
       };
       kachok.last_year = {
        bicops: 42,
        chest: 124,
        legs: 42
    };
    console.log(kachok.name);*/




   /* function calc() {
        let a = parseInt(document.getElementById('a').value);
        let b = parseInt(document.getElementById('b').value);
         a + b;

        
    }
    function equally() {
        let a = parseInt(document.getElementById('a').value);
        let b = parseInt(document.getElementById('b').value);
        let c=a+b;
        document.getElementById('result').innerHTML =  c;
    }



/*let kachok = {
    name: 'Серёга',
    weight: '103kg',
    ant: {
        bicops: 46,
        chest:130
    }
    };
    kachok.last_year = {
    bicops: 42,
    chest: 124,
    legs: 42
    };
console.log(kachok);

for(let i in kachok){
console.log(kachok[i]);
console.log(i);
console.log(`Keys is ${i}: ${kachok[i]}`);

if(typeof kachok[i] === 'object'){
    console.log(kachok[i]);
if(typeof kachok[i] ==='string'){
        console.log(kachok[i]);
    } else if(typeof kachok[i] === 'number'){
        console.log(kachok[i]);
    };

for(let j in kachok[i]){
    if(typeof kachok[i][j] === 'string'){
        console.log(kachok[i][j]);
    } else if(typeof kachok[i][j] === 'number'){
        console.log(kachok[i][j]);
    } 
    
    
}
} 
}*/



/*document.querySelector('div').innerHTML='Это див первый див';*/
/*let a=document.querySelector('div').innerHTML;
console.log(a);
let element= document.querySelector('div');
element.style.backgroundColor='#000000';
element.addEventListener('mouseover', function(){
    element.style.backgroundColor='#ffff';
}
)
element.addEventListener('mouseout', function(){
    element.style.backgroundColor='#000000';
}
)*/


/*let input = document.querySelector('input');
let div = document.querySelector('div');
input.addEventListener('change', function(){
    console.log(input.value);
    div.innerHTML=input.value;
})*/



/*function emmitToConsole(t){
    console.log(t);
}
function functionComp(cb,t){
    setTimeout(function()
    {cb(t)}, 1000)
}
functionComp(emmitToConsole, 'text');*/
/*function func(a){
    b=a*a;
    console.log(b);
}
function cub(a){
    c=a*a*a;
    console.log(c);
}
func(2);
cub(3);
function display(cb){
    cb();
}
display(function(){
    console.log('ananymous');
});
(function (){
    console.log('я не работаю');
}())
let elem=document.querySelector('.pa');
let elem1=document.querySelector('.sa')
function r(e){
    e.target.style.color='red';
}
elem.addEventListener('click', r);
elem1.addEventListener('mouseover', function(e){
e.target.style.fontSize=60+'px';
}
);*/



/* let elem=document.querySelector('.div-1');
let elem1=document.querySelector('.div-2');
    elem.addEventListener('mousemove', function(e) {
        let x = e.offsetX==undefined?e.layerX:e.offsetX;
        let y = e.offsetY==undefined?e.layerY:e.offsetY;
        console.log(x, y);
    })  */
    /*  for( let i=0; i<=10; i++){
        setTimeout(function(){ console.log(i)}, 1000)
        
    } */

    
    
    /* for( let i=0; i<=10; i++){
        let time=i==0?1000:1000*(i+1);
        setTimeout(function(){console.log(i)}, time)
        
    }  */

    /* let a=5;
    setInterval(function(){
        if(a===5){
            console.log(a);
        } else {clearInterval()}
    }, 1000);
    setTimeout(function(){
        a=6;
    }, 5000); */



    /* let elem=document.querySelector('div');
    let h1=document.createElement('h1');
    h1.innerHTML='Hello World';
    elem.appendChild(h1);
    h1.className(); */
    /* let input=document.querySelector('div');
    let input2=document.querySelector('.input2');
    let inp=document.querySelector('.in');
    input2.addEventListener('click', function(){
        let h1=document.createElement('h1');
        h1.innerHTML=inp.value;
        input.appendChild(h1);
        
    }) */



    /*let input=document.querySelector('div');
    let input2=document.querySelector('.input2');
    let inp=document.querySelector('.in');
    input2.addEventListener('click', function(){
        let h1=document.createElement('h1');
        h1.innerHTML=inp.value;
        input.insertBefore(h1, input.children[1]);
    }) */
    /* let div2=document.querySelector('.div-2');
    let h1_2=document.querySelector('.h1_2');
    div2.removeChild(h1_2);
    div2.remove(); */

    /* let div1=document.querySelector('.div-1');
    let inp=document.querySelector('.inp');
    let div2=document.createElement('div');
    div2.innerHTML='Hello World';
    inp.addEventListener('click', function(){
        
    }) */


    /*  let div1=document.querySelector('.div-1');
    let inp=document.querySelector('.but');
    inp.addEventListener('click', function(){
        let div2=document.createElement('div');
        div1.appendChild(div2);
        div2.innerHTML='hello';
        div2.className='nub';
        let input2=document.createElement('input');
        div1.appendChild(input2);
        input2.type='button';
        input2.value='-';
        input2.addEventListener('click', function(){
            div2.remove();
            input2.remove();
        })
    }) */

    
    /* for (var i=0; i<2; i++){
        var a=0;
        console.log(a);
    }
    if(true){
        console.log(i);
    }
    document.addEventListener('loaded', function(){

    }) */
      /*   for (i=0; i<=10; i++){
            for (j=0; j<=10; j++){
                console.log(i, j);
            }
        }
        

let i=0; */
/* function(){
    let b=5;
    if(true){
        let c=6;
    }
    console.log(b);
}; */
/* let kachok={
    name: 'Serega',
    surname:'Machina',
    fullname:function(){
        console.log(this.name, this.surname);
    }
};
let a=kachok;
kachok.name=123;
kachok=null;
a.fullname();
console.log(a.name); */
//kachok.fullname();
//console.log(kachok.name, kachok.surname);


//Калькулятор с this 25.06.2019
/* let input1 = document.querySelector('.inp1');
let input2 = document.querySelector('.inp2');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let division = document.querySelector('.division');;
let mult = document.querySelector('.mult');
let button = document.querySelectorAll('.button');
let result = document.querySelector('.result');

plus.addEventListener('click', function() {
    calc.input1 = input1.value;
    calc.input2 = input2.value;
    calc.sum();
});

minus.addEventListener('click', function() {
    calc.input1 = input1.value;
    calc.input2 = input2.value;
    calc.minus();
});

division.addEventListener('click', function() {
    calc.input1 = input1.value;
    calc.input2 = input2.value;
    calc.divis();
});

mult.addEventListener('click', function() {
    calc.input1 = input1.value;
    calc.input2 = input2.value;
    calc.mult();
});

let calc = {
    input1: null,
    input2: null,
    sum: function() {
        result.innerHTML= +this.input1 + +this.input2;
        input1.value = +this.input1 + +this.input2;
        input2.value=0;
    },
    minus: function() {
        result.innerHTML= +this.input1 - +this.input2;
        input1.value = +this.input1 - +this.input2;
        input2.value=0;
    },
    divis: function() {
        result.innerHTML= +this.input1 / +this.input2;
        input1.value = +this.input1 / +this.input2;
        input2.value=0;
    },
    mult: function() {
        result.innerHTML= +this.input1 * +this.input2;
        input1.value = +this.input1 * +this.input2;
        input2.value=0;
    }
};  */
/* let obj={
    value: 'hello',
    logger: function(){
        this.greeter();
        console.log(this.value);
    },
    greeter: function(){
        console.log('hello2');
    },
    abc:{
        b: function(){
            console.log(this);
        }
    }
}
let a=obj;
obj=null;
  a.logger() ;   
  a.abc.b();  */

 //map
 
 /* const arr=[
    {name: 'Vasya'}, 
    {name: 'petya'},
    {name: 'oksanocka'},
    {name: 'Vitia'},
    {name: 'nikolay'},
    {name: 'marina'},
    {name: 'konstantin'},
    {name: 'Valya'},
    {name: 'Anatholy'},
 ]
let objects=arr.map(function(el){
    // return el.name;
     if(el.name.length>5){
         return el.name;
     }
 });
 let data=objects.filter(function(el){
    return typeof el==='string';
 })
 console.log(data); */
 //filter
 /* let arr =[
     {
         name: 'vasya',
         age: 18,
     },
     {
         name: 'tolya',
         age: 16,
     },
     {
         name: 'kolya',
         age: 180,
     },
     {
         name: 'lyda',
         age: 1,
     },
 ]
 let obj=arr.filter(function(el){
     return el.age>18;
 })
 console.log(obj);
 let res=arr.map(function(el){
     return el.name;
 })
 console.log(res); */
 /* let nedomasiv = ['1', '1', '1'];
 let anothermasiv = ['0', '0', '0',];
 let newArray=anotherarray(function(currentValue, acc){
     return [...acc, ...currentValue];
 }, nedomasiv);
 console.log(newArray); */
 /* let numbers = [1, 2, 3, 4];
 let sum=numbers.reduce(function(prev, curr){
     return prev+curr
 }, 0);
 //0+1 1+2 3+3 6+4
 //Первое значение это prev; Которое стартует в данном случае с нуля
 console.log(sum);
 //Деструкторизация
 let obj = {
     name: '12345677843',
     surname: 'Vasya',
     supperData: {
         topSecret: 'I love node'
     }
 }
 const {surname, supperData}=obj;
 console.log(surname, supperData.topSecret);
 const arr = [1, 2, 3, 4];
 const newArray =[...arr, 8, 9, 10];
 console.log(newArray); */

//сумма простых чисел
 /* let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 
 let arrNew = arr.filter(function(elem) {
     if (elem > 1 && elem % 3 !== 0 && elem % 2 !== 0 || elem == 2|| elem==3) {
         return elem;
     };
 
 });
 console.log(arrNew);
 
 let sumArr = arrNew.reduce(function(sum, curr) {
     return sum + curr;
 });
 console.log(sumArr); 
 

 let count = arr.filter(function(el) {
    if(el==1){
      return false;
    }     
    for(let i=2; i*i<=el; i++){  
      if(el % i == 0){
        return false;
      }      
    }
    return el;  
  });
   /* if(b<3){
                  fin.innerHTML='совсем мало'+' '+b;                
                  }if(b<0){
                  fin.innerHTML='нет столько в наличи';
                      }else{
                      fin.innerHTML=b;                    
              } 
  console.log(count);
 let sumNumbers = count.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  
  console.log(sumNumbers);  */ 

/* 
  let sum=document.querySelector('.sum');
  let button=document.querySelector('button');
  let fin=document.querySelector('.fin');
  let p=document.querySelector('.price');
  let prod=document.querySelector('.product');
  let mass=document.querySelector('.mass');
   function Store (name,price,total){ 
      this.name=name;
      this.price=price;
      this.total=total;
      const self=this;
      button.addEventListener('click', function() {
        console.log(this)
        this.name=prod.value;
        self.mass=mass.value;                                 
        if(this.name==self.name){
        fin.innerHTML= +self.total - +self.mass;        
        sum.innerHTML=self.price*self.mass+' '+'$';           
        } 
              
      });
    }
  
  let silpo1=new Store('Пиво','10','50');
  let silpo2=new Store('Вино','70','40');
  let silpo3=new Store('Хамон','150','30');
  let auto1=new Store('BMW','55000','25');
  let auto2=new Store('Audi','42000','15');
  let auto3=new Store('Honda','23000','10'); 
 */

let ships_red = document.querySelectorAll('.ship_l');
let ships_blue = document.querySelectorAll('.ship_r');
let start = document.querySelector('.start');
start.addEventListener('click', function(){
    for (let i = 0; i<ships_red.length; i++){
        
        console.log(ships_red[i]);
    }
    for (let j = 0; j<ships_blue; j++){
        console.log(ships_blue[j]);
    }
})
  