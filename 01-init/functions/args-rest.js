"use strict";
(() => {
    //Hacer que el primer sea obligatoiro el resto opcionales
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")} `;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
