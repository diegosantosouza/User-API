var jwt = require('jsonwebtoken');
var secret = "23jaksdfhb789sdngbjshrt9wfnas0ertwq3nb9";
module.exports = function (req, res, next) {
    const authToken = req.headers['authorization']
    if (authToken != undefined) {
        const bearer = authToken.split(' ');
        var token = bearer[1];

        try {
            var decode = jwt.verify(token, secret);
            if (decode.role == 1) {
                next();
            } else {
                res.status(403);
                res.send("Você não tem permissão");
                return;
            }
        } catch (err) {
            res.status(403);
            res.send("Você não está autenticado");
            return;
        }
    } else {
        res.status(403);
        res.send("Você não está autenticado");
        return;
    }
}