var ajaxRequester = (function () {

    var PARSE_APP_ID = "ANXmV4cFgSKNaAn9RVw3Y8cQQQa5Ay5hYIPXuIgK";
    var PARSE_REST_API_KEY = "tBUp2flWPNtjiv7fOrY3pKOBiKlsoBenu2yK3OxO";

    var makeRequest = function (method, url, data, success, error) {
        $.ajax({
            headers: {
                "X-Parse-Application-Id": PARSE_APP_ID,
                "X-Parse-REST-API-Key": PARSE_REST_API_KEY
            },
            url: url,
            type: method,
            contentType: 'application/json',
            data: JSON.stringify(data) || undefined,
            success: success,
            error: error
        });
    }

    var makeGetRequest = function (url, success, error) {
        return makeRequest('GET', url, null, success, error);
    }

    var makePostRequest = function (url, data, success, error) {
        return makeRequest('POST', url, data, success, error);
    }

    var makePutRequest = function (url, data, success, error) {
        return makeRequest('PUT', url, data, success, error);
    }

    var makeDeleteRequest = function (url, success, error) {
        return makeRequest('DELETE', url, { }, success, error);
    }

    return {
        get: makeGetRequest,
        post: makePostRequest,
        put: makePutRequest,
        delete: makeDeleteRequest
    }
}());