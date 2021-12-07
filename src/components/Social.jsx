import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialShare = [
	{
		iconName: "linked-in",
		link: "https://www.facebook.com/",
	},
	{ iconName: "twitter", link: "https://twitter.com/" },
	{
		iconName: "instagram",
		link: "https://www.instagram.com/",
	},
	{ iconName: "dribbble", link: "https://dribbble.com/" },
	{
		iconName: "tik-tok",
		link: "https://www.tiktok.com/",
	},
];
const Social = () => {
	return (
		<>
			<ul className="social" style={{display:"flex", alignItems:"center"}} >
				<li>
					<a
						href={`https://www.linkedin.com/in/parkerbolick/`}
						target="_blank"
						rel="noreferrer"
					>
						<BsLinkedin size="5rem" />
					</a>
				</li>
				<li>
					<a
						href={`http://www.github.com/parkerbo`}
						target="_blank"
						rel="noreferrer"
					>
						<BsGithub size="5rem" />
					</a>
				</li>
				<li style={{marginBottom: 10}}>
					<a href="mailto:bolickparker@gmail.com">bolickparker@gmail.com</a>
				</li>
			</ul>
			{/* END SOCIAL */}
		</>
	);
};

export default Social;
