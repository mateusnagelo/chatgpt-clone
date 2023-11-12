import { ReactNode } from 'react';

type Props = {
	icon: ReactNode;
	label: string;
	OnClick: () => void;
};

export const SidebarButton = ({ icon, label, OnClick }: Props) => {
	return (
		<div
			className="flex items-center rounded-md p-3
			text-sm cursor-pointer hover:bg-gray-500/20"
		>
			<div className="mr-3">{icon}</div>
			<div className="flew-1 truncate">{label}</div>
		</div>
	);
};
