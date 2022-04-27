
var iris = document.getElementsByClassName("iris");
    document.onmousemove = function(){
        var x = event.clientX * 200/ window.innerWidth - 171 + "px";
        var y = event.clientY * 100/ window.innerHeight - 60 + "px";
        //getting the horizontal and vertical coordinates
        // the -170 and -80 are for better centering of the iris element.
        for(var i=0; i<2;i++){
            iris[i].style.left = x;
            iris[i].style.top = y;
            iris[i].style.transform = "translate";
        }
    }
 
    