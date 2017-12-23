# ES6: Explore Problems with the var Keyword

One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.

    var camper = 'James';
    var camper = 'David';
    console.log(camper);
    // logs 'David'

In a small application, you might not run into this type of problem, but when your code becomes larger, you might accidently overwrite a variable that you did not intend to overwrite. Because this behaviour does not throw an error, searching and fixing bugs becomes more difficult.

Another problem with the var keyword is that it is hoisted to the top of your code when it compiles. This means that you can use a variable before you declare it.

    console.log(camper);
    var camper = 'David';
    // logs undefined

The code runs in the following order:

1. The variable camper is declared as undefined.
2. The value of camper is logged.
3. David is assigned to camper.

This code will run without an error.