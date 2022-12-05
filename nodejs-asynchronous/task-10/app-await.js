// Use arrow function
const searchApps = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('Search an applications');
        },3000);
    });
};

const downloadApps = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('Downloading applications');
        },4000);
    });
};

const usingApps = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            resolve('Using applications');
        },6000);
    });
};


const main = async () => {
    console.log(await searchApps());
    console.log(await downloadApps());
    console.log(await usingApps());
};

main();