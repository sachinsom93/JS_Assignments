
function calculator(){
    let result = 0
    let first = Number(document.getElementById("first").value)
    let second = Number(document.getElementById("second").value)
    let operation = document.getElementById("operation").value
    switch(operation){
        case "Add":
            if(!first || !second ){
                alert("Please put both numbers.")
                break
            }
            else{
                result = first + second;
            break;
            }
        case "Subs":
            if(!first || !second ){
                alert("Please put both numbers.")
                break
            }
            else{
                result = first + second;
            break;
            }
        case "Mul":
            if(!first || !second ){
                alert("Please put both numbers.")
                break
            }
            else{
                result = first + second;
            break;
            }
        case "Div": 
            if(!first || !second ){
                alert("Please put both numbers.")
                break
            }
            else{
                result = first + second;
            break;
            }
        case "Root":
            if((first && second ) || (!first && !second)){
                alert("Please use only one input box to enter number.")
                break
            }
            else if(!second){
                result = Math.sqrt(first)
            }
            else if( !first){
                result = Math.sqrt(second)
            }
        case "Per":
            if(!first && !second){
                alert("Please use only both input boxes.")
                break
            }
            else{
                result = first/second * 100
                result = result + "%"
                break
            }
    }
    console.log("%c Answer 4"," color:white; background-color: black; font-weight: bolder;")
    document.getElementById("ans").innerHTML = `<br><br>
                                                <label>Result</label>
                                                <input type= "text" placeholder="result" value="${result}">`
    console.log(result)
}
