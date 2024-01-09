// const { Configuration, OpenAIApi } = require('openai');

// const configuration = new Configuration({ apiKey: "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" });
// const openai = new OpenAIApi(configuration);

// async function sendMsgToOpenAPI(message) {
//     const res = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0 // Corrected typo in 'presence_penalty'
//     });
//     return res.data.choices[0].text;
// }

// module.exports = { sendMsgToOpenAPI };

const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: "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", dangerouslyAllowBrowser: true });

export async function sendMsgToOpenAPI(message) {
  const res = await openai.completions.create({
    engine: 'text-davinci-003', // Use 'text-davinci-003' as the engine for text completion
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return res.choices[0].text;
}
