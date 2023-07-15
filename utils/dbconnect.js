import mongoose from "mongoose";

const dbconnect = async () => {

    try {

        const ConnectDb = await mongoose.connect(process.env.MONGODB_URI, { dbName: "posts" });
        if (ConnectDb) {
            console.log("Connected");
        }

    } catch (error) {

        console.log(error);
    }

}
export default dbconnect;