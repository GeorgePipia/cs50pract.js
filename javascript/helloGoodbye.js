function hello() {
    /* document.querySelector gives ability to look throught an HTML page and extract an element out of that file
    after that we can manipluate that element using javascript code. 
    What ever you want to maniplate will be an parameter of this function
    */
   if(
    document.querySelector('h1')./* go thru the file and find the first h1 element */innerHTML === "Hello!") /* and manipluate 
    inner information change it with goodbye! */ {
    document.querySelector('h1').innerHTML = "Goodbye";
    } else {
        document.querySelector('h1').innerHTML = 'Hello!'; /* Hello! must be exactly Hello! */
    }

}

/* the second option

let tavi = document.querySelector('h1'); იპოვე h1 ელემენტი და შეინახე tavi ში 

 if( და აღარ გიწევს მუდმვიად h1 ელემენტის პოვნა სელექტორით, რადგან შენახულია taviში

    tavi.innerHTML === "Hello!")  {
        tavi.innerHTML = "Goodbye";
    } else {
        tavi.innerHTML = 'Hello!';
    }
    
*/