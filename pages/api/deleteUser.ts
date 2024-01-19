import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../db';
import deleteUser from '../../services/deleteUser.service'

dbConnect();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    if (req.method !== 'DELETE') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    try {
      const { email } = req.query as { email: string };
      await deleteUser(email);
  
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }