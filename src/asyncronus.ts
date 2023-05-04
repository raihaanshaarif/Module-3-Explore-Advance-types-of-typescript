const makePromise = (): Promise<string> =>{
    return new Promise<string>((resolve, reject)=>{
        const data:string = 'Data is fetched'
        if(data){
            resolve(data)
        } else{
            reject('Failed to fetch data')
        }
    })
}