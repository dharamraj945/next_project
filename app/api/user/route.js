import dbconnect from "@/utils/dbconnect";
import User from "@/models/user";

const Post = async (req, res) => {
    try {
        await dbconnect();
        const { name, email } = await req.json();

        const userCreate = new User({ name, email });
        await userCreate.save();

        return new Response(JSON.stringify(userCreate), { status: 201 });
    } catch (error) {
        console.log(error);
    }
};

export { Post as POST };