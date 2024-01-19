import { userModel } from '@/models/user.model';



const deleteUser = async (userEmail: string) => {
    try {
      const result = await userModel().deleteOne({ email: userEmail });
  
      if (result.deletedCount === 0) {
        throw new Error('User not found');
      }
  
      // User successfully deleted
      console.log('User deleted successfully');
    } catch (error) {
      // Handle errors here or propagate them up
      console.error("Error deleting user:", error);
      throw error; // Propagate the error up if needed
    }
  };
  
  export default deleteUser;
