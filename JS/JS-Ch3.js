// Javascript in the browser
/* 

Javascript was initially created to maked web page alive. JS can be written right in a web page's HTML to make it interactive.
Browser have the embedded engine called the javascript engine or the javascript runtime.
Javascript ability in the browser is very limited to protect the user's safety.
For ex - a webpage on http://goofle.com cannot access http://webscraper.com and steal the iinformation from there.

Advantage of using separte javascript file is that there will be separation of concerns 
and the browser will download it and store it in its cache.

To list all function of console object run console.log(console)
console.time('a') and console.timeEnd('a')

alert, prompt and confirm (BOM) in browser - The exact location and look is determine by the browser which is a limitation. It also block the main execution thread of Javascript.

We have following when JS runs in a browser.
        |-DOM
Window -|-BOM
        |-JS Core

Window object represent browser windo and provides method to control it. It is a global object.
DOM represent the page content as HTML.
BOM represent additional object provided by the browser(host env) for working with everything except the document.

Ex - 1 - Guess the number
var score = 100
var rand = Math.floor((Math.random() * 100) + 1);
var input;
while(input!=rand){
    score = score-1
    input = prompt("Enter the number : ")
    if(input==rand){
        console.log('Congratulation! You guess the actual number in ${100-score}')
    }
    else if(input > rand && input < 100){
        console.log('Your number is greater than the actual number.')
    }
    else if(input < rand && input > 0)
    {
        console.log("Your number is smallerr than the actual number.")
    }
    else{
        console.log('Enter number between 1 to 100')
    }
}

*/


