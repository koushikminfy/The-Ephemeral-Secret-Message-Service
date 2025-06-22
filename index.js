import express from 'express';
import { z, ZodError } from 'zod';

const app = express();
const PORT = 3000;

app.use(express.json());

const messages = [];

const messageSchema = z.object({
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

app.post('/messages', (req, res) => {
  console.log('Received body:', req.body); 
  try {
    const { message } = messageSchema.parse(req.body);
    const newMessage = {
      id: messages.length,
      message,
      createdAt: new Date(),
    };
    messages.push(newMessage);
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.get('/messages/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0 || id >= messages.length) {
    return res.status(404).json({ success: false, message: "Message not found" });
  }
  res.status(200).json({ success: true, data: messages[id] });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
