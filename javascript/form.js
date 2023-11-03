document.addEventListener('DOMContentLoaded', function() { /* step 1 როცა კონტენტს გაუშვებ, ღია ფუნქცია გაუშვი
ჩემი მიზანია, რომ როცა ფორმა submited რაღაც უნდა მოხდეს. 
I - get form step 2*/
    document.querySelector('form').onsubmit /*when you submite the form this code should run
    გაუშვი ეს ფუნქცია, რომელიც აკეთებს ამ რაღაცას */ = function(){

       const name = /*step 5 ამის მარცხნივ რაც არის */ document.querySelector('#name')/* step4 აქამდე იპოვე ის ელემენტი, 
       რომელშიც ჩაწერა იუზერმა და გინდა შეცვალ შეყვანილის value */.value; 
       

       alert(`hello, ${name}`); /* tep 6 */
        
    }
});