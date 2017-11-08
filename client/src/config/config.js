var baseHref = process.env.PROC_ENV === 'build' ? '/' : 'http://localhost:3000/'


export const config  = {
    baseUrl: baseHref,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }
}

