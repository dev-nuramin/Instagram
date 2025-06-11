// mongodb initilize

import mongoose from "mongoose";

// mongoDB connect
const mongoDBconnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, );
    console.log(
      `mongodb connection successful with host: ${connect.connection.host} `
        .bgGreen.black
    );
  } catch (error) {
    console.log(error);
  }
};

// export mongo db
export default mongoDBconnect;
