import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="lg:py-13 lg:px-42 px-8 py-6 text-center md:px-40 md:py-12 lg:py-14 xl:px-64 xl:py-16 2xl:px-72" style={{ backgroundColor: '#161A30' }}>
        <h2 className="mb-1 text-3xl font-semibold tracking-tight text-white md:mb-4 md:text-5xl lg:mb-6 lg:text-5xl xl:text-6xl 2xl:text-6xl">
        Get in touch
        </h2>
        <p
          className="text-lg leading-relaxed text-white md:text-2xl md:leading-relaxed
        lg:text-2xl lg:leading-relaxed xl:text-3xl xl:leading-relaxed 2xl:text-3xl 2xl:leading-relaxed"
        >
          Have a project you would like to discuss? Let's make something great together! Email me at {" "}
          <a
            href="#"
            class="font-medium text-sky-400 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            klervi.choblet@gmail.com
          </a>{" "}
          or use the form below to let me know a little more about your objectives and I'll get back to you.
        </p>
      </section>
      <section className="pb-16" style={{ backgroundColor: '#31304D' }}>
        <div className="lg:flex justify-center items-center">
          {/* Image à gauche */}
          <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <img src="https://lunevedy.com/ui/assets/img/800x900-typing.jpg" alt="Placeholder image" className="w-2/3 lg:w-full h-auto mb-8" />
          </div>
           {/* Contenu principal */}
           <div className="lg:w-1/2 lg:pl-8 lg:pr-8">
              {/* Contenu du formulaire ici */}
              <div className=" rounded-md p-6" style={{ backgroundColor: '#161A30' }}>
                <form id="email-form" name="email-form" method="post" action="https://formspree/n/nnnnn">
                  <div className="form-row">
                    <label htmlFor="full_name" className="block mb-2 text-white">Full Name</label>
                    <input type="text" name="full_name" id="full_name" className="w-full p-2 border border-gray-300 rounded-md" required />
                  </div>
                  <div className="form-row">
                    <label htmlFor="email_address" className="block mb-2 text-white">Email</label>
                    <input type="email" name="email_address" id="email_address" className="w-full p-2 border border-gray-300 rounded-md" required />
                  </div>
                  <div className="form-row">
                    <label htmlFor="form_message" className="block mb-2 text-white">How can I help you?</label>
                    <textarea rows="3" name="form_message" id="form_message" className="w-full p-2 border border-gray-300 rounded-md" required></textarea>
                  </div>
                  <div className="form-footer mt-4">
                    <button id="btn-submit" className="btn-solid px-4 py-2 bg-white text-black rounded-md transition-colors hover:bg-gray-800 hover:text-white" type="submit" aria-label="Send message">
                      <span>Send</span><i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Contact;