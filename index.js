

async function buhalteris(money1, money2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(money1 + money2);
        }, 1000);
    });
}

(async () => {
    console.log('start');

    const ats1 = await buhalteris(20, 20);
    console.log(ats1);

    const ats2 = await buhalteris(ats1, 50);
    console.log(ats2);
    
    console.log('done');
})()
