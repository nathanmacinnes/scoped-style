# scoped-style
_Scope some CSS._

A quick-and-dirty module to scope a fragment of CSS to a particular HTML element
and make sure it doesn't interfere with the rest of your page. I anticipate
it'll be most useful in compiled templates, to make modules even more modular.

## Usage ##

For this to work, the container element must have an ID.

````html
<div id="container">
  <style scoped-style>
span {
  background-color: red;
}
  </style>
  <span>Something</span>
</div>
````

You could use it in a template like this:

````html
<style scoped-style>
span {
  background-color: red;
}
</style>
<span>Something</span>
````

Then include your template with a custom directive. Remember to `$compile` the
template in the link.

## The future ##

If you find this useful, please let me know. If people are actually using it
then I'll package it with bower and npm and make the CSS scoping logic a bit
less crude.
