/*async указывает, что внутри функции будет асинхронный код
await (парный оператор) препятствует асинхронности кода, благодаря 
нему переменная res дождется окончания запроса, присвоит его и 
тогда код пойдет дальше*/

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

export {postData};
export {getResource};