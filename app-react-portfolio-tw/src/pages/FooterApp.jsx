import { Footer } from "flowbite-react";

const FooterApp = () => {
  return (
    <Footer className="rounded-none" style={{ backgroundColor: '#161A30', color: 'white' }}>
      <div className="w-full">
        <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72">
          <h2 className="mb-1 text-3xl font-semibold tracking-tight md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
            Klervi Choblet
          </h2>
          <p className="text-lg leading-relaxed md:text-2xl md:leading-relaxed lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed">
            Front-end designer and developer
          </p>
        </section>
        <div className="w-full text-center">
          <ul className="footer-icons">
            <li>
              <a href="https://www.linkedin.com/in/klervi-choblet-361720244/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Kae712635" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-square"></i>
              </a>
            </li>
          </ul>
          <Footer.LinkGroup className="flex justify-center w-full">
            <Footer.Link href="/home" className="mx-2 text-sky-400">Home</Footer.Link>
            <Footer.Link href="/portfolio" className="mx-2 text-sky-400">Portfolio</Footer.Link>
            <Footer.Link href="/privacy" className="mx-2 text-sky-400">Privacy & Legal</Footer.Link>
            <Footer.Link href="/contact" className="mx-2 text-sky-400">Contact</Footer.Link>
          </Footer.LinkGroup>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;
