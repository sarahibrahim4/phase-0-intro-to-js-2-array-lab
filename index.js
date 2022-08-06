// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
cats.remove();
function destructivelyAppendCat(name){
    cats.push(name);
}
destructivelyAppendCat('Ralph');

function destructivelyPrependCat(name){
    cats.unshift(name);
}
destructivelyPrependCat('Bob');

function destructivelyRemoveLastCat(){
cats.pop();
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const cat1= [...cats,name];
    return cat1;
}
appendCat("Broom");

function prependCat(name){
    const cat2= [name,...cats];
    return cat2;
}
prependCat("Arnold");

cats.remove();
function removeLastCat(number){
    const newCat1 = [...cats];
    newCat1.slice(-2);
    return cats;
}

function removeFirstCat(){
   const cat4=[...cats]
   const removeLast = cat4.slice(0);
   return cats;
}
removeFirstCat();