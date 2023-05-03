/* type User = {
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
interface IUser {
    name: string,
    age: number,
}
interface IExtendedUser extends IUser {
    role: string
}

type AddNumbersType = (x: number, y: number) => number;
interface IAddNumbers {
    (x: number, y: number): number;
}
const addNumbers: AddNumbersType = (num1, num2) => num1 + num2;

type RollnumbersType = number[]
interface IRollNumbers {
    [index: number]: number
}
const rollNumbers: RollnumbersType = [1, 2, 3, 4, 5] */

// const user: IExtendedUser = {
//     name: 'Fahim',
//     age: 12,
//     role: 'Unknown'
// }

/* const userWithTypeAlias: User = {
    name: 'Type Alias',
    age: 100
}
userWithTypeAlias.name

const userWithInterface: IUser = {
    name: 'Interface',
    age: 200
}
userWithInterface.name */