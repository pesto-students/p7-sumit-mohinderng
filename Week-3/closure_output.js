function createIncrement() 
{
    let count=0;

    function increment ()
    {
        count++;
     
    }
    
    let message=`Count is ${count}`;
    
    function log () 
    {
        console.log(message);
    }

    return[increment,log];
}

const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?


/* # Explaination 

- The Output will be "Count is 0". This is because the message is declared out of the scope of increment function and hence it takes the 
  value of count that exists in the same module as it's own. The message and count are both declared in the scope of the function 
  createIncrement and hence the message would take the value of count from this function's scope which is 0.

  Although we call the increment function thrice but it increments the value of count in the scope of function increment(). The 
  incremented value only exists in the scope of the function increment(). 
*/


