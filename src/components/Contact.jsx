import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import emailjs from "emailjs-com";
import Social from "./Social";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
	const [viewport, setViewport] = useState({
		latitude: 33.741269,
		longitude: -84.399363,
		zoom: 10,
	});

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_pflm1pp",
				"template_bvfgwo4",
				e.target,
				"user_6jvehjVpFJN55tFp9Xdzq"
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});

		e.target.reset();
	}

	return (
		<>
			<div className="tokyo_tm_contact">
				<div className="tokyo_tm_title">
					<div className="title_flex">
						<div className="left">
							<span>Contact</span>
							<h3>Get in Touch</h3>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									color: "white",
									marginTop: 20,
								}}
							>
								<div>

									<a
										href={`https://www.linkedin.com/in/parkerbolick/`}
										target="_blank"
										rel="noreferrer"
										style={{ color: "white", marginRight: 10 }}
									>
										<BsLinkedin  />
									</a>
								</div>
								<div>
									<a
										href={`http://www.github.com/parkerbo`}
										target="_blank"
										rel="noreferrer"
										style={{ color: "white", marginRight: 10 }}
									>
										<BsGithub />
									</a>
								</div>
							</div>
							<div style={{ marginBottom: 10 }}>
								<a
									href="mailto:bolickparker@gmail.com"
									style={{ color: "white", textDecoration: "none" }}
								>
									Email: bolickparker@gmail.com
								</a>
							</div>
							<div style={{ marginBottom: 10 }}>
								<a
									href="tel:+17069455909"
									style={{ color: "white", textDecoration: "none" }}
								>
									Phone: (706) 945-5909
								</a>
							</div>
              Location: Atlanta, GA
						</div>
					</div>
				</div>
				{/* END TITLE */}

				{/* MENU WRAP */}

				<div className="fields">
					<h3 style={{ marginBottom: 10 }}>Send an email</h3>
					<form className="contact_form" onSubmit={sendEmail}>
						<div className="first">
							<ul>
								<li>
									<input type="text" name="name" placeholder="Name" />
								</li>
								{/* END FIRST NAME */}

								<li>
									<input type="email" name="user_email" placeholder="Email" />
								</li>
								{/* END EMAIL */}

								<li>
									<textarea name="message" placeholder="Message"></textarea>
								</li>
								{/* END SUBJECT MESSAGE */}
							</ul>
						</div>
						<div className="tokyo_tm_button">
							<button type="submit" className="ib-button">
								Send Message
							</button>
						</div>
						{/* END SUBMIT BUTTON */}
					</form>
					{/* END FORM */}
				</div>
				{/* END FIELDS */}
			</div>
			{/* END COTACT */}
		</>
	);
};

export default Contact;
