import {FaEnvelope, FaMapMarkerAlt, FaPhone} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="padding-x py-10">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-grey-60 mb-8">
            Have questions or suggestions? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-grey-60">
              <FaMapMarkerAlt className="text-yellow-55" />
              <p>123 Tech Street, Digital City, 34567</p>
            </div>
            <div className="flex items-center gap-3 text-grey-60">
              <FaPhone className="text-yellow-55" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-3 text-grey-60">
              <FaEnvelope className="text-yellow-55" />
              <p>contact@futuretech.com</p>
            </div>
          </div>
        </div>

        <div className="bg-dark-15 p-6 rounded-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full bg-dark-20 border border-dark-25 rounded-md p-2 focus:outline-none focus:border-yellow-55"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-dark-20 border border-dark-25 rounded-md p-2 focus:outline-none focus:border-yellow-55"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full bg-dark-20 border border-dark-25 rounded-md p-2 h-32 focus:outline-none focus:border-yellow-55"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-55 text-dark-15 py-2 rounded-md hover:bg-yellow-60 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
