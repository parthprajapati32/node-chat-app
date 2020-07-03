const genrateMessage = (username, message) => {
    return {
        username,
        text: message,
        createdAt: new Date().getTime()
    }
}

const genrateLocationMessage = (username, url) => {
    return {
        username,
        text: url,
        createdAt: new Date().getTime()
    }
}

module.exports ={
    genrateMessage,
    genrateLocationMessage
}