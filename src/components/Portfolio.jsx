import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
	// for popup video

	// for modal
	const [isOpenOpenBoard, setisOpenOpenBoard] = useState(false);
	const [isOpenQuickJot, setisOpenQuickJot] = useState(false);
  const [isOpenToTheMoon, setisOpenToTheMoon] = useState(false);
	const [isOpenEquilibrium, setisOpenEquilibrium] = useState(false);

	function toggleOpenBoard() {
		setisOpenOpenBoard(!isOpenOpenBoard);
	}
	function toggleQuickJot() {
		setisOpenQuickJot(!isOpenQuickJot);
	}
  function toggleToTheMoon() {
		setisOpenToTheMoon(!isOpenToTheMoon);
	}
  function toggleEquilibrium() {
		setisOpenEquilibrium(!isOpenEquilibrium);
	}

	return (
		<>
			<SimpleReactLightbox>
				<div className="tokyo_tm_portfolio">
					<div className="tokyo_tm_title">
						<div className="title_flex">
							<div className="left">
								<span>Portfolio</span>
								<h3>My Work</h3>
							</div>
						</div>
					</div>
					{/* END TOKYO_TM_TITLE */}

					<div className="portfolio_filter">
						<Tabs>
							<TabList>
								<Tab>All</Tab>
							</TabList>
							{/* END TABLIST */}

							<div className="list_wrapper">
								<TabPanel>
									<ul className="portfolio_list">
										<li
											data-aos="fade-right"
											data-aos-duration="1200"
											data-aos-delay="100"
										>
											<div className="inner">
												<div id="project-details">
													<h3>OpenBoard</h3>
													<div id="project-details-links">
														<h5 style={{ marginRight: 20 }} id="project-link">
															<a
																href={`https://openboard-app.herokuapp.com/`}
																target="_blank"
																rel="noreferrer"
															>
																{" "}
																Live{" "}
															</a>
														</h5>
														<h5 id="project-link">
															<a
																href={`https://github.com/parkerbo/OpenBoard`}
																target="_blank"
																rel="noreferrer"
															>
																Repo
															</a>
														</h5>
													</div>
												</div>
												<div className="entry tokyo_tm_portfolio_animation_wrap">
													<img
														src="assets/img/portfolio/OpenBoard.png"
														alt="Details"
														onClick={toggleOpenBoard}
													/>
												</div>
												<div className="mobile_title">
													<h3>OpenBoard</h3>
													<span>ReactJS, Flask, PostgreSQL</span>
												</div>
											</div>
										</li>
										{/* END DETAILS */}
										<li
											data-aos="fade-right"
											data-aos-duration="1200"
											data-aos-delay="200"
										>
											<div className="inner">
												<div id="project-details">
													<h3>QuickJot</h3>
													<div id="project-details-links">
														<h5 style={{ marginRight: 20 }} id="project-link">
															<a
																href={`https://quick-jot-app.herokuapp.com/`}
																target="_blank"
																rel="noreferrer"
															>
																{" "}
																Live{" "}
															</a>
														</h5>
														<h5 id="project-link">
															<a
																href={`https://github.com/parkerbo/QuickJot`}
																target="_blank"
																rel="noreferrer"
															>
																Repo
															</a>
														</h5>
													</div>
												</div>

												<div className="entry tokyo_tm_portfolio_animation_wrap">
													<img
														src="assets/img/portfolio/QuickJot.png"
														alt="Details"
														onClick={toggleQuickJot}
													/>
												</div>
												<div className="mobile_title">
													<h3>QuickJot</h3>
													<span>ReactJS, Express, Sequelize</span>
												</div>
											</div>
										</li>
										<li
											data-aos="fade-right"
											data-aos-duration="1200"
											data-aos-delay="200"
										>
											<div className="inner">
												<div id="project-details">
													<h3>ToTheMoon</h3>
													<div id="project-details-links">
														<h5 style={{ marginRight: 20 }} id="project-link">
															<a
																href={`https://to-the--moon.herokuapp.com/`}
																target="_blank"
																rel="noreferrer"
															>
																{" "}
																Live{" "}
															</a>
														</h5>
														<h5 id="project-link">
															<a
																href={`https://github.com/NJSim/Robinhood2.0/`}
																target="_blank"
																rel="noreferrer"
															>
																Repo
															</a>
														</h5>
													</div>
												</div>

												<div className="entry tokyo_tm_portfolio_animation_wrap">
													<img
														src="assets/img/portfolio/ToTheMoon.png"
														alt="Details"
														onClick={toggleToTheMoon}
													/>
												</div>
												<div className="mobile_title">
													<h3>ToTheMoon</h3>
													<span>ReactJS, Flask, PostgreSQL</span>
												</div>
											</div>
										</li>
										<li
											data-aos="fade-right"
											data-aos-duration="1200"
											data-aos-delay="200"
										>
											<div className="inner">
												<div id="project-details">
													<h3>Equilibrium</h3>
													<div id="project-details-links">
														<h5 style={{ marginRight: 20 }} id="project-link">
															<a
																href={`https://equilibrium.herokuapp.com/`}
																target="_blank"
																rel="noreferrer"
															>
																{" "}
																Live{" "}
															</a>
														</h5>
														<h5 id="project-link">
															<a
																href={`https://github.com/benthere914/medium-clone-equilibrium`}
																target="_blank"
																rel="noreferrer"
															>
																Repo
															</a>
														</h5>
													</div>
												</div>

												<div className="entry tokyo_tm_portfolio_animation_wrap">
													<img
														src="assets/img/portfolio/Equilibrium.png"
														alt="Details"
														onClick={toggleEquilibrium}
													/>
												</div>
												<div className="mobile_title">
													<h3>Equilibrium</h3>
													<span>JavaScript, PugJS, Express, Sequelize</span>
												</div>
											</div>
										</li>
										{/* END DETAILS */}
									</ul>
									{/* END PORTFOLIO LIST */}
								</TabPanel>
								{/* END ALL All */}

								{/* END Details Gallery */}
							</div>
							{/* END LIST WRAPPER */}
						</Tabs>
					</div>
				</div>
			</SimpleReactLightbox>

			{/* START MODAL FOR PORTFOLIO DETAILS */}
			<Modal
				isOpen={isOpenOpenBoard}
				onRequestClose={toggleOpenBoard}
				contentLabel="My dialog"
				className="mymodal"
				overlayClassName="myoverlay"
				closeTimeoutMS={500}
			>
				<div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
					<button className="close-modal" onClick={toggleOpenBoard}>
						<img src="assets/img/svg/cancel.svg" alt="close icon" />
					</button>
					{/* END CLOSE ICON */}
					<div className="box_inner">
						<div className="description_wrap scrollable">
							{/* END IMAGE */}
							<div className="portfolio_main_title">
								<h3>OpenBoard</h3>
								<span>Details</span>
							</div>
							{/* END portfolio_main_title */}
							<div className="main_details">
								<div className="textbox">
									<p>
										OpenBoard is a task management application oriented towards
										bug tracking for software engineering projects. Users can
										create project boards and tasks within projects to monitor,
										organize, update and close with the help of their team.
										OpenBoard is a clone of the project management website
										Asana.
									</p>
								</div>
								<div className="detailbox">
									<ul>
										<li>
											<span className="first">Technologies Used</span>
											<span>
												JavaScript | React | Redux | Flask | SQLAlchemy
											</span>
										</li>
										<li>
											<span className="first">Created</span>
											<span>November 2021</span>
										</li>
										<li>
											<span className="first">Links</span>
											<div id="project-details-links">
												<h5 style={{ marginRight: 20 }} id="project-link">
													<a
														href={`https://openboard-app.herokuapp.com/`}
														target="_blank"
														rel="noreferrer"
													>
														{" "}
														Live{" "}
													</a>
												</h5>
												<h5 id="project-link">
													<a
														href={`https://github.com/parkerbo/OpenBoard`}
														target="_blank"
														rel="noreferrer"
													>
														Repo
													</a>
												</h5>
											</div>
											{/* END SOCIAL SHARE */}
										</li>
									</ul>
								</div>
							</div>
							{/* main_details */}
							<div className="image">
								<div
									className="main"
									style={{
										backgroundImage: "url(assets/img/portfolio/OpenBoard2.png)",
									}}
								></div>
							</div>
							<div className="additional_images">
								<ul className="gallery_zoom">
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage:
															"url(assets/img/portfolio/OpenBoard3.png)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}

									{/* END SHOT */}
								</ul>
							</div>
						</div>
					</div>
					{/* END BOX INNER */}
				</div>
				{/* END MODALBOX NEWS */}
			</Modal>
			{/* END MODAL FOR PORTFOLIO DETAILS */}

			{/* START MODAL FOR PORTFOLIO DETAILS */}
			<Modal
				isOpen={isOpenQuickJot}
				onRequestClose={toggleQuickJot}
				contentLabel="My dialog"
				className="mymodal"
				overlayClassName="myoverlay"
				closeTimeoutMS={500}
			>
				<div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
					<button className="close-modal" onClick={toggleQuickJot}>
						<img src="assets/img/svg/cancel.svg" alt="close icon" />
					</button>
					{/* END CLOSE ICON */}
					<div className="box_inner">
						<div className="description_wrap scrollable">
							{/* END IMAGE */}
							<div className="portfolio_main_title">
								<h3>QuickJot</h3>
								<span>Details</span>
							</div>
							{/* END portfolio_main_title */}
							<div className="main_details">
								<div className="textbox">
									<p>
										QuickJot is a note-taking application that allows notes and
										notebooks to be created, organized, and searched for
									</p>
									<p>
										In this project I implemented a quick search feature by
										creating a slice of state in Redux that utilizes already
										fetched user data to allow users to search against their
										note and notebook titles. I also created a modal based form
										environment by using React context and click event listeners
										to allow for a seamless user experience when displaying and
										submitting forms.
									</p>
								</div>
								<div className="detailbox">
									<ul>
										<li>
											<span className="first">Technologies Used</span>
											<span>
												JavaScript | React | Redux | Express | Sequelize
											</span>
										</li>
										<li>
											<span className="first">Created</span>
											<span>October 2021</span>
										</li>
										<li>
											<span className="first">Links</span>
											<div id="project-details-links">
												<h5 style={{ marginRight: 20 }} id="project-link">
													<a
														href={`https://quick-jot-app.herokuapp.com/`}
														target="_blank"
														rel="noreferrer"
													>
														{" "}
														Live{" "}
													</a>
												</h5>
												<h5 id="project-link">
													<a
														href={`https://github.com/parkerbo/QuickJot`}
														target="_blank"
														rel="noreferrer"
													>
														Repo
													</a>
												</h5>
											</div>
											{/* END SOCIAL SHARE */}
										</li>
									</ul>
								</div>
							</div>
							{/* main_details */}
							<div className="image">
								<img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
								<div
									className="main"
									style={{
										backgroundImage: "url(assets/img/portfolio/QuickJot2.png)",
									}}
								></div>
							</div>
						</div>
					</div>
					{/* END BOX INNER */}
				</div>
				{/* END MODALBOX NEWS */}
			</Modal>
			<Modal
				isOpen={isOpenToTheMoon}
				onRequestClose={toggleToTheMoon}
				contentLabel="My dialog"
				className="mymodal"
				overlayClassName="myoverlay"
				closeTimeoutMS={500}
			>
				<div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
					<button className="close-modal" onClick={toggleToTheMoon}>
						<img src="assets/img/svg/cancel.svg" alt="close icon" />
					</button>
					{/* END CLOSE ICON */}
					<div className="box_inner">
						<div className="description_wrap scrollable">
							{/* END IMAGE */}
							<div className="portfolio_main_title">
								<h3>ToTheMoon</h3>
								<span>Details</span>
							</div>
							{/* END portfolio_main_title */}
							<div className="main_details">
								<div className="textbox">
									<p>
										ToTheMoon is a stock trading platform clone based off of
										Robinhood. ToTheMoon's purpose is to emulate stock trading
										and investments for beginners. Purchase and sell shares of
										stock to view your portfolio's progress. View live data
										straight from real API fetch calls.
									</p>
									<p>
										ToTheMoon was created in collaboration with three other
										engineers during a week-long sprint utilizing user stories
										and daily standups to delegate tasks for efficient
										application completion.
									</p>
								</div>
								<div className="detailbox">
									<ul>
										<li>
											<span className="first">Technologies Used</span>
											<span>
												JavaScript | React | Redux | Flask | SQLAlchemy |
												IEXCloud API
											</span>
										</li>
										<li>
											<span className="first">Created</span>
											<span>October 2021</span>
										</li>
										<li>
											<span className="first">Links</span>
											<div id="project-details-links">
												<h5 style={{ marginRight: 20 }} id="project-link">
													<a
														href={`https://to-the--moon.herokuapp.com/`}
														target="_blank"
														rel="noreferrer"
													>
														{" "}
														Live{" "}
													</a>
												</h5>
												<h5 id="project-link">
													<a
														href={`https://github.com/NJSim/Robinhood2.0/`}
														target="_blank"
														rel="noreferrer"
													>
														Repo
													</a>
												</h5>
											</div>
											{/* END SOCIAL SHARE */}
										</li>
									</ul>
								</div>
							</div>
							{/* main_details */}
							<div className="image">
								<img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
								<div
									className="main"
									style={{
										backgroundImage: "url(assets/img/portfolio/ToTheMoon2.png)",
									}}
								></div>
							</div>
							<div className="additional_images">
								<ul className="gallery_zoom">
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage:
															"url(assets/img/portfolio/ToTheMoon3.png)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}

									{/* END SHOT */}
								</ul>
							</div>
						</div>
					</div>
					{/* END BOX INNER */}
				</div>
				{/* END MODALBOX NEWS */}
			</Modal>
			<Modal
				isOpen={isOpenEquilibrium}
				onRequestClose={toggleEquilibrium}
				contentLabel="My dialog"
				className="mymodal"
				overlayClassName="myoverlay"
				closeTimeoutMS={500}
			>
				<div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
					<button className="close-modal" onClick={toggleEquilibrium}>
						<img src="assets/img/svg/cancel.svg" alt="close icon" />
					</button>
					{/* END CLOSE ICON */}
					<div className="box_inner">
						<div className="description_wrap scrollable">
							{/* END IMAGE */}
							<div className="portfolio_main_title">
								<h3>Equilibrium</h3>
								<span>Details</span>
							</div>
							{/* END portfolio_main_title */}
							<div className="main_details">
								<div className="textbox">
									<p>
										Equilibrium is a full stack application that allows users to
										create and view articles based on outdoor related
										activities. Users can sign up, create posts, like and
										comment on articles and create a customized feed based on
										following certain topics.
									</p>
                  <p>
                    Equilibrium was created in collaboration with two other software engineers over a weeklong sprint.
                  </p>
								</div>
								<div className="detailbox">
									<ul>
										<li>
											<span className="first">Technologies Used</span>
											<span>
												JavaScript | PugJS | AJAX | Express | PostgreSQL
											</span>
										</li>
										<li>
											<span className="first">Created</span>
											<span>September 2021</span>
										</li>
										<li>
											<span className="first">Links</span>
											<div id="project-details-links">
												<h5 style={{ marginRight: 20 }} id="project-link">
													<a
														href={`https://equilibrium.herokuapp.com/`}
														target="_blank"
														rel="noreferrer"
													>
														{" "}
														Live{" "}
													</a>
												</h5>
												<h5 id="project-link">
													<a
														href={`https://github.com/benthere914/Equilibrium-Web-Forum`}
														target="_blank"
														rel="noreferrer"
													>
														Repo
													</a>
												</h5>
											</div>
											{/* END SOCIAL SHARE */}
										</li>
									</ul>
								</div>
							</div>
							{/* main_details */}
							<div className="image">
								<img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
								<div
									className="main"
									style={{
										backgroundImage: "url(assets/img/portfolio/Equilibrium2.png)",
									}}
								></div>
							</div>
							<div className="additional_images">
								<ul className="gallery_zoom">
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/Equilibrium3.png)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}

									{/* END SHOT */}
								</ul>
							</div>
						</div>
					</div>
					{/* END BOX INNER */}
				</div>
				{/* END MODALBOX NEWS */}
			</Modal>
			{/* END MODAL FOR PORTFOLIO DETAILS */}
		</>
	);
};

export default Portfolio;
