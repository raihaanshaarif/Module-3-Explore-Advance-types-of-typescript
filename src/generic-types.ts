/* type GenericArray<T> = Array<T>

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

/* Generic Tuple */
/* type GenericTuple<X, Y> =[X, Y]  
// type RelationWithSalaryType ={name:string, salary: number}
type IRelationWithSalary {name:string, salary: number} //Object er jonne interface

 */
/* const relation:GenericTuple<string, string> = ["Persian", 'Kate'];
const relationWithSalary: GenericTuple<IRelationWithSalary, string> = [
    {
    name: 'Persian',
    salary: 2939
    }, 
    'Kate'
]  */*/