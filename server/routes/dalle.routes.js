import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const config = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from the router!" })
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const res = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const image = res.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Something went wrong" })
  }
});

export default router;
