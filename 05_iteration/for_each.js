const coding = ["js","cpp","perl","ruby","java","c"];

// coding.forEach( function  (item) {
//     console.log(item);
// } );

// coding.forEach( (item) =>{
//     console.log(item);
// } );

// function printMe(item){
//     console.log(item);
// }

// coding.forEach( printMe );

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// } )

const objArr = [
    {
        languageName:"javascript",
        languageFile:"js"
    },
    
    {
        languageName:"java",
        languageFile:"java"
    },
    
    {
        languageName:"C++",
        languageFile:"cpp"
    }    
]

objArr.forEach( (item)=>{
    console.log(item.languageFile);
    console.log(item.languageName);
} );