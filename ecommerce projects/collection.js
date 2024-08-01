var productConatiner = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productConatiner.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUppercase()

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})