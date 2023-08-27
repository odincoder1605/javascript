let a =100;

if(true)
{
    let a =10;
    const b = 20;
    var c = 30;
    // console.log(`INSIDE SCOPE VALUE OF a: ${a}`)
}

// console.log(`GLOBAL SCOPE VALUE OF a: ${a}`); 4 
// console.log(c);

function one() {
    const username = "Himadri";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    
    // console.log(website);

    two();
}

one();

// +++++++++++++++++++ Interesting Example ++++++++++++++++++++


console.log(addone(5));

function addone(num)
{
    return num +1;
}

console.log(addtwo(5));

const addtwo = function(num){
    return num + 2;
}
