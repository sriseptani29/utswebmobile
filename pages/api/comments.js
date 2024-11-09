// pages/api/comments.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const comments = await prisma.comment.findMany();
      res.status(200).json(comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
      res.status(500).json({ error: 'Error fetching comments' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, comment, rating } = req.body;
      const newComment = await prisma.comment.create({
        data: {
          name,
          comment,
          rating,
        },
      });
      res.status(201).json(newComment);
    } catch (error) {
      console.error('Error posting comment:', error);
      res.status(500).json({ error: 'Error posting comment' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
