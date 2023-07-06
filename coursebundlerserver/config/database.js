import mongoose from "mongoose";

export const connectdb = async () => {
	try {
		const { connection } = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDb_Connected_with_${connection.host}`);
	} catch (error) {
		console.error(error);
	}
};
