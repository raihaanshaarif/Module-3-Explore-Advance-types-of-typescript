// /* Generic Interface */

// interface CrushInterface<T, U=null> {
//     name: string,
//     husband: T,
//     wife?: U
// }
// const crush1:CrushInterface<boolean, string> = { name: 'Kate winslet', husband: true, wife: 'Sokina'}
// const crush2:CrushInterface<string> = {name: 'Kate Winslet', husband: 'persian'}
// interface HusbandInterface {name:string, salary: number}
// const crush3:CrushInterface<HusbandInterface>={
//     name: 'kate winslet',
//     husband: {
//         name: "persian",
//         salary: 500
//     }
// }
// interface PersonInterface{name:string, age: number}
// const crush4: CrushInterface<PersonInterface, PersonInterface>={
//     name: 'kate',
//     husband: {
//         name: 'persian',
//         age: 30
//     },
//     wife: {
//         name: 'Winslet',
//         age: 40
//     }
// }

// type GenericArray<T> = Array<T>

// const rollNumbers: GenericArray<number> = [44, 12, 4]
// const rollNumbers2: GenericArray<string> = ['44', '12', '4']
// const rollNumbers3: GenericArray<boolean> = [true, false]

// type NameRollType = { name: string, roll: number }
// const userNameAndROllNumbers: GenericArray<NameRollType> = [{
//     name: 'Mr X',
//     roll: 1
// },
// {
//     name: "Mr. Y",
//     roll: 2,
// }
// ]

// /* Generic Tuple */
// type GenericTuple<X, Y> =[X, Y]  
// // type RelationWithSalaryType ={name:string, salary: number}
// interface IRelationWithSalary {name:string, salary: number} //Object er jonne interface


// const relation:GenericTuple<string, string> = ["Persian", 'Kate'];
// const relationWithSalary: GenericTuple<IRelationWithSalary, string> = [
//     {
//     name: 'Persian',
//     salary: 2939
//     }, 
//     'Kate'
// ]