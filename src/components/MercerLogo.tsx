export const MercerLogo = ({ 
	className = "", 
	style 
}: { className?: string; style?: React.CSSProperties }) => (
	<img
		src="/landg_logo.svg"
		alt="User logo"
		width="auto"
		height="24"
		className={className}
		style={style}
	/>
);
