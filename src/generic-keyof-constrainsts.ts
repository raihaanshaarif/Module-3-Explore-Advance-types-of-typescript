/* type PersonType={
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

const Property =getProperty({name:'Mr. X', age:100}, "age") */
