import OpenAI from 'openai';

const openai = new OpenAI({
	apiKey: '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',
	dangerouslyAllowBrowser: true,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function OpenaiApi(messages: any[]) {
	const params: OpenAI.Chat.ChatCompletionCreateParams = {
		messages,
		model: 'gpt-3.5-turbo',
	};
	const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
	console.log('teste 1', chatCompletion);
}
