import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
      <section className="custom-background lg:py-4 lg:px-10 px-4 py-2 md:px-8 md:py-6 lg:py-8 xl:px-16 xl:py-10 2xl:px-20 2xl:py-12" style={{ backgroundColor: '#161A30' }}>
        <div className="flex flex-wrap-reverse lg:flex-wrap items-center justify-center lg:justify-between">
          {/* Contenu principal */}
          <div className="lg:w-1/2 lg:pr-8">
          <div className="badge text-xs md:text-sm lg:text-base max-w-xs lg:max-w-full mb-16" style={{ color: '#000', backgroundColor: '#fff', padding: '0.5rem 1rem', maxWidth: '17%' }}>WELCOME</div>
            <h1 className="mb-1 text-3xl font-semibold tracking-tight text-white md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
              Klervi Choblet
            </h1>
            <p className="text-lg leading-relaxed text-white md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed">
              I am an innovative front-end developer who loves to build human-friendly interfaces.
            </p>
          </div>
          {/* Image à droite */}
          <div className="lg:w-1/2 lg:pl-8">
            <img src="images\klervi-removebg-preview.png" alt="Klervi" className="mx-auto lg:ml-auto lg:mr-0" />
          </div>
        </div>
      </section>


      <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72" style={{ backgroundColor: '#31304D' }}>
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-white md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Recent projects
        </h2>
        <p className="text-lg leading-relaxed text-white md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed">
          Below you can see some examples of my recent work. Check out my complete portfolio of{" "}
          <a
            href="#"
            className="font-medium text-sky-400 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            web design
          </a>{" "}
          projects. Have a project you would like to discuss?{" "}
          <a
            href="#"
            className="font-medium text-sky-400 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            Let's make something great together!
          </a>{" "}
        </p>
      </section>

      <section
        class="pb-16 lg-gap-12 mx-auto ml-0 mr-0 grid grid-cols-1
      gap-12
      px-12 
      pt-2 
      md:grid-cols-3 
      md:gap-6 md:px-14 

      lg:px-24 
      xl:px-32 
      " style={{ backgroundColor: '#31304D' }}
      >
        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="images/project-fashion.jpg"
          style={{ backgroundColor: '#161A30' }}
        >
          <h5 className="text-2xl font-bold tracking-tight dark:text-white" style={{ backgroundColor: '#161A30' }}>
          Snazzy Fashion
          </h5>
          <p className="font-normal dark:text-gray-400" style={{ backgroundColor: '#161A30' }}>
          A web page for a fashion retailer with a background video that plays in a continuous loop.
          </p>
          
          <a href="public/portfolio/fashion/index.html">
            <Button className="text-black" style={{ background: 'white' }}>View project</Button>
          </a>

        </Card>

        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="public/images/project-crypto-wallet.jpg"
          style={{ backgroundColor: '#161A30' }}
        >
          <h5 className="text-2xl font-bold tracking-tight  dark:text-white"style={{ backgroundColor: '#161A30' }}>
          Crypto Wallet
          </h5>
          <p className="font-normal dark:text-gray-400" style={{ backgroundColor: '#161A30' }}>
          A dark-themed web page for a fictitious crypto wallet.
          </p>
          <a href="public/portfolio/crypto-wallet/index.html">
            <Button className="text-black" style={{ background: 'white' }}>View project</Button>
          </a>
        </Card>
        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="public/images/project-hero.png"
          style={{ backgroundColor: '#161A30' }}
        >
          <h5 className="text-2xl font-bold tracking-tight  dark:text-white"style={{ backgroundColor: '#161A30' }}>
          Hero Block Gallery
          </h5>
          <p className="font-normal  dark:text-gray-400"style={{ backgroundColor: '#161A30' }}>
          A gallery of hero block elements with split-screen layouts and duotone images.
          </p>
          <a href="public/portfolio/project-hero/index.html">
            <Button className="text-black" style={{ background: 'white' }}>View project</Button>
          </a>
        </Card>
      </section>
    </>
  );
};

export default Home;
