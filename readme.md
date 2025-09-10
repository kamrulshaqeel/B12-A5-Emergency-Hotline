### 6. Please find the answer of given questions below:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans-1: getElementById-to HTML element by it's Id, 
      getElementByClassName-to HTML element by it's class name.
      querySelector- to select the very 1st element by it's classname'
      querySelectorAll - to select all element have same class.

2. How do you **create and insert a new element into the DOM**?
Ans-2: 1st need to create an element using document.createElement(), Then we can add attributes, after that parent element need to be selected to insert new element using appendChild() or append().

3. What is **Event Bubbling** and how does it work?
Ans-3: Event like click event trigger in most inner item then its goes up to its parent and then grandparent and goes all the way document level. Its opposite of event capturing.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans-4: Event delegation is adding eventListener in parent element then we can apply changes on it's child individually. It will bubbles to it's parent always. We can handle code dynamically using this technique.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans-5: preventDefault(): stop browser default actions.
    stopPropagation(): stop catching up DOM parent child's.