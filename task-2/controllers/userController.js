const userModel = require("../model/user")


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { model } = require("mongoose");


class userController {
    static userRagistration = async (req, res) => {
        const { name, email, password, password_conformation, tc } = req.body
        const user = await userModel.findOne({ email: email })
        if (user) {
            res.send("email already exists")
        } else {
            if (name && email && password && password_conformation && tc) {
                if (password === password_conformation) {
                    try {
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await bcrypt.hash(password, salt)
                        const doc = userModel({
                            name: name,
                            email: email,
                            password: hashPassword,
                            tc: tc
                        })
                        await doc.save()
                        const save_user = await userModel.findOne({ email: email })
                        // genrate jwt token
                        const token = jwt.sign({ userId: save_user._id }, "secret key", { expiresIn: "5d" })

                        res.send({ "status": "success", "token": token })


                    } catch (err) {
                        console.log(err);
                        res.send("password and conform password doesnt match")

                    }
                } else {
                    res.send("password and conform password are not match");

                }
            } else {
                res.status(400).send("all field are required");
            }

        }




    }

    static userLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (email && password) {
                const user = await userModel.findOne({ email: email })
                if (user != null) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if (user.email === email && isMatch) {
                        const token = jwt.sign({ userId: user._id }, "secrey key", { expiresIn: "5d" })
                        res.send({"status":"success","token":token})

                    } else {
                        res.send("email and password doest match")
                    }

                } else {
                    res.send("you are a not ragister")
                }

            } else {
                res.send("all field are require")
            }

        } catch (err) {
            res.send(err)

        }
    }
}
module.exports = userController