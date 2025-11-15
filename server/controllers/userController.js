import UserModel from "../models/userModel.js";

const user = async (req, res) => {
    try {
        console.log("1");
        const { Name, Contact, Email, Gender, image} = req.body;

        console.log("2")

        // if(!)
        // const user = new UserModel(
        //     Name,
        //     Contact,
        //     Email,
        //     Gender,
        //     image
        // )

        let imageUrl;
        if(req.file) {
            imageUrl = `/uploads/images/${req.file.filename}`;
        }
        // console.log("3");
        const user = await UserModel.insertOne({
            Name: Name,
            Contact: Contact,
            Email: Email,
            Gender: Gender,
            image: imageUrl
        })

        // user.save();

        console.log("4")

        return res.status(200).json({
            success: true,
            message: "User created",
            user
        })
    } catch (error) {
       console.log("error: ", error); 
    }
}

export default user;