import { Chat } from '@/types/Chat';
import { useState } from 'react';
import IconMessageOutline from './icons/IconMessage';
import IconTrashCan from './icons/IconTrashCan';

type Props = {
	chatItem: Chat;
	active: boolean;
	onClick: (id: string) => void;
	onDelete: (id: string) => void;
	onEdit: (id: string, newTitle: string) => void;
};
export const SiderbarChatButton = ({ chatItem, active, onClick, onDelete, onEdit }: Props) => {
	const [deleting, setDeleting] = useState(false);
	const [editing, setEditing] = useState(false);
	const [titleInput, setTitleInput] = useState(chatItem.title);

	return (
		<div
			className={`flex items-center rounded-md p-3 text-sm cursor-pointer
		${active ? 'bg-gray-500/20' : 'bg-transparent'} hover:bg-gray-500/10`}
		>
			<div className="mr-3">
				{!deleting && <IconMessageOutline width={16} height={16} />}
				{deleting && <IconTrashCan width={16} height={16} />}
			</div>

			<div className="flex-1 text-sm overflow-x-hidden ">
				{editing && (
					<input
						className="w=full bg-transparent text-sm outline-none boder border-blue-500
				value={titleInput} onChange={(e) => setTitleInput(e.target.value)}"
					/>
				)}
				{!editing && <div className="boder border-transparent" />}
				{!editing && chatItem.title}
				{deleting && `Delete "${chatItem.title}"`}
			</div>
		</div>
	);
};
