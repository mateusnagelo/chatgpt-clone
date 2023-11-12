import { ReactNode } from 'react';
import IconAdd from './icons/iconAdd';
import IconClose from './icons/iconsClose';
import { SidebarButton } from './SidebarButton';
import IconTrashCan from './icons/IconTrashCan';

type Props = {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
	OnClear: () => void;
	onNewChat: () => void;
};

export const Sidebar = ({ open, onClose, OnClear, onNewChat, children }: Props) => {
	return (
		<section
			className={`fixed left-0 top-0 buttom-0 text-white
		 ${open ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static`}
		>
			<div
				className={`transition-all duration-200 flex h-screen
				${open ? 'ml-0' : 'ml-96'} md:ml-0`}
			>
				<div className="flex flex-col w-64 p-2 bg-gray-900 ">
					<div
						onClick={onNewChat}
						className="flex items-center p-3 rounded-md
					text-sm cursor-pointer border white/20 hover:bg-gray-500/20"
					>
						<IconAdd width={16} height={16} className="mr-3" />
						Nova Conversa
					</div>

					<nav className="flex-1 pt-2 overflow-y-auto ">{children}</nav>
					<div className="border-t border-gray-700 pt-2">
						<SidebarButton
							icon={<IconTrashCan width={16} height={16} />}
							label="Limpar todas as conversas"
							OnClick={OnClear}
						/>
					</div>
				</div>
				<div onClick={onClose} className="flex justify-center items-center w-10 h-10 cursor-pointer md:hidden">
					<IconClose width={24} height={24} />
				</div>
			</div>
		</section>
	);
};