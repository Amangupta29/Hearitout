/** @format */

import React from 'react';
import logo from '../images/logo.png';
import Section3 from './Section3.js';
import Footer from './Footer.js';
const Navbar = () => {
	return (
		<>
			<div className='Header'>
				<img src={logo} />
			</div>
			<hr></hr>
			<div>
				<div className='col'>
					<h3 style={{ color: '#01818C' }}>SECTION I [15 points]</h3>
					<br />
					<br />

					<div className='container '>
						<div
							className='question '
							style={{ textAlign: 'left', marginLeft: '5rem' }}>
							<div className=''>
								<b>Q. which option best describes your job role?</b>

								<div
									className=' '
									id='options'>
									<input
										type='radio'
										name='radio'
									/>

									<label className='options'>Radio Option</label>
									<br />
									<input
										type='radio'
										name='radio'
									/>

									<label className='options'>Radio Option</label>
									<br />
									<input
										type='radio'
										name='radio'
									/>

									<label className='options'>Radio Option</label>
									<br />
									<input
										type='radio'
										name='radio'
									/>

									<label className='options'>Radio Option</label>
								</div>
							</div>

							<br />
							<br />
							<div>
								<h4
									style={{
										color: '#01818C',
									}}>
									Lorem ipsum dolor sit amet
								</h4>

								<div className='btn-group'>
									<button
										style={{ border: '2px solid #D0D0D0' }}
										type='button'
										className='btn  dropdown-toggle'
										data-bs-toggle='dropdown'
										data-bs-display='static'
										aria-expanded='false'>
										Right-aligned but left aligned when large screen
									</button>
									<ul className='dropdown-menu dropdown-menu-end dropdown-menu-lg-start'>
										<li>
											<button
												className='dropdown-item'
												type='button'>
												Action
											</button>
										</li>
										<li>
											<button
												className='dropdown-item'
												type='button'>
												Another action
											</button>
										</li>
										<li>
											<button
												className='dropdown-item'
												type='button'>
												Something else here
											</button>
										</li>
									</ul>
								</div>
							</div>

							<br />
							<br />
							<div className=''>
								<b>Q. which option best describes your job role?</b>
							</div>
							<div classNameName='r'>
								<div
									className='ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3 '
									id='options'>
									<input
										type='radio'
										name='radio'
									/>

									<label className='options'>Radio Option</label>
									<br />
									<input
										type='radio'
										name='radio'
									/>

									<label className='options'>Radio Option</label>
									<br />
									<input
										type='radio'
										name='radio'
									/>

									<label className='options'>Radio Option</label>
									<br />
									<input
										type='radio'
										name='radio'
									/>

									<label className='options'>Radio Option</label>
									<br />
									<br />
									<br />
								</div>
								<button
									type='button'
									className='btn'
									style={{ backgroundColor: '#01818C', color: 'white' }}>
									Submit
								</button>

								<br />
								<br />
								<br />
								<div>
									<h4 style={{ color: '#01818C', textAlign: 'center' }}>
										SECTION II [20 points]
									</h4>

									<br />

									<h4 style={{ color: '#01818C', textAlign: 'center' }}>
										Lorem ipsum dolor sit amet
									</h4>
									<div
										style={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}>
										<div className='btn-group'>
											<button
												style={{ backgroundColor: ' #F4FBFF' }}
												type='button'
												className='btn  dropdown-toggle'
												data-bs-toggle='dropdown'
												data-bs-display='static'
												aria-expanded='false'>
												Right-aligned but left aligned when large screen
											</button>
											<ul className='dropdown-menu dropdown-menu-end dropdown-menu-lg-start'>
												<li>
													<button
														className='dropdown-item'
														type='button'>
														Action
													</button>
												</li>
												<li>
													<button
														className='dropdown-item'
														type='button'>
														Another action
													</button>
												</li>
												<li>
													<button
														className='dropdown-item'
														type='button'>
														Something else here
													</button>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<br />
								<br />
								<br />
								<br />
							</div>
						</div>

						<div className='row'>
							<div
								className='col-md-3 col-sm-12'
								style={{ marginLeft: '6rem' }}>
								<div
									className='card h-100'
									style={{
										borderColor: '#2B7397',
										borderRadius: '10px',
										width: '20rem',
									}}>
									<div className='card-body'>
										<h5 className='card-title'>Card title</h5>
										<p className='card-text'>
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</p>
									</div>
									<div>
										<button
											style={{
												width: '100%',
												border: 'none',
												backgroundColor: '#2B7397',
											}}>
											Click
										</button>
									</div>
								</div>
							</div>
							<div
								className='col-md-3 col-sm-12'
								style={{ marginLeft: '6rem' }}>
								<div
									className='card h-100'
									style={{
										borderColor: '#32959D',
										borderRadius: '10px',
										width: '20rem',
									}}>
									<div className='card-body'>
										<h5 className='card-title'>Card title</h5>
										<p className='card-text'>
											This card has supporting text below as a natural lead-in
											to additional content.
										</p>
									</div>
									<div>
										<button
											style={{
												width: '100%',
												border: 'none',
												backgroundColor: '#32959D',
											}}>
											Click
										</button>
									</div>
								</div>
							</div>
							<div
								className='col-md-3 col-sm-12'
								style={{ marginLeft: '6rem' }}>
								<div
									className='card h-100'
									style={{
										borderColor: '#9C7777',
										borderRadius: '10px',
										width: '20rem',
									}}>
									<div className='card-body'>
										<h5 className='card-title'>Card title</h5>
										<p className='card-text'>
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This card has even
											longer content than the first to show that equal height
											action.
										</p>
									</div>
									<div>
										<button
											style={{
												width: '100%',
												border: 'none',
												backgroundColor: '#9C7777',
											}}>
											Click
										</button>
									</div>
								</div>
							</div>
						</div>
						<br />
						<br />

						<div className='btn-group'>
							<button
								style={{ backgroundColor: ' #F4FBFF' }}
								type='button'
								className='btn  dropdown-toggle'
								data-bs-toggle='dropdown'
								data-bs-display='static'
								aria-expanded='false'>
								Right-aligned but left aligned when large screen
							</button>
							<ul className='dropdown-menu dropdown-menu-end dropdown-menu-lg-start'>
								<li>
									<button
										className='dropdown-item'
										type='button'>
										Action
									</button>
								</li>
								<li>
									<button
										className='dropdown-item'
										type='button'>
										Another action
									</button>
								</li>
								<li>
									<button
										className='dropdown-item'
										type='button'>
										Something else here
									</button>
								</li>
							</ul>
						</div>
						<br />
						<br />

						<div className='btn-group'>
							<button
								style={{ backgroundColor: ' #F4FBFF' }}
								type='button'
								className='btn  dropdown-toggle'
								data-bs-toggle='dropdown'
								data-bs-display='static'
								aria-expanded='false'>
								Right-aligned but left aligned when large screen
							</button>
							<ul className='dropdown-menu dropdown-menu-end dropdown-menu-lg-start'>
								<li>
									<button
										className='dropdown-item'
										type='button'>
										Action
									</button>
								</li>
								<li>
									<button
										className='dropdown-item'
										type='button'>
										Another action
									</button>
								</li>
								<li>
									<button
										class='dropdown-item'
										type='button'>
										Something else here
									</button>
								</li>
							</ul>
						</div>
						<br />
						<br />
						<Section3 />
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
