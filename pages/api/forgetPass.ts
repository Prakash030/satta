import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../db';
import forgetPassword from '../../services/updatePassword.service';
import {parseCookies, setCookie } from 'nookies';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
 
    const { email, password } = req.body as { email: string; password: string };

    console.log("email",email);

    const user = await forgetPassword({ email, password });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error handling user login:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}


