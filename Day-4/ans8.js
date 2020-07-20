// given function


// function ask(question , yes, no){
//     if(confirm(question))yes()
//     else no()
// }

// ask(
//     "Do you agree ?", 
//     function (){alert("You agreed.")},
//     function (){alert("You canceled the execution");}
// )


// function using arrow syntax
 

let ask = (question, yes, no) => {
    if( confirm(question)){
        yes()
    }
    else{
        no()
    }
}

ask(
    'Do you agree ?  (For converting into arrow syntax in question 8)', 
    () => { alert("You agreed")}, 
    () => { alert("You canceled the execution");}
)