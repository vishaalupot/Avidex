import React from 'react'

const OurProcess = () => {
    return (
        <div className='h-[82vh] w-[100vw] bg-slate-300/20 flex'>
            <div className='w-[40vw] h-full flex items-center justify-center p-20'>
                <div>
                    <div className='text-[2.2em] font-bold mb-[0px] text-[#af4bac]'>OUR PROCESS</div>
                    <div className='text-[1.8em] font-semibold mb-[8px] text-[#761f73]'>Every Project, Big and Small</div>
                    <div className='text-[1.32em] font-[400] text-slate-800/75'>We take a consultative approach to all our projects by listening to your challenges, goals, and requirements while considering your unique spaces and budget. Our goal is to create easy-to-use, highly functional, and integrated audiovisual solutions for an exceptional, unified project experience. Avidex supports our valued partnerships by designing and integrating world-class audiovisual systems with a focus on integrity and quality.</div>
                </div>
            </div>
            <div className='w-[60vw] h-full flex justify-center items-center'>
                <div className='grid grid-cols-2 gap-8'>
                    <div class="card">
                        <div class="card-inner">
                            <div className="card-front">
                                <p className='text-4xl font-semibold'>1 | DEFINE</p>
                            </div>
                            <div className="card-back">
                                <p className='text-[18px] w-[340px] text-center'>We invest in genuinely listening to understand your vision, challenges, requirements, and budget to define your project scope of work accurately. We'll plan solutions together to best fit your needs of today while also planning for your future goals. </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <div className="card-front">
                                <p className='text-4xl font-semibold'>2 | DESIGN</p>
                            </div>
                            <div className="card-back">
                                <p className='text-[18px] w-[340px] text-center'>Our award-winning team of AV design and engineering experts will recommend, design, and custom engineer reliable, scalable, and serviceable AV and UC solutions to meet your objectives, timeline, and collaboration goals. </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <div className="card-front">
                                <p className='text-4xl font-semibold'>3 | BUILD</p>
                            </div>
                            <div className="card-back">
                                <p className='text-[18px] w-[340px] text-center'>Our Professional Services team handles all aspects of your project from project management, procurement, logistics, installation, testing, documentation, and training for the best customer experience in the industry. </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-inner">
                            <div className="card-front">
                                <p className='text-4xl font-semibold'>4 | SUPPORT</p>
                            </div>
                            <div className="card-back">
                                <p className='text-[18px] w-[340px] text-center'>Avidex combines the best manufacturer-trained and industry-certified professionals with our comprehensive 360° Service™ Managed Services portfolio to fully support our client’s complete audiovisual needs. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProcess