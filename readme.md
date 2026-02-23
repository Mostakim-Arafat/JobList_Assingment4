### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-->getElementById: we can only select one specific html element using id
-->getElementsByClassName: here multiple element can be selected using CSS class.
-->querySelector: select first element outof multiple element. it uses CSS selector like tag, class,id
--> querySelectorAll: select all elements outof multiple element. it uses CSS selector like tag, class,id

### 2. How do you create and insert a new element into the DOM?

--> document.createElement("html-tag")
--> write innertext
--> append it to a parent div.

### 3. What is Event Bubbling? And how does it work?

-->Event Bubbling is a DOM behaviour where event works from child to parent div.
first child event works, then parent event works.

### 4. What is Event Delegation in JavaScript? Why is it useful?

--> Event Delegation means handling  event by  parent div triggerd by child element. It is useful because it reduce code volume and works for all child under a parent div. it uses event bubbling concept.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

--> stopPropagation() : In event bubbling child event executes first then propagate upward. this function stops propagating upward parent div.

--> preventDefault() : stops browser default behaviour for event handling.