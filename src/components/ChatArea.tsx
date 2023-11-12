import { Chat } from '@/types/Chat';
import { ChatPlaceHolder } from './ChatPlaceholder';
import { ChatMessageItem } from './ChatMessageItem';

type Props = {
	chat: Chat | undefined;
};

export const ChatArea = ({ chat }: Props) => {
	return (
		<section className="flex-auto h-0 overflow-y-scroll">
			{!chat && <ChatPlaceHolder />}
			{chat && chat.messages.map((item) => <ChatMessageItem key={item.id} item={item} />)}
		</section>
	);
};
