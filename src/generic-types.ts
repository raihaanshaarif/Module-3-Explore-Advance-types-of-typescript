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

const GenericTuple<X, Y > =[X, Y]