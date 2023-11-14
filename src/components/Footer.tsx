import { ChatMessageInput } from './ChatMessageInput';

type Props = {
	disabled: boolean;

	onSendMessage: (message: string) => void;
};

export const Footer = ({ disabled, onSendMessage }: Props) => {
	return (
		<footer className="w-full boder-t boder-t-gray-600 p-2">
			<div className="max-w-4xl m-auto">
				<ChatMessageInput disabled={disabled} onSend={onSendMessage} />
				<div className="pt-3 text-center text-xs text-gray-300">
					Feito por Mateus Angelo em live com a B7WEB. <br />
					<a href="https://github.com/mateusnagelo" className="underline"></a>
				</div>
			</div>
		</footer>
	);
};
