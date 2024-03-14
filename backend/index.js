const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const collegeSearchModel = require("./models/collegeS")
const collegeGoingModel = require("./models/collegeG")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    method: ["GET", "POST"],
    credentials: true
}))
app.use(cookieParser())


mongoose.connect("mongodb+srv://anitej:yxMImq0qnrXvuotx@projectdatabase.q84ves3.mongodb.net/users?retryWrites=true&w=majority&appName=projectdatabase");

app.post('/registerCollegeS', (req, res) => {
    const { name, email, password} = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            collegeSearchModel.create({ userType: "S", name, email, password: hash })
                .then(collegeSearch => res.json(collegeSearch))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))
})

app.post('/registerCollegeG', (req, res) => {
    const { name,address, email, password, college, major, graduationYear, opinion } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            collegeGoingModel.create({userType: "G", name,address, email, password: hash, college, major, graduationYear, opinion })
                .then(collegeGoing => res.json(collegeGoing))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message))
})

// Modify login route to also return user details for collegeS model
app.post("/loginCollegeS", (req, res) => {
    const { email, password } = req.body;
    collegeSearchModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "1d" })
                        res.cookie("token", token);
                        res.json({ message: "Login Successful", user }); // Return user details along with the message
                    } else {
                        res.json("Incorrect password")
                    }
                })
            } else {
                res.json("User not found");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Server error");
        });
});

// New API endpoint to fetch user details by email for collegeS model
app.get("/getUserDetailsByEmailCollegeS/:email", (req, res) => {
    const { email } = req.params;
    collegeSearchModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user); // Return user details
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Server error");
        });
});


app.post("/loginCollegeG", (req, res) => {
    const { email, password } = req.body;
    collegeGoingModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email }, "jwt-secret-key", { expiresIn: "1d" })
                        res.cookie("token", token);
                        res.json({ message: "Login Successful", user }); // Return user details along with the message
                    } else {
                        res.json("Incorrect password")
                    }
                })
            } else {
                res.json("User not found");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Server error");
        });
});

app.patch("/profile/updateName/:email", (req, res) => {
    const { email } = req.params;
    const { name } = req.body;

    collegeGoingModel.findOneAndUpdate(
        { email: email },
        { name: name },
        { new: true }
    )
    .then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json("Server error");
    });
});

app.patch("/profile/updateEmail/:email", (req, res) => {
    const { email } = req.params;
    const { newEmail } = req.body;

    collegeGoingModel.findOneAndUpdate(
        { email: email },
        { email: newEmail },
        { new: true }
    )
    .then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json("Server error");
    });
});

app.patch("/profile/updateCollege/:email", (req, res) => {
    const { email } = req.params;
    const { newCollege } = req.body;

    collegeGoingModel.findOneAndUpdate(
        { email: email },
        { college: newCollege },
        { new: true }
    )
    .then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json("Server error");
    });
});

app.patch("/profile/updateBranch/:email", (req, res) => {
    const { email } = req.params;
    const { branch } = req.body;

    collegeGoingModel.findOneAndUpdate(
        { email: email },
        { major: branch },
        { new: true }
    )
    .then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json("Server error");
    });
});

app.patch("/profile/updateAddress/:email", (req, res) => {
    const { email } = req.params;
    const { address } = req.body;

    collegeGoingModel.findOneAndUpdate(
        { email: email },
        { address: address },
        { new: true }
    )
    .then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json("Server error");
    });
});

app.patch("/profile/updateGraduationYear/:email", (req, res) => {
    const { email } = req.params;
    const { graduationYear } = req.body;

    collegeGoingModel.findOneAndUpdate(
        { email: email },
        { graduationYear: graduationYear },
        { new: true }
    )
    .then(user => {
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json("Server error");
    });
});

app.get("/getUserDetailsByEmail/:email", (req, res) => {
    const { email } = req.params;
    collegeGoingModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user); // Return user details
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json("Server error");
        });
});

app.post('/adminlogin', (req, res) => {
    const { email, password } = req.body;
    if (email === adminEmail && password === adminPassword) {
        res.json("Login Successful")
    } else {
        res.json("Invalid credentials")
    }
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("The token was not available")
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decode) => {
            if (err) return res.json("Token is wrong")
            next();
        })
    }
}

app.get('/home', verifyUser, (req, res) => {
    return res.json("Login Successful")
})

app.post('/logout', verifyUser, (req, res) => {
    res.clearCookie("token");
    return res.json("User Logged out")
})

app.listen(3001, () => {
    console.log("Server is running")
}) 
