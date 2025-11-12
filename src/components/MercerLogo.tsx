export const MercerLogo = ({ 
	className = "", 
	style 
}: { className?: string; style?: React.CSSProperties }) => (
	<img
		src="/landg_logo.svg"
		alt="User logo"
		width="20"
		height="14"
		className={className}
		style={style}
	/>
);
