class HomeController{

    async index(req, res){
        res.send("API REST UserAuth ");
    }

}

module.exports = new HomeController();