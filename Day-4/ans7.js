let primeBtn = document.getElementById("primeBtn")
primeBtn.addEventListener("click", () => {
    let flag = true
    let n = document.getElementById("prime").value
    for( let i = 2 ; i <= n ; i++){
        for( let j = 2 ; j <= i - 1 ; j++){
            if( i % j === 0 && i !== j){
                flag = false;
                break
            }
        }
        if( flag == true){
            console.log(i)
        }
    }
})