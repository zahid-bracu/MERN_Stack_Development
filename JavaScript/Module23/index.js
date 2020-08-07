//------------------- constant variable---------------------
const value=10;
//value=12;
console.log(value);


//---------------------Constant Array------------------------
const array=[11,22,33,44,55,66];
array[3]=123;
array.push(212);
//array=[12,34,53,34];
console.log(array);


//----------------------Constant Object------------------------
const object={
    name:'zahid',
    id:'14101',
    campus:'BRACU'
  }
  object.name="rahman";
  console.log(object);
 
 //  const object={
 //    name:'blank',
 //    id:'Nan',
 //    campus:'None'
 //  }


//  --------------------Let Variable + Scope Variable--------------
for(let i=0;i<=5;i++){
    console.log(`Value ${i}`);
  }
  // console.log(`Outer Value ${i}`);


// -------------------- default value set to function variabe : Part One----------------
function add(x,y){
    y = y || 10;
    return x+y;
  }
  var res=add(10,20);
  console.log(res);

//--------------- default value set to function : Part Two------------------------------
function add(x,y=10){
    return x+y;
  }
  var res=add(10,20);
  console.log(res);

// ---------------- String formation--------------------------------------
var str1="Hello";
var str2="World";
var result= `${str1} ${str2} 100`;
console.log(result);

//------------------ String formation : New Line-------------------
var string=`this is my december
this is my snow covered eyes`;
console.log(string);


//------------------------spread operator--------------------------
var array1=[110,220,330];
var array2=[100,200,300];

var newArray=[...array1,...array2,100];
console.log(newArray);


//--------------------------max value---------------------------
var max=Math.max(...newArray);
console.log(max);


//------------------------class & constructor-----------------------
class student{
  constructor(name,id){
    this.Name=name;
    this.Id=id;
    this.Campus="BRACU";
  }
}

const student1=new student('Zahid',15101122);
const student2=new student('Rahman',19241051);

console.log(student1);
console.log(student2);