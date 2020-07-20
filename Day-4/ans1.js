console.log("%c Answer 1"," color:white; background-color: black; font-weight: bolder;")

for(let i = 0; i <= 100 ; i++ ){
    if( i % 3 == 0 && i % 5 != 0){
        console.log(i + " fizz")
    }
    else if( i % 3 != 0 && i % 5 == 0){
        console.log( i + " buzz")
    }
    else if( i % 3 == 0 && i % 5 == 0){
        console.log(i + " fizzbuzz")
    }
}