
// fungsi untuk menampilkan download
// function showDownload(result){
//     console.log("Download Finished");
//     console.log("This is your download results" + " " + result);
// };

// // fungsi untuk mendownload file
// function download(callShowDownload){
//     setTimeout(function(){
//         const result = "windows 10.exe";
//         // callShowDownload(result);
//     }, 3000);
// };

// function search(searchApps){
//     setTimeout(function(){
//         const result = "Finding applications";
//     }, 3000);
// };

// download(showDownload);
// search(searchApps);


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


const main = () => {
    searchApps()
    .then((res) => {
        console.log(res);
        return downloadApps(res);
    })
    .then((res) => {
        console.log(res);
        return usingApps(res);
    })
    .then((res) => {
        console.log(res);
    });
};

main();