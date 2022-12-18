const object1= {
        a:1,
        b:2,
        c:3
};

const object2={
        d:1,
        e:2,
        f:3
};

const object3 = Object.assign({a:66,b:33},object1);
const object4 = Object.assign({e:55,g:77},object2);
console.log(object3.a,object3.b);
console.log(object4.d,object4.e,object4.g);