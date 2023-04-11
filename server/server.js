const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const openAI = require("openai");
const { Configuration, OpenAIApi } = openAI;
const configuration = new Configuration({
  organization: process.env.ORGANIZATION_KEY,
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
  const { newQuestion } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: newQuestion,
    max_tokens: 2048,
    temperature: 0,
  });
  console.log(response.data);
  if (response.data) {
    if (response.data.choices) {
      res.json({
        message: response.data.choices[0].text,
      });
    }
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
