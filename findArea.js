const arguments = process.argv.slice(2);

function findArea(r) {
    const area = Math.PI * (r**2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`);
}

findArea(arguments[0] * 1);