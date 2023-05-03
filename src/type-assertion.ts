let emni: any;

emni = 'Next Level Web Developer';
(emni as string).length;
<string>emni.length;

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted result is ${value} gram`
    }
    if (typeof param === 'number') {
        const value = param * 1000
        return `The converted result is ${value} gram`
    }
}
const resultToBeNumber = <number>kgToGram(1000)
const resultToBeString = <string>kgToGram('1000')

console.log(resultToBeNumber);
console.log(resultToBeString);

type CustomErrorType = {
    message: string
}

try {

} catch (err) {
    console.log((err as CustomErrorType).message);

}
