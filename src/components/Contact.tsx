
// pages/contact.js

export default function Contact() {
    return (
        <div id="contact" className='container pt-32'>
      <div  className="min-h-screen bg--100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-white-900" data-aos="flip-right">Contact Me</h2>
            <p className="mt-2 text-center text-sm text-white-600" data-aos="flip-right">
              Feel free to reach out by filling the form below.
            </p>
          </div>

  
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="rounded-md shadow-sm -space-y-px" >
              <div>
                <label htmlFor="name" className="sr-only">Name </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-white-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                //   rows="5"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </div>
  
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
  

//   // pages/api/contact.js

// // export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const { name, email, message } = req.body;
  
//       // Basic validation
//       if (!name || !email || !message) {
//         return res.status(400).json({ error: 'All fields are required.' });
//       }
  
//       // Here you can add code to send the data to your email or save it to a database.
//       // For example, using Nodemailer or any other service.
  
//       // Simulating a successful response
//       return res.status(200).json({ message: 'Message sent successfully!' });
//     } else {
//       // Handle any other HTTP method
//       res.setHeader('Allow', ['POST']);
//       return res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  