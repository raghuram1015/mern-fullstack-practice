const home = async (req, res) => {
    try {
        res
        .status(200)
        .send("Hello World, this is with route and controller.");
    }
    catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        res.status(200).send("Welcome to Registration Page using route and controller.");
    }
    catch (error) {
        res.status(400).send({msg: "page not found"})
    }
};

module.exports = { home, register };