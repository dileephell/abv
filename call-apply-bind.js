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
