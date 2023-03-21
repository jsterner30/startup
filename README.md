# Populor Opinion

## Elevator Pitch

Popular opinion is a site where users can post their thoughts and ideas and recieve validation from other users. After logging in, a user will see a feed of opinions. From there, the user can upvote or downvote the opinion. Each user is allowed one vote per post. A user can also post an opinion. The site could be used for anything from validating entrepreneurial ideas to policy proposals to favorite food debates.

## Key Features

- The ability for users to post opinions or ideas
- Other users can upvote or downvote posts
- Displays total upvotes
- Displays total downvotes
- User can sort posts by most popular, newest, or most controversial
- Posts and votes are permanently stored

## Rough Sketch

This is a wire frame for the home page of the Popular Opinion site

![](/images/Sketch.png)

## Class Notes

### Internet History
The internet is made up of a huge network of computers. It is governed by certain bodies, including those that control DNS. Over the years, we have gone from just being able to have words on a page with HTML to having styling and interactivity with javascript.

### The Internet
The internet globally connects independent networks and computing devices using the TCP/IP model. Understanding the basics of how the internet works provides you with a mental model for effectively creating web applications. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC).\

When one device what to talk to another it must have an IP address. You can determine the hops in a connection using the traceroute console utility.

### Web Servers
Web servers are computers that are dedicated to serving up webpages on the internet. They have different ports that, when connected with an IP address, allow you to query the computer using http or https. Today, many people run thier servers through AWS or other cloud computing option.

### AWS EC2
An EC2 is an AWS web server that you can pay to use. It functions like an onprem server, except it is not on-prem. You can ssh into it to control it.

### Domain Names
Domain names are human readable urls that front an ip address. You can easily buy an domain name with AWS through a service called Route 53.

### HTTP vs HTTPS
HTTP is the protocol that computers use to communicate. HTTPS is a secure version of that protocol. For a long time, there was a monopoly over https, and it was very expensive to get a certificate. Since 2014, there has been a free, open-source solution. Now every website should use https .

### HTML
HTML is a way to structure and display text on a website. It has opening tags (<>) and closing tags (</>).

### HTML Structure
There are two main types of HTML tags: inline and block. Block tags take up an entire block of the screen. Inline tags stay next to each other.

### HTML Input
There are lots of nifty ways to get iput using HTML. These include:

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

There are also many input types:

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |


You can also have html attributes:


| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

### HTML Media
You can input media like images and videos into HTML. Here is an example of an img:
<img
alt="mountain landscape"
src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg"
/>

Note that the file should be the shortest possible resolvable filepath.


### CSS
CSS (Cascading style sheets) is a way to add style like color and fonts to a webpage.

### CSS Selectors
The first step in understanding CSS is mastering how to select the elements that a CSS rule applies to. The CSS rule selector can take many forms. In order to explain the most common selectors we need some demonstration HTML. Let's image a simple document describing the departments in a university. In our case we have a physics and a chemistry department. The information provided is very sparse, but the structure provided by the HTML is enough to work with.

### CSS Declerations
CSS rule declarations specify a property and value to assign when the rule selector matches one or more elements. There are legions of possible properties defined for modifying the style of an HTML document. For our purposes we will discuss just a few of the more commonly used ones so that you can get a feel for wide variety of functionality they represent.

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

You can use a variety of units when defining the size of a CSS property. For example, a the width of an element can be defined using absolute units such as the number of pixels (px) or inches (in). You can also use relative units such as a percentage of the parent element (50%), a percentage of a minimum viewport dimension (25vmin), or a multiplier of the size of the letter m (1.5rem) as defined by the root element.

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

There are multiple ways to define colors:

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rbg(50%, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |


### CSS Fonts
Choosing appropriate fonts is a key web application design characteristic. A beautiful modern font will make your application enjoyable to use. Picking a hard to read font, an overused font, or using too many fonts will turn users away.

The CSS font-family property defines what fonts should be used. The property value represents an ordered list of fonts. The first font in the list that is available will be used. This ability to select from a list of fonts is important because different operating systems have different default fonts and your first choice may not be available.

In addition to referencing standard fonts found on the user's computer you can specify a font that you provide with your application. That way your application is guaranteed to always look the same. In order to have the browser load a font you use the @font-face rule and provide the font name and source location.

### CSS Animation
Using CSS to animate your components is an easy way to make your application feel alive and interactive. You create CSS animations using the animation properties and defining keyframes for what the element should look like a different times in the animation. Let's walk through an example.

### Responsive Design
When smart mobile devices started gaining popularity they began to be used to view websites. However, the websites were optimized for desktop displays and not little tiny mobile screens. To solve this mobile browsers automatically started scaling the website so that it looked better on a small screen. Unfortunately, as web applications started being responsive to the screen size, the mobile browser's scaling got in the way. The solution is to include a meta tag in the head element of all your HTML pages. This tells the browser to not scale the page.

<meta name="viewport" content="width=device-width,initial-scale=1" />

One of the main CSS features for creating responsive applications is the @media selector. This selector dynamically detects the size and orientation of the device and applies CSS rules to represent the structure of the HTML in a way that accommodates the change.

We can use the @media selector to tell us which side of the screen (technically the viewport) is the longest. A media query takes one or more predicates separated by boolean operators. In our case we simply want to know if the screen is oriented in portrait mode (short side on top) or not. If it is then we transform all of our div elements by rotating them 270 degrees.

@media (orientation: portrait) {
div {
transform: rotate(270deg);
}
}

### Grid
The grid display layout is useful when you want to display a group of child elements in a responsive grid. We start with a container element that has a bunch of child elements.

<div class="container">
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>

We turn this into a responsive grid by including a CSS display property with the value of grid on the container element. This tells the browser that all of the children of this element are to be displayed in a grid flow. The next property, grid-template-columns, specifies that the layout of the grid columns. In this example we say that we want to repeatedly define each column to auto-fill the parent element's width with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unit (1fr) of the grid width. A fractional unit is dynamically computed by splitting up the parent element's width into equal parts for each of the children.

We finish off the grid configuration by saying that we want all rows to be exactly 300 pixels high with the grid-auto-rows property and the use the grid-gap property to say that we want at least a 1 em gap between our grid items.

.container {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-auto-rows: 300px;
grid-gap: 1em;
}

### Flex
The flex display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. In order to demonstrate the power of flex we will build an application that has a header, footer, and a main content area that is split into two sections, with controls of the left and content on the right.

Now we can use Flexbox to make it all come alive. We make the body element into a responsive flexbox by including the CSS display property with the value of flex. This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the flex-direction property with a value of column. We then add some simple other declarations to zero out the margin and fill the entire viewport with our application frame.

statrting CSS:

body {
display: flex;
flex-direction: column;
margin: 0;
height: 100vh;
}

To get the division of space for the flexbox children correct we add the following flex properties to each of the children.

    header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
    footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
    main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because with want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.


header {
flex: 0 80px;
background: hsl(223, 57%, 38%);
}

footer {
flex: 0 30px;
background: hsl(180, 10%, 10%);
}

main {
flex: 1;
display: flex;
flex-direction: row;
}

Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the flex property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain.

section:nth-child(1) {
flex: 1;
background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
flex: 3;
background-color: white;
}

That completes our original design, but we also want to handle small screen sizes. To do this, we add some media queries that drop the header and footer if the viewport gets too short, and orients the main sections as rows if it gets too narrow.

To support the narrow screen (portrait mode), we include a
query that detects when we are in portrait orientation and sets the flex-direction of the main element to be column instead of row. This causes the children to be stacked on top of each other instead of side by side.

To handle making our header and footer disappear when the screen is to short to display them, we use a media query that triggers when our viewport height has a maximum value of 700 pixels. When that is true we change the display property for both the header and the footer to none so that they will be hidden. When that happens the main element becomes the only child and since it has a flex value of 1, it takes over everything.

@media (orientation: portrait) {
main {
flex-direction: column;
}
}

@media (max-height: 700px) {
header {
display: none;
}
footer {
display: none;
}
}

### CSS Frameworks

CSS frameworks are prebuilt CSS components. They can be use by including the something like following line in your head of your html file:

`<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
crossorigin="anonymous"
/>`

## Javascript

## Javascript Console
The JavaScript console object provides interaction with the JavaScript runtime's debugger console. This usage of console should not be confused with your operating system's console (AKA terminal or command line). The console object provides functionality for outputting the value of text and objects, running timers, and counting iterations. These are useful debugging tools when you can actually execute your code in an interactive debugger (such as VS Code).

### Javascipt types 

Variables are declared using either the `let` or `const` keyword. `let` allows you to change the value of the variable while `const` will cause an error if you attempt to change it.

```js
let x = 1;

const y = 2;
```

⚠ Originally JavaScript used the keyword `var` to define variables. This has been deprecated because they cause hard to detect errors in code related to the scope of the variable. You should avoid `var` and always declare your variables either with `let` or `const`.

## Type

JavaScript defines several primitives types.

| Type        | Meaning                                                    |
| ----------- | ---------------------------------------------------------- |
| `Null`      | The type of a variable that has not been assigned a value. |
| `Undefined` | The type of a variable that has not been defined.          |
| `Boolean`   | true or false.                                             |
| `Number`    | A 64 bit signed number.                                    |
| `BigInt`    | A number of arbitrary magnitude.                           |
| `String`    | A textual sequence of characters.                          |
| `Symbol`    | A unique value.                                            |

Of these types Boolean, Number, and String are the types commonly thought of when creating variables. However, variables may commonly refer to the Null or Undefined primitive. Because JavaScript does not enforce the declaration of a variable before you use it, it is entirely possible for a variable to have the type of undefined.

In addition to the above primitives, JavaScript defines several object types. Some of the more commonly used objects include the following.

| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |

## Common operators

When dealing with a number variable, JavaScript supports standard mathematical operators like `+` (add), `-` (subtract), `*` (multiply), `/` (divide), and `===` (equality). For string variables, JavaScript support `+` (concatenation) and `===` (equality).

## Type conversions

JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in. Sometime the results of automatic conversions can be unexpected from programmers who are use to strongly typed languages. Consider the following examples.

```js
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
```

Getting unexpected results is especially common when dealing with the [equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) operator.

```js
1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
```

⚠ The unexpected results happen in JavaScript because it uses [complex rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using) for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.

```js
1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
```

Because strict equality is considered more intuitive, it is almost always preferred and should be used in your code.

Here is a fun example of JavaScript's type conversion. Execute the following in the browser's debugger console.

```js
('b' + 'a' + +'a' + 'a').toLowerCase();
```

## Conditionals

JavaScript support many common programming language conditional constructs. This includes `if`, `else`, and `if else`. Here are some examples.

```js
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```

You can also use the ternary operator. This provides a compact `if else` representation.

```js
a === 1 ? console.log(1) : console.log('not 1');
```

You can use boolean operations in the expression to create complex predicates. Common boolean operators include `&&` (and), `||` (or), and `!` (not).

```js
if (true && (!false || true)) {
  //...
}
```

### Loops

JavaScript support many common programming language looping constructs. This includes `for`, `for in`, `for of`, `while`, `do while`, and `switch`. Here are some examples.

### for

Note the introduction of the common post increment operation (`i++`) for adding one to a number.

```js
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```

### do while

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```

### while

```js
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```

### for in

The `for in` statement iterates over an object's property names.

```js
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
```

For arrays the object's name is the array index.

```js
const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```

### for of

The `for of` statement iterates over an iterable's (Array, Map, Set, ...) property values.

```js
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```

### Break and continue

All of the looping constructs demonstrated above allow for either a `break` or `continue` statement to abort or advance the loop.

```js
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
```
### Javascript Functions 

In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.

The basic syntax of a function begins with the `function` keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement my return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.

```js
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```

A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.

```js
function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
```

## Function parameters

When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is `undefined` when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

```js
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```

## Anonymous functions

Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.

```js
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```

## Creating, passing, and returning functions

Here are examples of assigning functions to variables, as well as using functions as parameters and return values.

```js
// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
```

## Inner functions

Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.

```js
function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish
```

### Arrow functions
Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the arrow syntax was created. This syntax replaces the need for the function keyword with the symbols => placed after the parameter declaration. The enclosing curly braces are also optional.

Thje following are equivalent:

```js

const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (a, b) {
return a - b;
});

// arrow function syntax
a.sort((a, b) => a - b)
```

### Arrays

JavaScript array objects represent a sequence of other objects and primitives. You can reference the members of the array using a zero based index. You can create an array with the Array constructor or using the array literal notation shown below.

```js
const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3
```

## Object functions

The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop`                   |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function sort an array in place                     | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => 1 < 1)`          |

```js
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((a, c) => a + c));
// OUTPUT: 6
console.log(a.sort((a, b) => b - a));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
```

### Objects and classes
A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (`obj.prop`) or bracket notation (`obj['prop']`).

```js
const obj = new Object();

obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```

The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term `object`. Object can refer to the standard JavaScript objects (e.g. `Promise, Map, Object, Function, Date, ...`), or it can refer specifically to the JavaScript Object object (i.e. `new Object()`), or it can refer to any JavaScript object you create (e.g. `{a:'a', b:2}` ). This overloaded usage can be a bit confusing.

## Object-literals

You can also declare a variable of object type with the `object-literal` syntax. This syntax allows you to provide the initial composition of the object.

```js
const obj = {
  a: 3,
  b: 'fish',
};
```

## Object functions

Object has several interesting static functions associated with it. Here are some of the commonly used ones.

| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

```js
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

## Constructor

Any function that returns an object is considered a `constructor` and can be invoked with the `new` operator.

```js
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```

Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

```js
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

## This pointer

Notice in the last example the use of the keyword `this` when we referred to the name property (`this.name`). The meaning of `this` depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the `this` pointer in the instruction on scope.

## Classes

You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one off object. Class declarations looks similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

You can make properties and functions of classes private by prefixing them with a `#`.

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```

## Inheritance

Classes can be extended by using the `extends` keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the `super` function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the `super` keyword.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```

### Regular expressions
Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.

You can create a regular expression using the class constructor or a regular expression literal.

```js
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```

The `string` class has several functions that accept regular expressions. This includes `match`, `replace`, `search`, and `split`. For a quick test to see if there is a match you can use the regular expression object's `test` function.

```js
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```

### Destructuring

Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.

An example of destructuring arrays looks like the following.

```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```

Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.

You can also combine multiple items from the original object using rest syntax.

```js
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```

This works in a similar manner for objects. Except with arrays, the assignment of the associated value was assumed by the positions in the two arrays. When object destructuring, you explicitly specify the properties you want to pull from the source object.

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```

You can also map the names to new variables instead of just using the original property names.

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```

Default values may also be provided for missing ones.

```js
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```

Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables.

```js
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: a
```

### Exceptions

JavaStript supports exception handling using the `try catch` and `throw` syntax. An exception can be triggered whenever your code generates an exception using the `throw` keyword, or whenever an exception is generated by the JavaScript runtime. For example, when an undefined variable is used.

To catch a thrown exception, you wrap a code block with the `try` keyword, and follow the try block with a `catch` block. If within the try block, including any functions that block calls, an exception is thrown then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called.

In addition to a catch block, you can specify a `finally` block that is always called whenever the `try` block is exited regardless if an exception was ever thrown.

The basic syntax looks like the following.

```js
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

For example:

```js
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```

⚠ When first using exception handling it is tempting to use it as way to handle normal flows of execution. For example, throwing a `file not found` exception when it is common for users to request nonexistent files. Throwing exceptions should only happen when something truly exceptional occurs. For example, a `file not found` exception when the file is required for your code to run, such as a required configuration file. You code will be easier to debug, and your logs more meaningful if you restrict exceptions to truly exceptional situations.

## Fallbacks

The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.

```js
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```

### Document Object Model (DOM)
The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name `document` that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name `document` you will see the DOM for the document the browser is currently rendering.

```html
> document

<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

<img src="dom.jpg"/>

## Accessing the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The [DOM Element Interface](https://developer.mozilla.org/en-US/docs/Web/API/Element) provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through the every element in the tree.

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content with the `innerHTML` property.

```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

## Modifying the DOM

The DOM supports the ability insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

To delete elements call the `removeChild` function on the parent element.

```js
function deleteChild(parentSelector) {
  const el = document.querySelector(parentSelector);
  el.parentElement.removeChild(el);
}

deleteChild('#courses div');
```

## Injecting HTML

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first `div` element in the DOM and replaces all the HTML it contains.

```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

```html
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```

Make sure that if you are injected HTML that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.

## Event Listeners

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Here is an example of an event listener that gets called when an element gets clicked.

```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events).

### Promises
JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript `Promise`. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

```js
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

## Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either `heads` or `tails`.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the `then`, `catch` and `finally` functions to the coinToss object in order to handle each of the possible results.

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${result}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

## The observer pattern

Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The `Observer` pattern, popularized by web programming frameworks such as `Angular`, use a model called `Observer`. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

### Async/Await

JavaScript Promise objects are great for asynchronous execution, but as developers began build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the `async/await` syntax. The `await` keyword wraps the execution of a promise and removed the need to chain functions. The `await` expression will block until the promise state moves to `fulfilled`, or throws an exception if the state moves to `rejected`. For example, if we have a function that returns a coin toss promise.

```js
const tossCoin = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
```

We can create equivalent executions with either a promise `then/catch` chain, or an `await` with a `try/catch` block.

**then/catch chain version**

```js
tossCoin()
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    console.error('failure');
  });
```

**async, try/catch version**

```js
try {
  const result = await tossCoin();
  console.log(result);
} catch {
  console.error('failure');
}
```

## Async

One important restriction for working with `await` is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the `async` keyword. Applying the `async` keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.

```js
function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
```

If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and have a value that is the return value of the function.

```js
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```

We then change the cow function to explicitly create a promise instead of using the automatically resolved promise that the await keyword generates if the return value of the function is not already a promise.

```js
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```

You can see that the promise is in the pending state because the promise's execution function has not yet resolved.

## Node.js

### URLS

The Uniform Resource Locator (URL) represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter, or gaming session.

Looking at the different parts of a URL is a good way to understand what it represents. Here is an example URL that represents the summary of accepted CS 260 BYU students that is accessible using secure HTTP.

```js
https://byu.edu:443/cs/260/student?filter=accepted#summary
```

The URL syntax uses the following convention. Notice the delimiting punctuation between the parts of the URL. Most parts of the URL are optional. The only ones that are required are the scheme, and the domain name.

```yaml
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
```

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents an sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                    |

Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.

#### URL, URN, and URI

You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be `urn:isbn:10,0765350386`. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL and URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

### Ports
When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.

The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. [Here](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) is the link to IANA's registry.

Here is a list of common port numbers that you will might come across.

| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

### HTTP
HTTP is how the web talks. When a web browser makes a request to a web server it does it using the HTTP protocol. In previous instruction we discussed how to use HTTP. Now, we will talk about the internals of HTTP. Just like becoming fluent in a foreign language make a visit to another country more enjoyable, understanding how to speak HTTP helps you communicate effectively when talking on the web.

When a web client (e.g. a web browser) and a web server talk they exchange HTTP requests and responses. The browser will make an HTTP request and the server will generate an HTTP response. You can see the HTTP exchange by using the browser's debugger or by using a console tool like Curl. For example, in your console you can use curl to make the following request.

```sh
curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
```

### Request

The HTTP request for the above command would look like the following.

```http
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

An HTTP request has this general syntax.

```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

The first line of the HTTP request contains the `verb` of the request, followed by the path, parameters, and anchor of the URL, and finally the version of HTTP being used. The following lines are optional headers that are defined by key value pairs. After the headers you have an optional body. The body start is delimited from the headers with two new lines.

In the above example, we are asking to `GET` a resource found at the path `/hypertext/WWW/Helping.html`. The version used by the request is `HTTP/1.1`. This is followed by two headers. The first specifies the requested host (i.e. domain name). The second specifies what type of resources the client will accept. The resource type is always a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) as defined by internet governing body IANA. In this case we are asking for HTML.

#### Response

The response to the above request looks like this.

```yaml
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

An HTTP response has the following syntax.

```yaml
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```

You can see that the response syntax is similar to the request syntax. The major difference is that the first line represents the version and the status of the response.

Understanding the meaning of the common HTTP verbs, status codes, and headers is important for you to understand, as you will use them in developing a web application. Take some time to internalize the following common values.

## Verbs

There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

#### Status codes

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within those ranges here are some of the more common codes. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for a full description of status codes.

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

#### Headers

📖 **Suggested reading**: [MDN HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. Some common headers that you will use include the following.

| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |

#### Body

The format of the body of an HTTP request or response is defined by the `Content-Type` header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the `accept` header.

#### Cookies

![Cookie](webServicesCookie.png)

📖 **Suggested reading**: [MDN Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the `cookie`. Cookies are generated by a server and passed to the client as an HTTP header.

```http
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```

The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.

```http
HTTP/2 200
Cookie: myAppCookie=tasty
```

This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies, the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.

#### HTTP Versions

HTTP continually evolves in order to increase performance and support new types of applications. You can read about the evolution of HTTP on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP).

| Year | Version | Features                                        |
| ---- | ------- | ----------------------------------------------- |
| 1990 | HTTP0.9 | one line, no versions, only get                 |
| 1996 | HTTP1   | get/post, header, status codes, content-type    |
| 1997 | HTTP1.1 | put/patch/delete/options, persistent connection |
| 2015 | HTTP2   | multiplex, server push, binary representation   |
| 2022 | HTTP3   | QUIC for transport protocol, always encrypted   |

### Fetch

The ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages (Web 1.0) to one of web applications (Web 2.0) that fully interact with the user. Microsoft introduced the first API for making HTTP requests from JavaScript with the [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

Today, the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is the preferred way to make HTTP requests. The `fetch` function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.

The basic usage of fetch takes a URL and returns a promise. The promise `then` function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type `application/json` you can use the `json` function on the response object to convert it to a JavaScript object.

The following example makes a fetch request to get and display an inspirational quote.

```js
fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

**Response**

```js
{
  content: 'Never put off till tomorrow what you can do today.',
  author: 'Thomas Jefferson',
};
```

To do a POST request you populate the options parameter with the HTTP method and headers.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

### Node.js
## Installing NVM and Node.js

Your production environment web server comes with Node.js already install. However, you will need to install Node.js in your development environment if you have not already. The easiest way to install Node.js is to first install the `Node Version Manager` (NVM) and use it to install, and manage, Node.js.

### Installing on Windows

If you are using Windows, then follow the installation instructions from the [windows-nvm](https://github.com/coreybutler/nvm-windows#installation--upgrades) repository. Click on `latest installer` and then scroll down to the `Assets` and download and execute nvm-setup.exe. Once the installation is complete, you will need to open a new console window so that it gets the updated path that includes NVM.

In the console application install the long term support (LTS) version of Node.

```sh
➜ nvm install lts
➜ nvm use lts
```

### Installing on Linux or MacOS

If you are using Linux or MacOS then you can install NVM with the following console commands.

```sh
➜ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

➜ . ~/.nvm/nvm.sh
```

In the console application install the long term support (LTS) version of Node.

```sh
➜ nvm install --lts
```

## Checking that Node is installed

The node.js console application is simply called `node`. You can verify that Node is working correctly by running node with the `-v` parameter. Note that your version might be different than what is shown here.

```sh
➜ node -v
v16.15.1
```

## Running programs

You can execute a line of JavaScript with Node.js from your console with the `-e` parameter.

```sh
➜  node -e "console.log(1+1)"
2
```

However, to do real work you need to execute an entire project composed of dozens or even hundreds of JavaScript files. You do this by creating a single starting JavaScript file, named something like `main.js`, that references the code found in the rest your project. You then execute your code by running `node` with main.js as a parameter. For example, with the following JavaScript saved to a file named `main.js`

```js
function countdown() {
  let i = 0;
  while (i++ < 5) {
    console.log(`Counting ... ${i}`);
  }
}

countdown();
```

We can execute the JavaScript by passed the file to node, and receive the following result.

```sh
➜  node main.js
Counting ... 1
Counting ... 2
Counting ... 3
Counting ... 4
Counting ... 5
```

You can also run node in interpretive mode by executing it without any parameters and then typing your JavaScript code directly into the interpreter.

```sh
➜ node
Welcome to Node.js v16.15.1.
> 1+1
2
> console.log('hello')
hello
```

## Node package manager

While you could write all of the JavaScript for everything you need, it is always helpful to use preexisting packages of JavaScript for implementing common tasks. To load a package using Node.js you must take two steps. First install the package locally on your machine using the Node Package Manager (NPM), and then include a `require` statement in your code that references the package name. NPM is automatically installed when you installed Node.js.

NPM knows how to access a massive repository of preexisting packages. You can search for packages on the [NPM website](https://www.npmjs.com/). However, before you start using NPM to install packages you need to initialize you code to use NPM. This is done by creating a directory that will contain your JavaScript and then running `npm init`. NPM will step you through a series of questions about the project you are creating. You can press the return key for each of questions if you want to accept the defaults. If you are always going to accept all of the defaults you can use `npm init -y` and skip the Q&A.

```sh
➜  mkdir npmtest
➜  cd npmtest
➜  npm init -y
```

## Package.json

If you list the files in directory you will notice that it has created a file named `package.json`. This file contains three main things: 1) Metadata about your project such as its name and the default entry JavaScript file, 2) commands that you can execute to do things like run, test, or distribute your code, and 3) packages that this project depends upon. With NPM initialized to work with your project, you can now use it to install a node package. As a simple example, we will install a package that knows how to tell jokes. This package is called `give-me-a-joke`. You can search for it on the [NPM website](https://www.npmjs.com/), see how often it is installed, examine the source code, and learn about who created it. You install the package using `npm install` followed by the name of the package.

```sh
➜  npm install give-me-a-joke
```

If you again examine the contents of the `package.json` file you will see a reference to the newly installed package dependency. If you decide you no longer want a package dependency you can always remove it with the `npm uninstall <package name here>` console command.

⚠ Note that when you start installing package dependencies NPM will create an additional file named `package-lock.json` and a directory named `node-modules` in your project directory. The `node-modules` directory contains the actual JavaScript for the package and all of its dependent packages. As you install several packages this directory will start to get very large. You do **not** want to check this directory into your source control system since it is so large and can be rebuilt using the information contained in the `package.json` and `package-lock.json` files. So make sure you include `node-modules` in your `.gitignore` file.

When you clone your source code from GitHub to a new location, just run `npm install` in the project directory. This will cause NPM to download all of the previously installed packages and recreate the `node-modules` directory. The `package-lock.json` file tracks the version of the package that you installed. That way if rebuild your `node-modules` directory you will have the version of the package you initially installed and not the latest available version, which might not be compatible with your code.

With NPM and the joke package installed, you can now use the package in a JavaScript file by referencing the package name as a parameter to the `require` function. This is then followed by a call the joke object's `getRandomDadJoke` function to actually generate a joke.

```js
const giveMeAJoke = require('give-me-a-joke');
giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```

If we run this code using node we get the following result.

```sh
➜  node main.js
What do you call a fish with no eyes? A fsh.
```

This may seem like a lot of work but after you do it a few times it will begin to feel natural. Just remember the main steps.

1. Create your project directory
1. Initialize it for use with NPM by running `npm init -y`
1. Make sure `.gitignore` file contains `node-modules`
1. Install any desired packages with `npm install <package name here>`
1. Add `require('<package name here>')` to your JavaScript code
1. Run your code with `node main.js`

## Creating a web service

With JavaScript we can write code that listens on a server port (e.g. 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.

The following example first initializes the use of NPM and installs the package `http`. The http package contains the functionality for listening on server ports and manipulating HTTP requests.

```sh
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y
➜ npm install http
```

Now we can create our HTTP server using the `http.createServer` function and provide it with a callback function that takes a request (`req`) and response (`res`) object. That function is called whenever the server receives an HTTP request. In our example, the callback always returns the same HTML snippet, with a status code of 200, and a Content-Type header, no matter what request is made. Basically this is just a simple dynamically generated HTML page. A real web service would examine the HTTP path and return meaningful content based upon the purpose of the endpoint.

The `server.listen` call starts listening on port 8080 and blocks until the program is terminated.

```js
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node.js!</h1>');
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```

We execute the program by passing our JavaScript to Node. If the service starts up correctly then it should look like the following.

```sh
➜ node main.js
Web service listening on port 8080
```

You can now open you browser and point it to `localhost:8080` and view the result. The interaction between the JavaScript, node, and the browser looks like this.

![Node HTTP](webServicesNodeHttp.jpg)

You can kill the process by pressing `CTRL-C` in the console.

DB Services

Here is a list of some of the popular data services that are available.

| Service       | Specialty             |
| ------------- | --------------------- |
| MySQL         | Relational queries    |
| Redis         | Memory cached objects |
| ElasticSearch | Ranked free text      |
| MongoDB       | JSON objects          |
| DynamoDB      | Key value pairs       |
| Neo4J         | Graph based data      |
| InfluxDB      | Time series data      |

## MongoDB

![MongoDB logo](webServicesMongoLogo.png)

For the projects in this course that require data services, we will use `MongoDB`. Mongo increases developer productivity by using JSON objects as its core data model. This makes it easy to have an application that uses JSON from the top to the bottom of the technology stack. A mongo database is made up of one or more collections that each contain JSON documents. You can think of a collection as a large array of JavaScript objects, each with a unique ID. The following is a sample of a collection of houses that are for rent.

```js
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```

Unlike relational databases that require a rigid table definition where each column must be strictly typed and defined beforehand, Mongo has no strict schema requirements. Each document in the collection usually follows a similar schema, but each document may have specialized fields that are present, and common fields that are missing. This allows the schema of a collection to morph organically as the data model of the application evolves. To add a new field to a Mongo collection you just start insert the field into the documents as desired. If the field is not present, or has a different type in some documents, then the document simply doesn't match the query criteria when the field is referenced.

The query syntax for Mongo also follow a JavaScript inspired flavor. Consider the following queries on the houses for rent collection that was shown above.

```js
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```

### Using MongoDB in your application

📖 **Deeper dive reading**: [MongoDB tutorial](https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/)

The first step to using Mongo in your application is to install the `mongodb` package using NPM.

```sh
➜ npm install mongodb
```

With that done you then use the `MongoClient` object to make a client connection to the database server. This requires a username, password, and the hostname of the database server.

```js
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const uri = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(uri);
```

With the client connection you can then get a database object and from that a collection object. The collection object allows you to insert, and query for, documents. You do not have to do anything special to insert a JavaScript object as a Mongo document. You just call the `insertOne` function on the collection object and pass it the JavaScript object. When you insert a document, if the database or collection does not exists, Mongo will automatically create them for you. When the document is inserted into the collection it will automatically be assigned a unique ID.

```js
const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
```

To query for documents you use the `find` function on the collection object. Note that the find function is asynchronous and so we use the `await` keyword to wait for the promise to resolve before we write them out to the console.

```js
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

If you do not supply any parameters to the `find` function then it will return all documents in the collection. In this case we only get back the single document that we previously inserted. Notice that the automatically generated ID is returned with the document.

**Output**

```js
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
```

You can provide a query and options to the `find` function. In the example below we query for a `property_type` of Condo that has less than two bedrooms. We also specify the options to sort by descending price, and limit our results to the first 10 documents.

```js
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

The query matches the document that we previously inserted and so we get the same result as before.

There is a lot more functionality that MongoDB provides, but this is enough to get you started. If you are interested you can explore the tutorials on their [website](https://www.mongodb.com/docs/).

## Keeping your keys out of your code

You need to protect your credentials for connecting to your Mongo database. One common mistake is to check them into your code and then post it to a public GitHub repository. Instead you can load your credentials when the application executes. One common way to do that, is to read them from environment variables. The JavaScript `process.env` object provides access to the environment.

```Javascript
const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error("Database not configured. Set environment variables");
}
```

Following this pattern requires you to set these variables in your development and production environments before you can successfully execute.

### Setting environment variables for your **production** environment

For your production environment, you will add your MongoDB Atlas credentials by using SSH to access your production server and modifying the `/etc/environment` file.

```
sudo vi /etc/environment
```

In the environment file will find that the credentials are already set to access the class demo MongoDB server. You want to replace those values with your own values so that your data will be stored in your server.

```sh
export MONGOUSER=<yourmongodbusername>
export MONGOPASSWORD=<yourmongodbpassword>
export MONGOHOSTNAME=<yourmongodbhostname>
```

When you are done modifying the `/etc/environment` with your MongoDB username, password, and hostname, save the file. It will look something like the following.

```sh
export MONGOUSER=cs260mongo
export MONGOPASSWORD=toomanysecrets
export MONGOHOSTNAME=cs260.nan123cs.mongodb.net
```

You then need to tell your Simon and Start Up services to use the new values found in the environment file. To do this you need to tell our service service daemon, PM2, to reload its stored environment for all services that it manages. Run this command from a SSH session on your production server.

```sh
pm2 restart all --update-env
```

### Setting environment variables for your **development** environment

For your development environment add the same environment variables. Depending on what operating system and console you are using, how you add the variables will be different.

**`Linux`**

1. Modify /etc/environment

**`Mac` (Zsh)**

1. Modify ~/.zprofile

**`Windows`**

1. From the Start Menu search for "system environment variables" in the search bar
1. Go to the Advanced Tab
1. Click on Environment Variables
1. Under SYSTEM variables click on NEW
1. Add the variables information and click APPLY and OK
1. Restart program needing the variables

If necessary consult the documentation for the operating system, or console shell, you are using for the details on how to set environment variables.

## Managed services

Historically each application development team would have developers that managed the data service. Those developers would acquisition hardware, install the database software, monitor the memory, cpu, and disk space, control the data schema, and handle migrations and upgrades. Much of this work has now moved to services that are hosted and managed by a 3rd party. This relieves the development team from much of the day to day maintenance. The team can instead focus more on the application and less on the infrastructure. With a managed data service you simply supply the data and the service grows, or shrinks, to support the desired capacity and performance criteria.

### MongoDB Atlas

All of the major cloud providers offer multiple data services. For this class we will use the data service provided by MongoDB called [Atlas](https://www.mongodb.com/atlas/database). No credit card or payment is required to setup and use Atlas, as long as you stick to the shared cluster environment.

[![Mongo sign up](webServicesMongoSignUp.jpg)](https://www.mongodb.com/atlas/database)

This [video tutorial](https://www.youtube.com/watch?v=daIH4o75KE8) will step you through the process of creating your account and setting up your database. Note that some of the Atlas website interface may be slightly different, but the basic concepts should all be there is some shape or form. The main steps you need to take are:

1. Create your account.
1. Create a database cluster.
1. Create your root database user credentials. Remember these for later use.
1. Set network access to your database to be available from anywhere.
1. Copy the connection string and use the information in your code.
1. Save the connection and credential information in your production and development environments as instructed above.

You can always find the connection string to your Atlas cluster by pressing the `Connect` button from your Database > DataServices view.

![Atlas connection string](webServicesMongoConnection.gif)

With that all done, you should be good to use Atlas from both your development and production environments. You can test that things are working correctly with the following example.

```js
const { MongoClient } = require('mongodb');

// Read the credentials from environment variables so that you do not accidentally check in your credentials
const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${userName}:${password}@${hostname}`;
  const client = new MongoClient(url);
  const collection = client.db('rental').collection('house');

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```

To execute the above example, do the following:

1. Create a directory called `mongoTest`
1. Save the above content to a file named `main.js`
1. Run `npm init -y`
1. Run `npm install mongodb`
1. Run `node main.js`.

This should output something like the following if everything is working correctly.

```js
{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}
```

Authorization and Authentication

# Authorization services

If your application is going to remember a user's data then it will need a way to uniquely associate the data with a particular credential. That usually means that you `authenticate` a user by asking for information, such as an email address and password. You then remember, for some period of time, that the user has authenticated by storing an `authentication token` on the user's device. Often that token is stored in a [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie) that is passed back to your web service on each request. The service can now associate data that the user supplies with a unique identifier that corresponds to their authorization token.


Determining what a user is `authorized` to do in your application is also important. For example, you might have different roles in your application such as Administrators, Editors, and Customers. Once you have the ability to authenticate a user and store information about that user, you can also store the authorization for the user. A simple application might have a single field that represents the role of the user. The service code would then use that role to allow, limit, or prevent what a service endpoint does. A complex web application will usually have very powerful authorization representation that controls the user's access to every part of the application. For example, an Editor role might have authorization only to work on content that they created or were invited to.


As you might imagine, authentication and authorization can become very complex, very quickly. It is also a primary target for a hacker. If they can bypass the authentication or escalate what they are authorized to do then they can gain control of your application. Additionally, constantly forcing users to authenticate in a secure way causes users to not want to use an application. This creates opposing priorities. Keep the system secure or make it easy to use.

In an attempt to remove the complexity of authentication and authorization from your application many service providers and package developers have created solutions that you can use. Assuming that you are using a trusted, well tested, service this is an attractive option because it removes the cost of building, testing, and managing that critical infrastructure yourself.

Authorization services often use standard protocols for authenticating and authorizing. These include standards such as [OAuth](https://en.wikipedia.org/wiki/OAuth), [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language), and [OIDC](https://en.wikipedia.org/wiki/OpenID). Additionally, they usually support concepts like `Single Sign On` (SSO) and Federated Login. Single sign on allows a user to use the same credentials for multiple web applications. For example, you can login into GitHub using your Google credentials. Federated login allows a user to login once and then the authentication token reused to automatically log the user into multiple websites. For example, logging into Gmail allows you to also use Google Docs and YouTube without logging in again.


# Account creation and login

The first step towards supporting authentication in your web application is providing a way for users to uniquely identify themselves. This usually requires two service endpoints. One to initially `create` an authentication credential, and a second to authenticate, or `login`, on future visits. Once a user is authenticated we can control access to other endpoints. For example, web services often have a `getMe` endpoint that gives information about the currently authenticated user. We will implement this endpoint to demonstrate that authentication is actually working correctly.

## Endpoint design

Using HTTP we can map out the design of each of our endpoints.

### Create authentication endpoint

This takes an email and password and returns a cookie containing the authentication token and user ID. If the email already exists it returns a 409 (conflict) status code.

```http
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

### Login authentication endpoint

This takes an email and password and returns a cookie containing the authentication token and user ID. If the email does not exist or the password is bad it returns a 401 (unauthorized) status code.

```http
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

```

### GetMe endpoint

This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.

```http
GET /user/me HTTP/2
Cookie: auth=tokenHere
```

```http
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}

```

## Web service

With our service endpoints designed, we can now build our web service using Express.

```js
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

Follow these steps, and then add in the code from the sections that follow. There is a copy of the final version of the example at the end of this instruction. If you get lost, or things are not working as expected, refer to the final version.

1. Create a directory called `authTest` that we will work in.
1. Save the above content to a file named `main.js`. This is our starting web service.
1. Run `npm init -y` to initial the project to work with node.js.
1. Run `npm install express cookie-parser mongodb uuid bcrypt` to install all of the packages we are going to use.
1. Run `node main.js` or press `F5` in VS Code to start up the web service.
1. You can now open a console window and use curl to try out one of the endpoints.

   ```sh
   ➜  curl -X POST localhost:8080/auth/create

   {"id":"user@id.com"}
   ```

## Handling requests

With our basic service created, we can now implement the create authentication endpoint. The first step is to read the credentials from the body of the HTTP request. Since the body is designed to contain JSON we need to tell Express that it should parse HTTP requests, with a content type of `application/json`, automatically into a JavaScript object. We do this by using the `express.json` middleware. We can then read the email and password directly out of the `req.body` object. We can test that this is working by temporarily including them in the response.

```js
app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});
```

```sh
➜  curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'

{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}
```

Now that we have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address. If we do, then we immediately return a 409 (conflict) status code. Otherwise we create a new user and return the user ID.

```js
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
```

## Using the database

We want to persistently store our users in Mongo and so we need to set up our code to connect to and use the database. This code is explained in the instruction on data services if you want to review what it is doing.

```js
const { MongoClient } = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');
```

With a Mongo collection object we can implement the `getUser` and `createUser` functions.

```js
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}
```

But, we are missing a couple of things. We need to a real authentication token, and we cannot simply store a clear text password in our database.

## Generating authentication tokens

To generate a reasonable authentication token we use the `uuid` package. [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) stands for Universally Unique Identifier, and it does a really good job creating a hard to guess, random, unique ID.

```js
const uuid = require('uuid');

token: uuid.v4();
```

## Securing passwords

Next we need to securely store our passwords. Failing to do so is a major security concern. If, and it has happened to many major companies, a hacker is able to access the database, they will have the passwords for all of your users. This may not seem like a big deal if your application is not very valuable, but users often reuse passwords. That means you will also provide the hacker with the means to attack the user on many other websites.

So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.

To hash our passwords we will use the `bcrypt` package. This creates a very secure one way hash of the password. If you are interested in understanding how [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) works, it is definitely worth the time.

```js
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

## Passing authentication tokens

We now need to pass our generated authentication token to the browser when the login endpoint is called, and get it back on subsequent requests. To do this we use HTTP cookies. The `cookie-parser` package provides middleware for cookies and so we will leverage that.

We import the `cookieParser` object and then tell our app to use it. When a user is successfully created, or logs in, we set the cookie header. Since we are storing an authentication token in the cookie we want to make it as secure as possible, and so we use the `httpOnly`, `secure`, and `sameSite` options.

- `httpOnly` tells the browser to not allow JavaScript running on the browser to read the cookie.
- `secure` requires HTTPS to be used when sending the cookie back to the server.
- `sameSite` will only return the cookie to the domain that generated it.

```js
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```

## Login endpoint

The login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using `bcrypt.compare`, and if successful set the authentication token in the cookie. If the password does not match, or there is no user with the given email, the endpoint returns status 401 (unauthorized).

```js
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## GetMe endpoint

With everything in place to create credentials and login using the credentials, we can now implement the `getMe` endpoint to demonstrate that it all actually works. To implement this we get the user object from the database by querying on the authentication token. If there is not an authentication token, or there is no user with that token, we return status 401 (unauthorized).

```js
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## Final code

Here is the full example code.

```js
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## Testing it out

With everything implemented we can use curl to try it out. First start up the web service from VS Code by pressing `F5` and selecting `node.js` as the debugger if you have not already done that. You can set breakpoints on all of the different endpoints to see what they do and inspect the different variables. Then open a console window and run the following curl commands. You should see similar results as what is shown below. Note that the `-c` and `-b` parameters tell curl to store and use cookies with the given file.

```sh
➜  curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'

{"id":"639bb9d644416bf7278dde44"}


➜  curl -c cookie.txt -X POST localhost:8080/auth/login -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'

{"id":"639bb9d644416bf7278dde44"}


➜  curl -b cookie.txt localhost:8080/user/me

{"email":"지안@id.com"}
```

# WebSocket

![webSocket](webServicesWebSocketsLogo.png)

HTTP is based on a client server architecture. A client always initiates the request and the server responds. This is great if you are building a global document library connected by hyperlinks, but for many other use cases it just doesn't work. Applications for notifications, distributed task processing, peer to peer communication, or asynchronous events need communication that is initiated by two or more connected devices.

For years, web developers created hacks to worked around the limitation of the client/server model. This included solutions like having the client frequently pinging the server to see if the server had anything to say, or keeping client initiated connections open for a very long time as the client waited for some event to happen on the server. Needless to say, none of these solutions were elegant or efficient.

Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. Meaning that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer to peer connection where either party can efficiently send data at any time.

![WebSocket Upgrade](webServicesWebSocketUpgrade.jpg)

WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.

![WebSocket Peers](webServicesWebSocketPeers.jpg)

## Creating a WebSocket conversation

JavaScript running on a browser can initiate a websocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.

You can then send messages with the `send` function, and register a callback using the `onmessage` function to receive messages.

```js
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```

The server uses the `ws` package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a `connection: Upgrade` header.

When a connection is detected it calls the server's `on connection` callback. The server can then send messages with the `send` function, and register a callback using the `on message` function to receive messages.

```js
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```
# Debugging WebSocket

You can debug both sides of the WebSocket communication with VS Code to debug the server, and Chrome to debug the client. When you do this you will notice that Chrome's debugger has support specifically for working with WebSocket communication.

![WebSocket debugger](webServicesWebSocketDebugger.jpg)

## Debugging the server

1. Create a directory named `testWebSocket` and change to that directory.
1. Run `npm init -y`.
1. Run `npm install ws`.
1. Open VS Code and create a file named `main.js`. Paste the following code.

   ```js
   const { WebSocketServer } = require('ws');

   const wss = new WebSocketServer({ port: 9900 });

   wss.on('connection', (ws) => {
     ws.on('message', (data) => {
       const msg = String.fromCharCode(...data);
       console.log('received: %s', msg);

       ws.send(`I heard you say "${msg}"`);
     });

     ws.send('Hello webSocket');
   });
   ```

1. Set breakpoints on the `ws.send` lines so you can inspect the code executing.
1. Start debugging by pressing `F5`. The first time you may need to choose Node.js as the debugger.


## Debugging the client

1. Open the Chrome debugger by pressing `F12`.
1. Paste this code into the debugger console window and press enter to execute it. Executing this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server.

   ```js
   const socket = new WebSocket('ws://localhost:9900');

   socket.onmessage = (event) => {
     console.log('received: ', event.data);
   };
   ```

1. Select the `Network` tab and then select the HTTP message that was generated by the execution of the above client code.
1. With the HTTP message selected, you then click the `Messages` tab to view the WebSocket messages
1. Send a message to the server by executing the following in the debugger console window. This will cause the second server breakpoint to hit. Explore and then remove the breakpoint from the server.
   ```js
   socket.send('I am listening');
   ```
1. You should see the messages in the `Messages` debugger window.
1. Send some more messages and observe the communication back and forth without stopping on the breakpoints.

# WebSocket chat

With the understanding of what WebSockets are, the basics of using them from Node and the browser, and the ability to debug the communication, it is time to use WebSocket to build a simple chat application.

![WebSocket Peers](webServicesWebSocketPeers.jpg)

In this example we will create an HTML page that uses WebSockets and displays the resulting chat. The server will forward the WebSocket communication from the different clients.

## Chat client

The HTML for the client provides an input for the user's name, an input for creating messages, and an element to display the messages that are sent and received.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <input id="my-name" type="text" />
      </fieldset>
    </div>

    <fieldset id="chat-controls" disabled>
      <legend>Chat</legend>
      <input id="new-msg" type="text" />
      <button onclick="sendMessage()">Send</button>
    </fieldset>
    <div id="chat-text"></div>
  </body>
  <script src="chatClient.js"></script>
</html>
```

The JavaScript for the application provides the interaction with the DOM for creating and displaying messages, and manages the WebSockets in order to connect, send, and receive messages.

### DOM interaction

We do not want to be able to send messages if the user has not specified a name. So we add an event listener on the name input and disable the chat controls if the name ever is empty.

```js
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
```

We then create a function that will update the displayed messages by selecting the element with the `chat-text` ID and appending the new message to its HTML. Security minded developers will realize that manipulating the DOM in this way will allow any chat user execute code in the context of the application. After you get everything working, if you are interested, see if you can exploit this weakness.

```js
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}
```

When a user presses the enter key in the message input we want to send the message over the socket. We do this by selecting the DOM element with the `new-msg` ID and adding a listener that watches for the `Enter` keystroke.

```js
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
```

When Enter is pressed the sendMessage function is called. This selects the text out of the `new-msg` element and the name out of the `my-name` element and sends that over the WebSocket. The value of the message element is then cleared so that it is ready for the next message.

```js
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}
```

### WebSocket connection

Now we can set up our WebSocket. We want to be able to support both secure and non-secure WebSocket connections. To do this we look at the protocol that is currently being used as represented by the `window.location.protocol` variable. If it is non-secure HTTP then we set our WebSocket protocol to be non-secure WebSocket (`ws`). Otherwise we use secure WebSocket (`wss`). We use that to then connect the WebSocket to the same location that we loaded the HTML from by referencing the `window.location.host` variable.

We can notify the user that chat is ready to go by listening to the `onopen` event and appending some text to the display using the `appendMsg` function we created earlier.

```js
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};
```

When the WebSocket receives a message from a peer it displays it using the `appendMsg` function.

```js
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};
```

And if the WebSocket closes for any reason we also display that to the user and disable the controls.

```js
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};
```

## Chat server

The chat server runs the web service, serves up the client code, manages the WebSocket connections, and forwards messages from the peers.

### Web service

The web service is established using a simple Express application. Note that we serve up our client HTML, CSS, and JavaScript files using the `static` middleware.

```js
const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up our webSocket client HTML
app.use(express.static('./public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```

### WebSocket server

When we create our WebSocket we do things a little differently than we did with the simple connection example. Instead of letting the WebSocketServer control both the HTTP connection and the upgrading to WebSocket, we want to use the HTTP connection that Express is providing and handle the upgrade to WebSocket ourselves. This is done by specifying the `noServer` option when creating the WebSocketServer and then handling the `upgrade` notification that occurs when a client requests the upgrade of the protocol from HTTP to WebSocket.

```js
// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});
```

### Forwarding messages

With the WebSocket server we can use the `connection`, `message`, and `close` events to forward messages between peers. On connection we insert an object representing the connection into a list of all connections from the chat peers. Then when a message is received we loop through the peer connections and forward it on to everyone except the peer who initiated the request. Finally we remove a connection from the peer connection list when it is closed.

```js
// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});
```

### Keeping connections alive

A WebSocket connection will eventually close automatically if no data is sent across it. In order to prevent that from happening the WebSocket protocol supports the ability to send a `ping` message to see if the peer is still there and receive `pong` responses to indicate the affirmative.

It make this work we use `setInterval` to send out a ping every 10 seconds to each of our peer connections and clean up any connections that did not response to our previous ping.

```js
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
```

In our `connection` handler we listen for the `pong` response and mark the connection as alive.

```js
// Respond to pong messages by marking the connection alive
ws.on('pong', () => {
  connection.alive = true;
});
```

Any connection that did not response will remain in the not alive state and get cleaned up on the next pass.

# Web frameworks

📖 **Deeper dive reading**: [MDN Introduction to client-side frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)

Web frameworks seek to make the job of writing web applications easier by providing tools for completing common application tasks. This includes things like modularizing code, creating single page applications, simplifying reactivity, and supporting diverse hardware devices.

Some frameworks take things beyond the standard web technologies (HTML, CSS, JavaScript) and create new hybrid file formats that combine things like HTML and JavaScript into a single file. Examples of this include React JSX, Vue SFC, and Svelte files. Abstracting away the core web file formats puts the focus on functional components rather than files.

There are lots of web frameworks to choose from and they evolve all the time. You can view the latest popularity poll at [StateOfJS](https://stateofjs.com).

![web frameworks](stateofjs-webframeworks.jpg)

\- **Source**: _StateOfJS web framework poll_

Each framework has advantages and disadvantages. Some are very perscriptive (opinionated) about how to do things, some have major institutional backing, others have a strong open source community. Other factors you want to consider include how easy it is to learn, how it impacts productivity, how performant it is, how long it takes to build, and how actively the framework is evolving.

## Hello world examples

For our classwork we will use the web framework React. However, before we dig into React let's look at how the major frameworks would render a simple hello world application.

### Vue

[Vue](https://vuejs.org/) combines HTML, CSS, and JavaScript into a single file. HTML is represented by a `template` element that can be aggregated into other templates.

**SFC**

```html
<script>
  export default {
    data() {
      return {
        name: 'world',
      };
    },
  };
</script>

<style>
  p {
    color: green;
  }
</style>

<template>
  <p>Hello {{ name }}!</p>
</template>
```

### Svelte

Like Vue, [Svelte](https://svelte.dev/) combines HTML, CSS, and JavaScript into a single file. The difference here is that Svelte requires a transpiler to generate browser ready code, instead of a runtime virtual DOM.

**Svelte file**

```html
<script>
  let name = 'world';
</script>

<style>
  p {
    color: green;
  }
</style>

<p>Hello {name}!</p>
```

### React

React combines JavaScript and HTML into its component format. CSS must be declared outside of the JSX file. The component itself highly leverages the functionality of JavaScript and can be represented as a function or class.

**JSX**

```jsx
import 'hello.css';

const Hello = () => {
  let name = 'world';

  return <p>Hello {name}</p>;
};
```

**CSS**

```css
p {
  color: green;
}
```

### Angular component

An Angular component defines what JavaScript, HTML, and CSS are combined together. This keeps a fairly strong separation of files what are usually grouped together in a directory rather than using the single file representation.

**JS**

```js
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}
```

**HTML**

```html
<p>hello {{name}}</p>
```

**CSS**

```css
p {
  color: green;
}
```

# React

📖 **Recommended reading**: - [MDN React Introduction Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

<img src="reactLogo.png" width="75" />

React, and its associated projects, provide a powerful web programming framework. The name React comes from its focus on making reactive web page components that automatically update based on user interactions or changes in the underlying data.

![Jordan Walke](jordanWalke.jpg)

> “The best drug is getting little things done that have been weighing on you. Instant high.”
>
> — Jordan Walke (_Source_: [Twitter](https://twitter.com/jordwalke/status/1554625863089418243?cxt=HHwWhsCjgYv_kZMrAAAA))

React was created by Jordan Walke for use at FaceBook in 2011. It was first used with FaceBook's news feed and then as the main framework for Instagram. Shortly thereafter, FaceBook open sourced the framework and it was quickly adopted by many popular web applications.

React abstracts HTML into a JavaScript variate called [JSX](https://reactjs.org/docs/introducing-jsx.html). JSX is converted into valid HTML and JavaScript using a preprocessor called [Babel](https://babeljs.io/). For example, the following is a JSX file. Notice that it mixes both HTML and JavaScript into a single representation.

```jsx
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```

Babel will convert that into valid JavaScript:

```js
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);
```

The `React.createElement` function will then generate DOM elements and monitor the data they represent for changes. When a change is discovered React will trigger dependent changes.
