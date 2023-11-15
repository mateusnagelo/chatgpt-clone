import { Chat } from '@/types/Chat';
import { useState } from 'react';
import IconMessageOutline from './icons/IconMessage';
import IconTrashCan from './icons/IconTrashCan';
import IconEdit3 from './icons/IconEdit3';
import IconClose from './icons/IconsClose';
import IconCheck2 from './icons/IconCheck2';

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

	const handleClickButtom = () => {
		if (!deleting || !editing) {
			onClick(chatItem.id);
		}
	};
	const handleConfirmButton = () => {
		if (deleting) onDelete(chatItem.id);

		if (editing && titleInput.trim() !== '') {
			onEdit(chatItem.id, titleInput.trim());
		}
		setDeleting(false);
		setEditing(false);
	};
	const handleCancelButton = () => {
		setDeleting(false);
		setEditing(false);
	};

	return (
		<div
			onClick={handleClickButtom}
			className={`flex items-center rounded-md p-3 text-sm cursor-pointer
			hover:bg-gray-500/10 ${active ? 'bg-gray-500/20' : 'bg-transparent'} `}
		>
			<div className="mr-3">
				{!deleting && <IconMessageOutline width={16} height={16} />}
				{deleting && <IconTrashCan width={16} height={16} />}
			</div>

			<div className="flex-1 text-sm overflow-x-hidden  ">
				{editing && (
					<input
						className="w=full bg-transparent text-sm outline-none border border-blue-500 "
						value={titleInput}
						onChange={(e) => setTitleInput(e.target.value)}
					/>
				)}

				{!editing && (
					<div className="borber border-transparent truncate">
						{!deleting && chatItem.title}
						{deleting && `Delete "${chatItem.title}"`}
					</div>
				)}
			</div>
			{active && !deleting && !editing && (
				<div className="flex">
					<div onClick={() => setEditing(true)} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
						<IconEdit3 width={16} height={16} />
					</div>

					<div onClick={() => setDeleting(true)} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
						<IconTrashCan width={16} height={16} />
					</div>
				</div>
			)}
			{(deleting || editing) && (
				<div className="flex">
					<div onClick={handleConfirmButton} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
						<IconCheck2 width={16} height={16} />
					</div>

					<div onClick={handleCancelButton} className="cursor-pointer mx-1 opacity-60 hover:opacity-100">
						<IconClose width={16} height={16} />
					</div>
				</div>
			)}
		</div>
	);
};
