//Bind Function

function multiply(a,b)
{
    return this.a*this.b;
}

var resultBind = multiply.bind({a : 10, b : 2});
console.log(resultBind());


//Call Function

function sum()
{
    return console.log(this.a + this.b);
}

var obj = {
    a: 25, b: 30
};

sum.call(obj);


//Apply Function

//I want to understand what am I doing wrong here. Because according to my understanding numArray should bind with the 'this' keyword.
//But this returns undefined.

function arrApply(numbers)
{
    return console.log(this.numbers);
}

var numArray = [3,5,6,8];

arrApply.apply(numArray);