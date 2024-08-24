import Svg, { SvgProps, Path } from "react-native-svg";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface GitHubIconProps extends SvgProps {
	width?: number;
	height?: number;
}

export const GitHubIcon = (props: GitHubIconProps) => (
	<Svg
		width={props.width ?? 24}
		height={props.height ?? 24}
		viewBox="0 0 512 512"
		{...props}
	>
		<Path d="M239.7 65.1c-22.3 1.8-46.2 8.5-67.4 18.9-46.1 22.6-80.9 62.4-97.2 111.5-15.7 47.1-12.5 98.6 8.8 143 21 43.9 59.1 79.3 103.9 96.6 9.5 3.6 15 3.8 18 .6 2.1-2.2 2.2-3.3 2.2-17.6 0-15.2 0-15.2-2.6-17.6-2.5-2.4-3.4-2.5-14.3-2.5-18.2 0-27.1-3-37.1-12.6-5.7-5.4-6-5.9-13.1-20.7-4.5-9.5-11.1-17.2-20.4-23.7-6.6-4.7-7.3-8.2-2-10 6.7-2.2 17 .9 25.2 7.6 2.4 2 6.8 7.1 9.8 11.3 10.3 14.7 18 20 30.5 20.9 8.2.6 19.1-1.3 22.4-3.9 3.2-2.5 8-16.1 7.1-20.6-.8-4.3-3-5.7-13.5-8.3-40.1-10.2-60.2-33.3-65-74.5-2.8-24.7.2-40.3 11.1-58.5l5.1-8.5-.9-9.5c-1-12.3-.8-21.9.8-28.2 1.6-6.8 6.9-12.2 13.4-13.6 6.6-1.4 11.8.3 29.4 9.5 16.1 8.4 14.6 8.2 32.1 4.8 13.3-2.7 43.6-2.4 61.3.4 7.6 1.2 15.2 1.9 16.8 1.6 1.7-.4 7.1-3.1 12.2-6.1 11.2-6.7 23.5-10.8 29.2-9.9 5.6.8 11.1 4.7 13.7 9.8 2.2 4 2.3 5.3 2.3 23.7v19.5l3.2 5c9.8 15.3 12.8 26.1 12.7 46-.1 49.4-21 78.2-64.5 89-15 3.7-17.2 6.9-12.9 18.3 3 7.8 4 20.4 4 50.4v26.7l2.6 2c4 3.1 9.2 2.6 20.7-1.9 41.2-16.1 78-50 98.4-90.5 23.6-46.9 27.6-98.8 11.2-148-16.5-49.6-51.4-89.4-98.3-111.9-23.3-11.3-42.2-16.4-68.1-18.6-13.4-1.1-16.7-1.1-30.8.1z" />
	</Svg>
);

export const Star = (props: any) => (
	<FontAwesome name="star" size={16} color={"yellow"} {...props} />
);

export const StarHalf = (props: any) => (
	<FontAwesome name="star-half" size={16} color={"yellow"} {...props} />
);

export const StarO = (props: any) => (
	<FontAwesome name="star-o" size={16} color={"yellow"} {...props} />
);

export const IconRepo = (props: any) => (
	<Octicons name="repo" size={16} color={"black"} {...props} />
);

export const IconFork = (props: any) => (
	<FontAwesome6 name="code-fork" size={16} color={"black"} {...props} />
);
