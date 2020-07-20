let btn = document.getElementById("salesBtn")
function reward(sales, com){
    return sales * (com/100)
}
btn.addEventListener("click", () => {
    let result = 0;
    let sales = document.getElementById("sales").value
    switch(true){
        case sales > 0 && sales <= 5000:
            result = reward(sales, 2)
            break
        case sales > 5000 && sales <= 10000:
            result = reward(sales, 5)
            break
        case sales > 10000 && sales <= 20000:
            result = reward(sales, 7)
            break
        case sales > 20000:
            result = reward(sales, 10)
            break
    }
    console.log("%c Answer 5"," color:white; background-color: black; font-weight: bolder;")
    document.getElementById("com").innerHTML = `<label>Commission</label>
                                                <input type="text" value="${"Rs " + result}"></input>`
    console.log(result)
})