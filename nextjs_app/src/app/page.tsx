export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto bg-white">
        <div>
          <h3 className="text-2xl font-bold">Calendar Plus</h3>
        </div>
        <ul className="list-none flex gap-8 m-0">
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline text-lg font-semibold hover:text-blue-500"
            >
              Intro
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline text-lg font-semibold hover:text-blue-500"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline text-lg font-semibold hover:text-blue-500"
            >
              Use Cases
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-800 no-underline text-lg font-semibold hover:text-blue-500"
            >
              Pricing
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#"
            className="text-gray-800 no-underline text-lg font-semibold hover:text-blue-500"
          >
            Contact Sales
          </a>
        </div>
      </div>

      <section className="flex justify-center items-center py-20 bg-gray-100">
        <div className="flex justify-between items-center max-w-7xl w-full mx-auto px-5">
          <div className="max-w-md pr-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Managing Your Events Has Never Been Easier
            </h1>
            <p className="text-lg text-gray-600 leading-7 mb-6">
              Say goodbye to missed events and double bookings! Our Calendar
              lets you organize, plan, and manage your schedule seamlessly, so
              you can stay on top of everything. With the all-new{" "}
              <strong>Wish Event Calendar</strong>, you can now easily mark your
              desired events, get reminders, and prioritize your plans like
              never before. Whether it&apos;s a meeting, birthday, or special
              occasion, planning your life has never been so simple and
              efficient.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Read More.
            </a>
          </div>

          <div className="max-w-md">
            <img
              src="/calendar.png"
              alt="Product Image"
              className="rounded-lg shadow-xl transform transition-all hover:scale-105"
              width={570}
              height={470}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-7xl mx-auto">
        {["Basic Plan", "Pro Plan", "Enterprise Plan"].map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 text-center transition-all transform hover:translate-y-2 hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {plan}
            </h2>
            <div className="text-4xl font-bold text-green-600 mb-6">
              ${[9.99, 19.99, 49.99][index]}/month
            </div>
            <ul className="list-none mb-6 text-lg text-gray-600">
              {index === 0 && (
                <>
                  <li>1 User</li>
                  <li>10 Events/month</li>
                  <li>Basic Support</li>
                  <li>Basic Calendar Features</li>
                </>
              )}
              {index === 1 && (
                <>
                  <li>5 Users</li>
                  <li>Unlimited Events</li>
                  <li>Priority Support</li>
                  <li>Advanced Calendar Features</li>
                  <li>Custom Event Reminders</li>
                </>
              )}
              {index === 2 && (
                <>
                  <li>Unlimited Users</li>
                  <li>Unlimited Events</li>
                  <li>24/7 Premium Support</li>
                  <li>All Advanced Features</li>
                  <li>Custom Integrations</li>
                </>
              )}
            </ul>
            <button className="px-8 py-3 bg-green-600 text-white rounded-full text-lg font-semibold transition-all hover:bg-green-700">
              Buy Now
            </button>
          </div>
        ))}
      </section>

      <section className="bg-gray-50 py-16 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          What Our Users Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "John Doe",
              text: "I've been using this calendar for months now, and it has transformed how I manage my events. The interface is clean, and it's super easy to use.",
            },
            {
              name: "Jane Smith",
              text: "The Pro Plan is a game changer for my team. We can collaborate, schedule events, and set reminders all in one place. Highly recommend it!",
            },
            {
              name: "Mike Johnson",
              text: "As a busy professional, this calendar has helped me organize my life. I love the ease of use and the powerful features it offers.",
            },
          ].map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center transition-all transform hover:translate-y-2 hover:shadow-xl"
            >
              <img
                src="https://via.placeholder.com/80"
                alt={`User ${index + 1}`}
                className="w-20 h-20 rounded-full mb-5 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {user.name}
              </h3>
              <p className="text-lg text-gray-600 mb-4">{user.text}</p>
              <div className="text-yellow-500 text-xl">★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#f4f7fc] p-10 text-center">
        <div className="mb-8">
          <a
            href="#intro"
            className="text-gray-800 no-underline text-lg mr-8 hover:text-blue-500"
          >
            Intro
          </a>
          <a
            href="#features"
            className="text-gray-800 no-underline text-lg mr-8 hover:text-blue-500"
          >
            Features
          </a>
          <a
            href="#usecases"
            className="text-gray-800 no-underline text-lg mr-8 hover:text-blue-500"
          >
            Use Cases
          </a>
          <a
            href="#pricing"
            className="text-gray-800 no-underline text-lg mr-8 hover:text-blue-500"
          >
            Pricing
          </a>
        </div>

        <div className="mb-8">
          <a
            href="https://facebook.com"
            className="text-gray-800 no-underline mr-8 hover:text-blue-500"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-800 no-underline mr-8 hover:text-blue-500"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-800 no-underline mr-8 hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            &copy; 2025 Calendar+. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Contact us: contact@calendarplus.com
          </p>
        </div>
      </footer>
    </div>
  );
}
