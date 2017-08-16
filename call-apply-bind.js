var obj = {num:2};

var addToThis = function(o) {
 return this.num + o;
};

console.log(addToThis.call(obj,3));

//functionname.call(obj, functionarguments);

/* Apply */

var arr = [1,2,3];
console.log(addToThis.apply(obj, arr));

/* Bind */

var obj = {num:2};

var addToThis = function(a, b, c) {
 return this.num + a + b + c;
};

var arr = [1,2,3];

var bound = addToThis.bind(obj);

console.log(bound(1,2,3));


/*   */

Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

Call/apply call the function immediately, whereas bind returns a function that, when later executed, will have the correct context set for calling the original function. This way you can maintain context in async callbacks and events.

I do this a lot:

function MyObject(element) {
    this.elm = element;

    element.addEventListener('click', this.onClick.bind(this), false);
};

MyObject.prototype.onClick = function(e) {
     var t=this;  //do something with [t]...
    //without bind the context of this function wouldn't be a MyObject
    //instance as you would normally expect.
};
I use it extensively in Node.js for async callbacks that I want to pass a member method for, but still want the context to be the instance that started the async action.

A simple, naive implementation of bind would be like:

Function.prototype.bind = function(ctx) {
    var fn = this;
    return function() {
        fn.apply(ctx, arguments);
    };
};
