import { useState } from 'react';
import IconSend from './icons/IconSend';

type Props = {
	disabled: boolean;
	onSend: (messag: string) => void;
};

export const ChatMessageInput = ({ disabled, onSend }: Props) => {
	const [text, setText] = useState('');
	const handleTextKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.code.toLowerCase() === 'enter' && !event.shiftKey) {
			event.preventDefault();
			handleSendMessage();
		}
	};

	const handleSendMessage = () => {
		if (!disabled && text.trim() !== '') {
			onSend(text);
			setText('');
		}
	};

	return (
		<div
			className={`flex boder-gray-800/50 bg-gpt-lightgray p-2 rounded-md
		${disabled && 'opacity-50'}`}
		>
			<textarea
				className="flex-1 boder-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto"
				placeholder="Digite uma mensagem"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyUp={handleTextKeyUp}
				disabled={disabled}
			></textarea>
			<div onClick={handleSendMessage} className="">
				<IconSend width={14} height={14} />
			</div>
		</div>
	);
};
