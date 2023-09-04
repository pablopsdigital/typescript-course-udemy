(() => {
    interface Hero = {
        name: string;
        age?: Number;
        powers: number[];
        getName?: ()=> string;
    }

    let flas: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2]
    }

})();
