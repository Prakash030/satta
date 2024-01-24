import {userModel} from '../models/user.model';
import { z } from 'zod';


const createUserInput = z.object({
    email: z.string().email(),
    password:z.string(),
})

const forgetPassword = async (payload: z.infer<typeof createUserInput>) => {

    
    const { email, password } = payload;

    // Step 1: Find the user with the provided email address
    const user = await userModel().findOne({ email });

    console.log("user", user);

    if (!user) {
        throw new Error('User does not exist');
    }
    await userModel().findByIdAndUpdate(user._id, { password });

    return user;
  };

export default forgetPassword;
