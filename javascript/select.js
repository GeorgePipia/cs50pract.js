


                                      //იგივეა () => {}
document.addEventListener("DOMContentLoaded", function() { /*I want to run this js when DOM is loaded and this function */
/*
    //find red, and when it is clicked - run this function { }
    document.querySelector('#red').onclick = function() {
        //find hello and style  it s color to red
        document.querySelector('#hello').style.color = 'red';
    }

    document.querySelector('#green').onclick = function() {
        document.querySelector('#hello').style.color = 'grey'
    }

    document.querySelector('#blue').onclick =function() {
        document.querySelector('#hello').style.color = 'pink'
    }
*/
//აგდებს ყველა button tagს არა მხოლოდ პირველს როგორც querySelector გააკეთებდა
//                    function(button) იგივეა (button => {})
document.querySelector('select').onchange = function() { // აქ არ გინდა selectorAll რადგან მთელს თაგს ნიშნავ სელექტორების
    document.querySelector('#hello').style.color = this.value;
    }  

    //onclick
    //onmouseover
    //onkeydown
    //onkeyup
    //onload
    //onblur

    }); 