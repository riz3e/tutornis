import Link from 'next/link';
import image from '../public/image.jpg';

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/sXT3X51.jpg[/img])' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello!</h1>
            <p className="mb-5">We’re here to help you graduate from school, pick your University and list achievements. Easy and clear to understand system, will encourage your input and direct effort for maximum result.</p>

          </div>
        </div>
      </div>
      <p className='text-center text-4xl m-10 font-bold'>
        OUR SERVICE INCLUDE
      </p>
      <div className="flex space-x-5 mx-3 justify-center my-3 font-bold text-3xl">
        <div className="grid h-20 flex-grow card outline rounded-box place-items-center max-w-xs pl-5 text-orange-400">+70 Cources and tests</div>
        <div className="grid h-20 flex-grow card outline rounded-box place-items-center max-w-xs pl-5 text-orange-500">+50 Experts and teachers</div>
        <div className="grid h-20 flex-grow card outline rounded-box place-items-center max-w-xs pl-5 text-orange-600">+300 Hours of education</div>
      </div>

      <div className=' flex my-10 mx-auto justify-center'>
        <div className='join mx-5 join-vertical'>
          <div className="join-item collapse bg-base-200 ">
            <input type="checkbox" />
            <div className="collapse-title text-2xl  text-white font-medium bg-orange-300">
              Career tests
            </div>
            <div className="collapse-content text-white bg-orange-400 text-xl px-5">
              <p>You might use suggested tests online on other services like or relied test <Link href="careertest" className='link'>here</Link></p>
            </div>
          </div>
          <div className="join-item collapse bg-base-200 ">
            <input type="checkbox" />
            <div className="collapse-title text-2xl font-medium bg-orange-500 text-white">
              Achievements and progress plan
            </div>
            <div className="collapse-content bg-orange-600 rad text-white text-xl px-5" >
              <p>To enter prestigious universities, the requirements of which are high, it is necessary not only to have good grades, but also to have a variety of achievements. In general, this includes Olympiads (on profile subjects), volunteer clubs, social projects.</p>
            </div>
          </div>
          <div className="join-item collapse bg-base-200 ">
            <input type="checkbox" />
            <div className="collapse-title text-2xl font-medium bg-orange-700 text-white">
              Proforientator contacts
            </div>
            <div className="collapse-content text-xl text-white bg-orange-800 px-5 ">
              <p>You can make an appointment with school Proforientator Madina Asetova to discuss interested questions, schedule meeting by WhatsApp number - +7 702 649 8916 
              <Link href="https://calendly.com/madinanurlan25/30min" className='link'> or make a Google appointment</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}
