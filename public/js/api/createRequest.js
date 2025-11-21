/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    if (!options.url) {
        throw new Error("отсутствует URL для запроса");
    }
    
    options.method = options.method || "GET";
    options.callback = options.callback || ((err, response) => {console.log("Запрос выполнен");});
    
    const xhr = new XMLHttpRequest();
    
    if ((options.method == "GET") && options.data) {
        let parameters = "";
        for(let option in options.data) {
            parameters += "&" + option + "=" + options.data[option];
        }
        options.url = options.url + "?" + parameters.substring(1);
    }
    
    xhr.open( options.method, options.url );
    xhr.responseType = 'json';
    xhr.onload = (e) => {
        let error = xhr.response.success ? null : xhr.response.success;
        options.callback(error, xhr.response)
    }
    
    if (options.method == "GET") {
        xhr.send();
    }
    else {
        xhr.send(options.data);
    }
    
};
