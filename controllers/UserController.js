var User = require('../models/User');
class UserController{

    async index(req, res){
        var users = await User.findAll();
        res.json(users);
    }

    async findUser(req, res){
        var id = req.params.id;
        var user = await User.findById(id);
        if (user == undefined){
            res.status(404).json({});
        } else{
            res.status(200).json(user);
        }
    }

    async create(req, res){
        var {name, email, password} = req.body;

        if (email == undefined){
            res.status(400);
            res.json({err: 'O email é inválido!'});
            return;
        }

        var emailExists = await User.findEmail(email);

        if(emailExists){
            res.status(406);
            res.json({err: "o email já está cadastrado"});
            return;
        }

        await User.new(name, email, password)

        res.status(200);
        res.send("Tudo ok!");
    }

    async edit(req, res){
        var {id, name, email, role} = req.body;
        var result = await User.update(id,name,email,role);
        if (result != undefined) {
            if (result.status) {
                res.status(200);
                res.send("Tudo ok!");
            }else{
                res.status(406);
                res.json(result.err);
            }
        }else{
            res.status(406);
            res.send("Ocorreu um erro no servidor");
        }
    }
}

module.exports= new UserController();