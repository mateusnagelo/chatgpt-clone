'use client';

import { Sidebar } from '@/components/Sidebar';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { ChatArea } from '@/components/ChatArea';
import { Chat } from '@/types/Chat';
import { Footer } from '@/components/Footer';

const Page = () => {
	const [sidebarOpened, steSidebarOpened] = useState(false);
	const [ChatActive, setChatActive] = useState<Chat>({
		id: '123',
		title: 'Bla bla bla',
		messages: [
			{ id: '99', author: 'me', body: 'Opa, tudo bem?' },
			{ id: '100', author: 'ai', body: 'Tudo otimo, em que posso lhe ajudar?' },
		],
	});

	const [AILoading, setAILoading] = useState(false);
	const openSidebar = () => {
		steSidebarOpened(true);
	};

	const closeSidebar = () => {
		steSidebarOpened(false);
	};
	const handleClearConversations = () => {};
	const handleNewChat = () => {};

	const handleSendMessage = () => {};

	return (
		<main className="flex min-h-screen bg-gpt-gray">
			<Sidebar
				open={sidebarOpened}
				onClose={closeSidebar}
				OnClear={handleClearConversations}
				onNewChat={handleNewChat}
			>
				<div className="">...</div>
			</Sidebar>
			<section className="flex flex-col w-full">
				<Header openSidebarClick={openSidebar} title={'Bla bla bla'} newChatClick={handleNewChat} />

				<ChatArea chat={ChatActive} />

				<Footer onSendMessage={handleSendMessage} disabled={AILoading} />
			</section>
		</main>
	);
};
export default Page;
