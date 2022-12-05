const persiapan = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('Persiapan');
        }, 3000);
    });
};

const rebusAir = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('Rebus Air');
        }, 7000);
    });
};

const masak = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('Memasak Mie');
        }, 5000);
    });
};

const main = () => {
    persiapan()
    .then((res) => {
        console.log(res);
        return rebusAir(res);
    })
    .then((res) => {
        console.log(res);
        return masak(res);
    })
    .then((res) => {
        console.log(res);
    });
};

main();