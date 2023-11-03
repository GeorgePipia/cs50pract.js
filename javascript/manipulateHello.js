function hello() {
    /* document.querySelector gives ability to look throught an HTML page and extract an element out of that file
    after that we can manipluate that element using javascript code. 
    What ever you want to maniplate will be an parameter of this function
    */
   
    document.querySelector('h1')./* go thru the file and find the first h1 element */innerHTML = "GoodBye!"; /* and manipluate 
    inner information change it with goodbye! */

}