/* // Arrow Function
const createArray = (param:string):string[] =>{
    return [param];
}
function createArray1 <X,Y>(param1:X, param2:Y):[X,Y]{
    return [param1, param2];
}
const result1= createArray('Bangladesh')
const result2= createArray1<string, string>('Bangladesh', "Motherland")
const result3= createArray1<boolean,Array<string> >(false, ['USA']);
const result4 = createArray1<{name:string}, boolean>({name: 'bangladesh'}, false)

// Spread Operator
const myInfo ={
    name: 'Persian',
    age: 100,
    salary: 30000
}


const addMeInMyCrushMind = <T>(myInfo: T)=> {
    const crush = "kate Winslet";
    const newData={...myInfo, crush};
    return newData;
}
const result5= addMeInMyCrushMind(myInfo)
result5.age
console.log(result5); */