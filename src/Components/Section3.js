import React from 'react'

const Section3 = () => {
    return (
			<>
				<div
					className='main'
					style={{
						backgroundColor: ' #EBF7FC',
						height: '20rem',
					}}>
					<div
						className='heading '
						style={{ color: '#043953' }}>
						<h3
							style={{
								textAlign: 'center',
								marginTop: '10px',
								paddingTop: '1rem',
							}}>
							SECTION III [25 points]
						</h3>
					</div>

					<div
						id='carouselExampleIndicators'
						class='carousel slide'
						data-bs-ride='carousel'>
						<div class='carousel-indicators'>
							<button
								type='button'
								data-bs-target='#carouselExampleIndicators'
								data-bs-slide-to='0'
								class='active'
								aria-current='true'
								aria-label='Slide 1'></button>
							<button
								type='button'
								data-bs-target='#carouselExampleIndicators'
								data-bs-slide-to='1'
								aria-label='Slide 2'></button>
							<button
								type='button'
								data-bs-target='#carouselExampleIndicators'
								data-bs-slide-to='2'
								aria-label='Slide 3'></button>
						</div>
						<div class='carousel-inner'>
							<div class='carousel-item active'>
								<div
									className='content mx-auto    '
									style={{
										marginTop: '10px',
										borderRadius: '10px',
										width: '30rem',
										height: '13rem',
										backgroundColor: 'white',
									}}>
									<h5 style={{ textAlign: 'center' }}>
										<i
											class='fa-sharp fa-solid fa-quote-left fa-2x mb-4'
											style={{ marginLeft: '-8rem', marginRight: '7rem' }}></i>
										Lorem Ipsum
									</h5>

									<span>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore veritatis et
										quasi architecto beatae vitae dicta sunt explicabo. Nemo
										enim ipsam voluptatem quia voluptas sit aspernatur aut odit
										aut fugit
									</span>
								</div>
								<span />
							</div>
							<div class='carousel-item'>
								<div
									className='content mx-auto'
									style={{
										marginTop: '10px',
										borderRadius: '10px',
										width: '30rem',
										height: '13rem',
										backgroundColor: 'white',
									}}>
									<h5 style={{ textAlign: 'center' }}>
										<i
											class='fa-sharp fa-solid fa-quote-left fa-2x mb-4'
											style={{ marginLeft: '-8rem', marginRight: '7rem' }}></i>
										Lorem Ipsum
									</h5>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
									quia voluptas sit aspernatur aut odit aut fugit
								</div>
								<span />
							</div>
							<div class='carousel-item'>
								<div
									className='content mx-auto'
									style={{
										marginTop: '10px',
										borderRadius: '10px',
										width: '30rem',
										height: '13rem',
										backgroundColor: 'white',
									}}>
									<h5 style={{ textAlign: 'center' }}>
										<i
											class='fa-sharp fa-solid fa-quote-left fa-2x mb-4'
											style={{ marginLeft: '-8rem', marginRight: '7rem' }}></i>
										Lorem Ipsum
									</h5>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore veritatis et quasi architecto
									beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
									quia voluptas sit aspernatur aut odit aut fugit
								</div>
								<span />
							</div>
						</div>
						<button
							class='carousel-control-prev'
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide='prev'>
							<span
							
								class='carousel-control-prev-icon'
								aria-hidden='true'></span>
							<span class='visually-hidden'>Previous</span>
						</button>
						<button
							class='carousel-control-next'
							type='button'
							data-bs-target='#carouselExampleIndicators'
							data-bs-slide='next'>
							<span
								class='carousel-control-next-icon'
								aria-hidden='true'></span>
							<span class='visually-hidden'>Next</span>
						</button>
					</div>
				</div>
			</>
		);
}

export default Section3
