module.exports = async(req, res) => {
    // destructuring assignment
    // 비구조화 할당
    const {email, password, name} = req.body;
    
    // {email : null}
    // {email : ''}
    // {}
    if(!name || !password || !email){
        // return res.status(400).send({status:400, message: "BAD REQUEST"});
        // return res.status(400).send(util.fail(400, "BAD REQUEST"));
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.NULL_VALUE
                ),
            );
    }

    const alreadyUser = users.filter(user=> user.email === email).length>0;
    if (alreadyUser) {
        // return res.status(409).send({ status:409, message: "ALREADY EMAIL"});
        // return res.status(409).send(util.fail(409, "ALREAY EMAIL"));
        return res
            .status(statusCode.BAD_REQUEST)
            .send(
                util.fail(
                    statusCode.BAD_REQUEST,
                    responseMessage.ALREADY_EMAIL
                ),
            );
        }

    // key와 value 이름이 같으면 value 생략 가능
    const newUser = {
        id:users.length+1, 
        name, 
        password, 
        email
    };

    users.push(newUser);
    // return이 아니다!!
    res.status(200).send(util.success(statusCode.OK, responseMessage.CREATED_USER, newUser));

}