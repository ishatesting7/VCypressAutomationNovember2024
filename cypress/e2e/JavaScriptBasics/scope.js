const globalvar = 'I am in global function';

function globalFunction() //Function Declaration 
{
    const localvar = "I am a local variable";
    console.log(globalvar);
    console.log(localvar);
}

globalFunction(); //Functional Call

function hoistingExample()
{
    console.log(x);
    var x = 10;
    console.log(x);

}
hoistingExample();


const a = Math.random();
console.log(a);


const ab = Math.random() * (100-1) + 1;
console.log(ab);

// let - It is mandatory to initialize
// var - no need of initialation - undefined

let m = Math.floor(293.399393);
console.log(m);

// Random value between 5 and 10

let random = Math.floor(Math.random()*(10-5)) + 5;
console.log(random);