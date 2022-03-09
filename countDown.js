function countDown(n){

    const counter = setInterval(()=>{
        console.log(n);
        n--;
        if(n==0){
            console.log("here we go...!");
            clearInterval(counter);
        }
    }, 1000)

}

countDown(5);