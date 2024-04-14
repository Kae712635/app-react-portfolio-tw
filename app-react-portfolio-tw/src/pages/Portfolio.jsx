import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const Portfolio = () => {
  return (
    <>

      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22  py-6 pl-8 md:px-14 md:py-12 lg:py-14 2xl:pl-28"style={{ backgroundColor: '#161A30' }}>
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-white md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Porfolio
        </h2>
        <p
          className="text-lg leading-relaxed text-white md:max-w-2xl md:text-2xl
        md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl xl:leading-relaxed
        2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed"
        >
          Below you can see a selection of my web design and front-end development projects.
        </p>
      </section>
      <section
        class="pb-16 lg-gap-12 mx-auto ml-0 mr-0 grid grid-cols-1
        gap-12
        px-12 
        pt-8  // Ajoutez une marge en haut de 6 unités
        md:grid-cols-3 
        md:gap-6 md:px-14 
        lg:px-24 
        xl:px-32 
      " 
      style={{ backgroundColor: '#31304D' }}
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
          
          <a href="portfolio/fashion/index.html">
            <Button className="text-white" style={{ background: 'white' }}>View project</Button>
          </a>

        </Card>

        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="images/project-crypto-wallet.jpg"
          style={{ backgroundColor: '#161A30' }}
        >
          <h5 className="text-2xl font-bold tracking-tight  dark:text-white"style={{ backgroundColor: '#161A30' }}>
          Crypto Wallet
          </h5>
          <p className="font-normal dark:text-gray-400" style={{ backgroundColor: '#161A30' }}>
          A dark-themed web page for a fictitious crypto wallet.
          </p>
          <a href="portfolio/crypto-wallet/index.html">
            <Button className="text-white" style={{ background: 'white' }}>View project</Button>
          </a>
        </Card>
        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="images/project-hero.png"
          style={{ backgroundColor: '#161A30' }}
        >
          <h5 className="text-2xl font-bold tracking-tight  dark:text-white"style={{ backgroundColor: '#161A30' }}>
          Hero Block Gallery
          </h5>
          <p className="font-normal  dark:text-gray-400"style={{ backgroundColor: '#161A30' }}>
          A gallery of hero block elements with split-screen layouts and duotone images.
          </p>
          <a href="portfolio/project-hero/index-1.html">
            <Button className="text-white" style={{ background: 'white' }}>View project</Button>
          </a>
        </Card><Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="images/project-multi-col.png"
          style={{ backgroundColor: '#161A30' }}
        >
          <h5 className="text-2xl font-bold tracking-tight dark:text-white" style={{ backgroundColor: '#161A30' }}>
          Multi-columns
          </h5>
          <p className="font-normal dark:text-gray-400" style={{ backgroundColor: '#161A30' }}>
          A gallery of multi-column, responsive layouts.
          </p>
          
          <a href="portfolio/project-multi-column/index.html">
            <Button className="text-white" style={{ background: 'white' }}>View project</Button>
          </a>

        </Card>

        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="images/project-smoothie.jpg"
          style={{ backgroundColor: '#161A30' }}
        >
          <h5 className="text-2xl font-bold tracking-tight  dark:text-white"style={{ backgroundColor: '#161A30' }}>
          Smooth Smoothies
          </h5>
          <p className="font-normal dark:text-gray-400" style={{ backgroundColor: '#161A30' }}>
          A multi-column, flexbox-based page layout and hero image with a tinted overlay.
          </p>
          <a href="portfolio/smoothies/index.html">
            <Button className="text-whitecd " style={{ background: 'white' }}>View project</Button>
          </a>
        </Card>
      </section>
    </>
  );
};

export default Portfolio;
