import jwt from "jsonwebtoken";

export const authToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decodedToken) => { 
            if (error) {
                console.log("error", error);
            }
            else
            {
                console.log("decodedToken", decodedToken);
                next();
            }
            });

    } else {
        console.log("No token found");
        res.send("Your are not authenticated!");
    };
}