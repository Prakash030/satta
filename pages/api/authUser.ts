import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../db';
import login from '../../services/auth.service';
import { setCookie } from 'nookies'; 

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, password } = req.query as { email: string; password: string };

    const user = await login({ email, password });

    setCookie({ res }, 'userCredentials', JSON.stringify({ email, password }), {
      maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
      path: '/', // Cookie is accessible from all routes
      secure: process.env.NODE_ENV === 'production', // Set to true in production for HTTPS
      httpOnly: true, // Cookie is only accessible through HTTP requests
      sameSite: 'strict', // Restrict cookie to the same site
    });

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error('Error handling user login:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}
