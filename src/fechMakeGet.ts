export const makeFetch = (url: string, obj: object) => {
    return fetch (url, obj)
    .then((response) => response.json())
    .then((data) =>{
        return data
    })
}