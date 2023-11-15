'use client';

import { Sidebar } from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { ChatArea } from '@/components/ChatArea';
import { Chat } from '@/types/Chat';
import { Footer } from '@/components/Footer';
import IconMessageOutline from '@/components/icons/IconMessage';
import { v4 as uuidv4 } from 'uuid';
import { SiderbarChatButton } from '@/components/SiderbarChatButoon';

const Page = () => {
	const [sidebarOpened, setSidebarOpened] = useState(false);
	const [chatList, setChatList] = useState<Chat[]>([]);
	const [chatActiveId, setChatActiveId] = useState<string>('');
	const [chatActive, setChatActive] = useState<Chat>();
	const [AILoading, setAILoading] = useState(false);

	useEffect(() => {
		setChatActive(chatList.find((item) => item.id === chatActiveId));
	}, [chatActiveId, chatList]);

	useEffect(() => {
		if (AILoading) getAIResponse();
	}, [AILoading]);

	const openSidebar = () => {
		setSidebarOpened(true);
	};

	const closeSidebar = () => {
		setSidebarOpened(false);
	};

	const getAIResponse = () => {
		setTimeout(() => {
			const chatListClone = [...chatList];
			const chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId);
			if (chatIndex > -1) {
				chatListClone[chatIndex].messages.push({
					id: uuidv4(),
					author: 'ai',
					body: 'Resposta da AI ;)',
				});
			}
			setChatList(chatListClone);
			setAILoading(false);
		}, 2000);
	};
	const handleClearConversations = () => {
		if (AILoading) return;

		setChatActiveId('');
		setChatList([]);
	};

	const handleNewChat = () => {
		if (AILoading) return;

		setChatActiveId('');
		closeSidebar();
	};

	const handleSendMessage = (message: string) => {
		if (!chatActiveId) {
			// Creating new chat

			const newChatId = uuidv4();
			setChatList([
				{
					id: newChatId,
					title: message,
					messages: [
						{
							id: uuidv4(),
							author: 'me',
							body: message,
						},
					],
				},
				...chatList,
			]);

			setChatActiveId(newChatId);
		} else {
			// Updating existing chat
			const chatListClone = [...chatList];
			const chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId);
			chatListClone[chatIndex].messages.push({
				id: uuidv4(),
				author: 'me',
				body: message,
			});
			setChatList(chatListClone);
		}
		setAILoading(true);
	};

	const handleSelectChat = () => {};
	const handleDeleteChat = () => {};

	const handleEditChat = () => {};

	return (
		<main className="flex min-h-screen bg-gpt-gray">
			<Sidebar
				open={sidebarOpened}
				onClose={closeSidebar}
				OnClear={handleClearConversations}
				onNewChat={handleNewChat}
			>
				{chatList.map((item) => (
					<SiderbarChatButton
						key={item.id}
						chatItem={item}
						active={item.id === chatActiveId}
						onClick={handleSelectChat}
						onDelete={handleDeleteChat}
						onEdit={handleEditChat}
					/>
				))}
			</Sidebar>
			<section className="flex flex-col w-full">
				<Header
					openSidebarClick={openSidebar}
					title={chatActive ? chatActive.title : 'Nova conversa'}
					newChatClick={handleNewChat}
				/>

				<ChatArea chat={chatActive} loading={AILoading} />

				<Footer onSendMessage={handleSendMessage} disabled={AILoading} />
			</section>
		</main>
	);
};
export default Page;
