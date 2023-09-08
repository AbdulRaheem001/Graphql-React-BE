import Users from "./Modul/user_Modul.js";
import bcrypt from "bcryptjs";
const resolvers = {
  Query: {
    hello: () => "Hello, World!",
    users: async () => {
      console.log(Users);
      try {
        const users = await Users.find(); // Use find() to fetch all users
        console.log(users);
        return users;
      } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
      }
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const user = await Users.findOne({ Email: email });
        if (!user) {
          throw new Error("User not found");
        }

        // Check if the provided password matches the user's password
        const passwordMatch = await bcrypt.compare(password, user.Password);

        if (passwordMatch) {
          console.log("User logged in:", user.Name);
          return user;
        } else {
          throw new Error("Password incorrect");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        throw error;
      }
    },
  },
};

export default resolvers;
