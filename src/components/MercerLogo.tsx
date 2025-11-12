export const MercerLogo = ({ 
	className = "", 
	style 
}: { className?: string; style?: React.CSSProperties }) => (
	<img
		src="/landg_logo.svg"
		alt="User logo"
		width="40"
		height="28"
		className={className}
		style={style}
	/>
);
