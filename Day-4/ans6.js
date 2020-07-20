let loopBtn = document.getElementById("loop")
loopBtn.addEventListener("click", () => {
    let input = prompt("Enter a value greater then 100.")
    while( !input || input < 100 ){
        input = prompt("Enter value that is greater then 100.")
    }
    console.log("%c Answer 6"," color:white; background-color: black; font-weight: bolder;")
    console.log(input)
})
