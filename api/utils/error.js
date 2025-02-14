const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = meassage;
    return error
}

modoule.exports = errorHandler;