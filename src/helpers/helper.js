import config from '../config.json'


export async function fetch_api_response (endpoint) {
    const response = await fetch(config.PROXY_URL + endpoint, config.REQUEST_OPTIONS) //fetch returns a promise, which is automatically passed as the parameter response in .then()
    
    if (!response.ok){
        console.log(response.statusText)
        throw Error(response.statusText)
    }

    return await response.json()    
}