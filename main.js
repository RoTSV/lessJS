
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



    let kachok = {
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
       };*/
    
    /*console.log(kachok);*/
/*for(let i in kachok){
console.log(kachok[i]);
console.log(i);
console.log(`Keys is ${i}: ${kachok[i]}`);
if(typeof kachok[i] === 'object'){
    console.log(kachok[i]);
if(typeof kachok[i] ==='string'){
        console.log(kachok[i]);
    } else if(typeof kachok[i] === 'number'){
        console.log(kachok[i]);
    }
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

        let div1=document.querySelector('.div-1');
        let inp=document.querySelector('.inp');
        let div2=document.createElement('div');
        div2.innerHTML='Hello World';
        inp.addEventListener('click', function(){
            
        })
        


        
    