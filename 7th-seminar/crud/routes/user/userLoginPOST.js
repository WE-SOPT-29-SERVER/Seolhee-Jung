module.exports = async(res, req) => {
    
    const {id, password} = req.body;

    if(!id || !password) {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    const user = users.filter(obj=> obj.id === id)[0];
    if(!user){
        return res
                .status(statusCode.BAD_REQUEST)
                .send(
                    util.fail(
                        statusCode.BAD_REQUEST,
                        responseMessage.NO_USER
                    ),
                );
    }
    
    if(user[0].password !== password) {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
                statusCode.BAD_REQUEST,
                responseMessage.MISS_MATCH_PW
            ),
        );
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {id,email:user[0].email,name:user[0].name}));
}