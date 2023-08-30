"use strict";
(() => {
    let avengers = 10;
    console.log({ avengers });
    const villians = 20;
    console.log({ villians });
    // Es importante tener en cuenta que aunque no asignemos
    // tipo en typescript en javascript se evalua la expersión
    if (avengers < villians) {
        console.log("We are in trouble");
    }
    else {
        console.log("We are saved ");
    }
})();
