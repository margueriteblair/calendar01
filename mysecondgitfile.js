function calc(x, y, operation) {
    if (operation === "add") {
        console.log(x+y);
    } else if (operation === "multiply") {
        console.log(x*y);
    } else if (operation === "divide") {
        console.log(x/y);
    } else if (operation === "subtract") {
        console.log(x-y);
    }
 };

calc(5, 7, "subtract");