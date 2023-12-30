const arr = [5,1,3,2,6];

//this is also correct method to use map
function double(x){
    return x * 2;
};
const output = arr.map(double);
console.log(output);

//these two are also correct method to use map.
// these are higher order function also.
const value = arr.map(function triple(x) {
    return x * 3;
});
console.log(value);

const output1 = arr.map((x) => 
     x.toString(2)
);
console.log(output1);

//filter function
function isOdd(x){
    return x % 2;
}
const output2 = arr.filter(isOdd)
console.log(output2);

//implementation of filter function using arrow function
const output3 = arr.filter((x) => x > 3);
console.log(output3);


