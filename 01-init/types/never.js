"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    error("Este es el mensaje.");
})();
