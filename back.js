// Function :---> Also called a function declaration or function statement
// function function Name()
// {
    // Statement 
// }

// If i need to add two number ois sum :  I need to write ths type of statement :-->

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);

// function sum(){
//     var a = 10, b = 20;
//     var Total = a+b;
//     console.log(Total);
// }
// sum();

// Challenge time :--> What is the different b/w Function Parameter and Function Argument : 

/// Function parameter is : ====>
//     function sum()
//      {
//    var a = 10, b = 20;var Total = a+b;
//     console.log(Total);
//        }
// And Function Argument is : -- sum();

// Modification in above code :--? without assign any value to parameter. 

// function sum(a,b){
//     var Total = a+b;
//     console.log(Total);
// }
// sum();
// sum(20,60);
// sum(50,64);
// sum(55,22);


////////////  Function Expresssion ///////
// Creat a function and put in t

// function sum(a,b){
//     var Total = a+b;
//     console.log(Total);
// }
// var funExp = sum(5,25);           ---> funExp : This is Name of Function, we cn change we want i.e. Total, A, b, c, d  // 

//////////Return  Keyword //// 


// function sum(a,b){
//     return Total = a+b;
// }
// var funExp = sum(5,25);

// console.log("This is the return value of Function expression with Return keyword " +  funExp );

////// Anonymous Function ///// 


var funExp = function sum(a,b){
    return Total = a+b;
}
/// above code is clled Anonymous function expression ///

/// To run the above code we assign the 'funExp' in a different variable... Isse ham log ushe ek hi word me call kr sakte h. Same a we called in the Function epression. 

// var AFE = funExp(15,55);

// console.log("This is the sum of two number " + AFE);



// console.log("This is the return value of Function expression with Return keyword " +  funExp );



/////============= New Java Script /////////////

// Templet literals //

//// table of 12 code using 'For loop' : ------->

for(let num = 1; num <= 10; num++){
    let TableNo = 12;


/// Now we use Templet literal formula :--->

    console.log(`${TableNo} * ${num} = ${TableNo*num} `);
}











