import React from 'react'
import NavbarOther from '../navbar/navbar';
import Footer from '../component/footer';


const About = () => {

  return ( 
  <div>
      <NavbarOther/>

    <div className='my-20'>
    <div>
		<h1 className='text-center font-bold text-6xl'>About Us</h1>
    <h2 className='my-10 text-center'> You will find everything about camping here. Our group strives
                to provide the best quality and best price. </h2>
    {/* <img src="https://socialnaturemovement.nz/wp-content/uploads/2021/09/Outdoor-Adventure-gear-hire-rental-Auckland-NZ-2.jpg" alt="" />                
    <img src="https://media.campsaround.com/mainweb/wp-content/uploads/elementor/thumbs/go-camping-with-your-family-q2tz37pjclvj7lsu055y7cdzyj3hmsmv55jutgpmy8.jpg" alt="" /> */}
    </div>
    
    <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold leadi text-center sm:text-5xl">Our team</h1>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				{/* <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0"> */}
				<p className="text-xl font-semibold leadi">Salim</p>
				<p className="dark:text-gray-400">Scrum Master</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				{/* <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1"> */}
				<p className="text-xl font-semibold leadi">Malek</p>
				<p className="dark:text-gray-400">Team Member</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				{/* <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2"> */}
				<p className="text-xl font-semibold leadi">Salah</p>
				<p className="dark:text-gray-400">Team Member</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				{/* <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3"> */}
				<p className="text-xl font-semibold leadi">Marwa</p>
				<p className="dark:text-gray-400">Team Member</p>
			</div>
		</div>
	</div>
</section>  
</div>
      <Footer/>
    
    </div>
  );
};

export default About