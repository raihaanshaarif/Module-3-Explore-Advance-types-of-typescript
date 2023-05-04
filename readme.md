Type Assertion
let emni: any;
(Emni as number) diye . dot dile number er sob feature available hobe. Similarly (emni as string) diye . dot dile string er sob features dekhabe.

Function e o attestation use kora jai. Param declare stype set kora jai also result set kora jai.
Jokhon function ke call kora jai tokhon explicitly as diye type declare kora jai.
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
const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram('1000') as string;
Custom type declare kore error show korar process
type CustomErrorType = {
    message: string
}
try{
} catch (err) {
    console.log((err as CustomErrorType).message);
}
Angle bracket diye o type declare kora jai but ei ta tsx e kaaj korbe naah

let emni: any;


emni = 'Next Level Web Developer';
(emni as string).length;
<string>emni.length;
const resultToBeNumber = <number>kgToGram(1000)
const resultToBeString = <string>kgToGram('1000')
Interface, Type vs Interface
Type ke interface diye o lekha jai. Basic type alias use hoi primitive er jonne and interface use hoi object er jonne.
Object List: regular object, function, Array
//Types are mostly used for primitives
type User = {
    name: string,
    age: number
};
// For Object interface is highly used. Interface does not need = to declare.
interface IUser {
    name: string,
    age: number,
}
object regular type alias and Interface example using above type declaration
const userWithTypeAlias: User = {
    name: 'Type Alias',
    age: 100
}
userWithTypeAlias.name


const userWithInterface: IUser = {
    name: 'Interface',
    age: 200
}
userWithInterface.name
Interface can be Extended using extends [previous interface]. Example
interface IUser {
    name: string,
    age: number,
}
interface IExtendedUser extends IUser {
    role: string
}
const user: IExtendedUser = {
    name: 'Fahim',
    age: 12,
    role: 'Unknown'
}



Retugular type ke o extend kora jai. Regular extend korar example
type User = {
    name: string,
    age: number
};
type extendedUser = User & {
    role: string
}


const user: extendedUser = {
    name: 'Fahim',
    age: 12,
    role: 'Unknown'
}


Function Declare in both Type
type AddNumbersType = (x: number, y: number) => number;
interface IAddNumbers {
    (x: number, y: number): number;
}
const addNumbers: AddNumbersType = (num1, num2) => num1 + num2;


Array declare in Both Type
type RollnumbersType = number[]
interface IRollNumbers {
    [index: number]: number
}
const rollNumbers: RollnumbersType = [1, 2, 3, 4, 5]












Introduction of Generic in Type
Tradition way of Declaration
const rollNumbers: Array<number> = [44, 12, 4]
const rollNumbers2: Array<string> = ['44', '12', '4']
const rollNumbers3: Array<boolean> = [true, false]
const userNameAndROllNumbers: Array<{ name: string, roll: number }> = [{
    name: 'Mr X',
    roll: 1
},
{
    name: "Mr. Y",
    roll: 2,
}
]

Generic Array Example
type GenericArray<T> = Array<T>


const rollNumbers: GenericArray<number> = [44, 12, 4]
const rollNumbers2: GenericArray<string> = ['44', '12', '4']
const rollNumbers3: GenericArray<boolean> = [true, false]


type NameRollType = { name: string, roll: number }
const userNameAndROllNumbers: GenericArray<NameRollType> = [{
    name: 'Mr X',
    roll: 1
},
{
    name: "Mr. Y",
    roll: 2,
}
]









Generic Interface

/* Generic Tuple */
type GenericTuple<X, Y> =[X, Y] 
const relation:GenericTuple<string, string> = ["Persian", 'Kate'];
const relationWithSalary: GenericTuple<{name:string, salary: number}, string> = [
   {
   name: 'Persian',
   salary: 2939
   },
   'Kate'
]

Generic with interface
/* Generic Tuple */
type GenericTuple<X, Y> =[X, Y] 
// type RelationWithSalaryType ={name:string, salary: number}
Interface IRelationWithSalary {name:string, salary: number} //Object er jonne interface




const relation:GenericTuple<string, string> = ["Persian", 'Kate'];
const relationWithSalary: GenericTuple<IRelationWithSalary, string> = [
   {
   name: 'Persian',
   salary: 2939
   },
   'Kate'
]















Generic interface with multiple perameter


/* Generic Interface */


interface CrushInterface<T, U=null> {
   name: string,
   husband: T,
   wife?: U
}
const crush1:CrushInterface<boolean, string> = { name: 'Kate winslet', husband: true, wife: 'Sokina'}
const crush2:CrushInterface<string> = {name: 'Kate Winslet', husband: 'persian'}
interface HusbandInterface {name:string, salary: number}
const crush3:CrushInterface<HusbandInterface>={
   name: 'kate winslet',
   husband: {
       name: "persian",
       salary: 500
   }
}
interface PersonInterface{name:string, age: number}
const crush4: CrushInterface<PersonInterface, PersonInterface>={
   name: 'kate',
   husband: {
       name: 'persian',
       age: 30
   },
   wife: {
       name: 'Winslet',
       age: 40
   }
}











Generic in Function

Generic in Arrow Function
// Arrow Function
const createArray = (param:string):string[] =>{
   return [param];
}
const createArray1 = <X,Y>(param1:X, param2:Y):[X,Y] =>{
   return [param1, param2];
}
const result1= createArray('Bangladesh')
const result2= createArray1<string, string>('Bangladesh', "Motherland")
const result3= createArray1<boolean,Array<string> >(false, ['USA']);
const result4 = createArray1<{name:string}, boolean>({name: 'bangladesh'}, false)



Generic Function Spread Operator
// Spread Operator
const myInfo ={
   name: 'Persian',
   age: 100,
   salary: 30000
}
/* const newData = {...myInfo,crush}
console.log(newData); */


const addMeInMyCrushMind = <T>(myInfo: T)=> {
   const crush = "kate Winslet";
   const newData={...myInfo, crush};
   return newData;
}
const result5= addMeInMyCrushMind(myInfo)
result5.age
console.log(result5);







Constraints in Generics


interface MandatoryInterface{name:string, age:number, salary:number}
const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: T)=> {
   const crush = "kate Winslet";
   const newData={...myInfo, crush};
   return newData;
}
type MyInfoType={
   name:string,
   age: number,
   salary: number
   other1: boolean,
   other2: null
}
const myInfo:MyInfoType ={
   name: 'Persian',
   age: 100,
   salary: 30000,
   other1: true,
   other2: null
}
const result5= addMeInMyCrushMind(myInfo)
result5.age
console.log(result5);

















Generic Constraints Using Key Of Part 1

type PersonType={
   name: string;
   age:number;
   address: string
}


type newType = 'name' | 'age' | "address" //Manually Union Declare
//Key of Operator
type newTypeUsingKeyOf = keyof PersonType


// ({name: 'Mr. X', age: 100}, 'age') // 100


function getProperty<X, Y extends keyof X>(obj:X, key:Y){
   obj[key]
}


const Property =getProperty({name:'Mr. X', age:100}, "age")

























Asynchronous TypeScript


