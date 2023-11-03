document.addEventListener('DOMContentLoaded', function() { /*step 7 
addEveltListener იღებს ორ პარამეტრს DOMConetentLoaded სდა function () ს 
*/
    document.querySelector('button').onclick = count;  
});


let counter = 0; /* Step 3 declare counter variable */

function count() {          /* step 4 create counterf function */
     
    counter++;        /* step 5 add value to the value of variable counter counter = counter + 1; counter +=1 */
    document.querySelector('h1').innerHTML = counter; /* იპოვე h1 და update counterის მნიშვნელობით  დაითვლის */

    if (counter % 10 === 0 ) {
        alert(`Count is now ${counter}`); /* step 6 tamplate literal */ 
    }

    /* alert(counter)     step  display alert  ალერტში ამოაგდე, რაც ქაუნთერშია*/
}

