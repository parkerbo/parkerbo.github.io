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
							<div className="image">
								<img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
								<div
									className="main"
									style={{
										backgroundImage: "url(assets/img/portfolio/6.jpg)",
									}}
								></div>
							</div>
							{/* END IMAGE */}
							<div className="portfolio_main_title">
								<h3>OpenBoard</h3>
								<span>Details</span>
							</div>
							{/* END portfolio_main_title */}
							<div className="main_details">
								<div className="textbox">
									<p>
										We live in a world where we need to move quickly and iterate
										on our ideas as flexibly as possible. Building mockups
										strikes the ideal balance between true-life representation
										of the end product and ease of modification.
									</p>
									<p>
										Mockups are useful both for the creative phase of the
										project - for instance when you're trying to figure out your
										user flows or the proper visual hierarchy - and the
										production phase when they will represent the target
										product. Making mockups a part of your creative and
										development process allows you to quickly and easily ideate.
									</p>
								</div>
								<div className="detailbox">
									<ul>
										<li>
											<span className="first">Client</span>
											<span>Alvaro Morata</span>
										</li>
										<li>
											<span className="first">Category</span>
											<span>Details</span>
										</li>
										<li>
											<span className="first">Date</span>
											<span>March 07, 2021</span>
										</li>
										<li>
											<span className="first">Share</span>
											<Social />
											{/* END SOCIAL SHARE */}
										</li>
									</ul>
								</div>
							</div>
							{/* main_details */}

							<div className="additional_images">
								<ul className="gallery_zoom">
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/8.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/2.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/3.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
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
							<div className="image">
								<img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
								<div
									className="main"
									style={{
										backgroundImage: "url(assets/img/portfolio/7.jpg)",
									}}
								></div>
							</div>
							{/* END IMAGE */}
							<div className="portfolio_main_title">
								<h3>Ave Simone</h3>
								<span>Details</span>
							</div>
							{/* END portfolio_main_title */}
							<div className="main_details">
								<div className="textbox">
									<p>
										We live in a world where we need to move quickly and iterate
										on our ideas as flexibly as possible. Building mockups
										strikes the ideal balance between true-life representation
										of the end product and ease of modification.
									</p>
									<p>
										Mockups are useful both for the creative phase of the
										project - for instance when you're trying to figure out your
										user flows or the proper visual hierarchy - and the
										production phase when they will represent the target
										product. Making mockups a part of your creative and
										development process allows you to quickly and easily ideate.
									</p>
								</div>
								<div className="detailbox">
									<ul>
										<li>
											<span className="first">Client</span>
											<span>Alvaro Morata</span>
										</li>
										<li>
											<span className="first">Category</span>
											<span>Details</span>
										</li>
										<li>
											<span className="first">Date</span>
											<span>March 07, 2021</span>
										</li>
										<li>
											<span className="first">Share</span>
											<Social />
											{/* END SOCIAL SHARE */}
										</li>
									</ul>
								</div>
							</div>
							{/* main_details */}

							<div className="additional_images">
								<ul className="gallery_zoom">
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/6.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/5.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/4.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
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
							<div className="image">
								<img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
								<div
									className="main"
									style={{
										backgroundImage: "url(assets/img/portfolio/6.jpg)",
									}}
								></div>
							</div>
							{/* END IMAGE */}
							<div className="portfolio_main_title">
								<h3>ToTheMoon</h3>
								<span>Details</span>
							</div>
							{/* END portfolio_main_title */}
							<div className="main_details">
								<div className="textbox">
									<p>
										We live in a world where we need to move quickly and iterate
										on our ideas as flexibly as possible. Building mockups
										strikes the ideal balance between true-life representation
										of the end product and ease of modification.
									</p>
									<p>
										Mockups are useful both for the creative phase of the
										project - for instance when you're trying to figure out your
										user flows or the proper visual hierarchy - and the
										production phase when they will represent the target
										product. Making mockups a part of your creative and
										development process allows you to quickly and easily ideate.
									</p>
								</div>
								<div className="detailbox">
									<ul>
										<li>
											<span className="first">Client</span>
											<span>Alvaro Morata</span>
										</li>
										<li>
											<span className="first">Category</span>
											<span>Details</span>
										</li>
										<li>
											<span className="first">Date</span>
											<span>March 07, 2021</span>
										</li>
										<li>
											<span className="first">Share</span>
											<Social />
											{/* END SOCIAL SHARE */}
										</li>
									</ul>
								</div>
							</div>
							{/* main_details */}

							<div className="additional_images">
								<ul className="gallery_zoom">
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/8.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/2.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/3.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
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
							<div className="image">
								<img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
								<div
									className="main"
									style={{
										backgroundImage: "url(assets/img/portfolio/6.jpg)",
									}}
								></div>
							</div>
							{/* END IMAGE */}
							<div className="portfolio_main_title">
								<h3>OpenBoard</h3>
								<span>Details</span>
							</div>
							{/* END portfolio_main_title */}
							<div className="main_details">
								<div className="textbox">
									<p>
										We live in a world where we need to move quickly and iterate
										on our ideas as flexibly as possible. Building mockups
										strikes the ideal balance between true-life representation
										of the end product and ease of modification.
									</p>
									<p>
										Mockups are useful both for the creative phase of the
										project - for instance when you're trying to figure out your
										user flows or the proper visual hierarchy - and the
										production phase when they will represent the target
										product. Making mockups a part of your creative and
										development process allows you to quickly and easily ideate.
									</p>
								</div>
								<div className="detailbox">
									<ul>
										<li>
											<span className="first">Client</span>
											<span>Alvaro Morata</span>
										</li>
										<li>
											<span className="first">Category</span>
											<span>Details</span>
										</li>
										<li>
											<span className="first">Date</span>
											<span>March 07, 2021</span>
										</li>
										<li>
											<span className="first">Share</span>
											<Social />
											{/* END SOCIAL SHARE */}
										</li>
									</ul>
								</div>
							</div>
							{/* main_details */}

							<div className="additional_images">
								<ul className="gallery_zoom">
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/8.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/2.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
									{/* END SHOT */}
									<li>
										<div className="list_inner">
											<div className="my_image">
												<img src="img/thumbs/4-2.jpg" alt="thumb" />
												<div
													className="main"
													style={{
														backgroundImage: "url(assets/img/portfolio/3.jpg)",
													}}
												></div>
											</div>
										</div>
									</li>
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
