function memoize(fn)
{
    const cache = new Map();
    return function (...args){

        const key = args.toString();
        console.log('fn called with ' + key);
        console.log(cache);

        if(cache.has(key))
        {
            return cache.get(key);
        }

        cache.set(key, fn(...args));
        return cache.get(key);
    }
}



function add(a,b)
{
    return a+b;
}

function time(fn)
{
    console.time();
    fn();
    console.timeEnd();
}
//Create a method called memoize such that:
const memoizeAdd = memoize(add);//then calling...

time(() => memoizeAdd(100,100));//returns 200
time(() => memoizeAdd(100));//returns 100
time(() => memoizeAdd(100,200))//returns 300
time(() => memoizeAdd(100,100))//returns 200 without computing