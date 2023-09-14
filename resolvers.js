import UsersTODO from "./Modul/user_Modul.js";
import TODO from "./Modul/todo_Modul.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const resolvers = {
  Query: {

    todosByEmail: async (_, { email }) => {
      try {
        const todos = await TODO.find({ Email: email });
        // Map the data to match the structure of the GraphQL Todo type
        
        return todos.map((todo) => ({
         
          email: todo.Email,
          title: todo.Title,
          description: todo.Description,
          completed: todo.Completed , // Convert boolean to string
          completedOn: todo.CompletedOn ? todo.CompletedOn.toISOString() : '', // Convert Date to ISO string
          urgency: todo.Urgency,
        }));
      } catch (error) {
        console.error("Error fetching todos:", error);
        throw error;
      }
    },
  },
  Mutation: {
    login: async (_, { email, password }) => {
      try {
        const user = await UsersTODO.findOne({ Email: email });
        if (!user) {
          throw new Error("User not found");
        }
        const passwordMatch = await bcrypt.compare(password, user.Password);
    
        if (passwordMatch) {
           const token =await jwt.sign(
            {
              userId: user._id,
              email: user.Email,
            },
            '11221122',
            {
              expiresIn: '1h',
            }
           
          );
          console.log(token)
          return  token ;
        } else {
          throw new Error("Password incorrect");
        }
      } catch (error) {
        console.error("Error during login:", error.message);
        throw error;
      }
    },
    signup: async (_, { fname, lname, email, password }) => {
      console.log("Signup call")
      try {
       
         const existingUser = await UsersTODO.findOne({ Email: email });
        if (existingUser) {
          throw new Error('User with this email already exists.');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UsersTODO({ FName: fname,LName: lname ,Email: email,   Password: hashedPassword });
        await newUser.save();

        return newUser;
      } catch (error) {
        console.error('Error during signup:', error);
        throw error;
      }
    },
    creattodo: async (_, { email, title, description, completed,completedOn,urgency }) => {
      console.log("Creat todo call ::")
      try {

        const newTodo = new TODO({ Email:email, Title: title, Description:description, Completed:completed,CompletedOn:completedOn,Urgency:urgency });
        await newTodo.save();

        return newTodo;
      } catch (error) {
        console.error('Error during save todo:', error);
        throw error;
      }
    },
  },
};

export default resolvers;
