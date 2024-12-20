import React from "react";

export default function AboutUs() {
  // Array of team members with their details
  const teamMembers = [
    {
      name: "Eleanor Vance",
      role: "Founder & Director",
      img: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      name: "Henry Hill",
      role: "Head of Operations",
      img: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      name: "Clara Oswald",
      role: "Community Outreach",
      img: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      name: "Arthur Shelby",
      role: "Finance Manager",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
  ];

  return (
    <section className="about-us-container bg-gradient-to-b from-indigo-50 to-indigo-100 py-16 px-8 rounded-lg shadow-lg">
      {/* Title and introduction section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center mb-12">
        <h2 className="text-5xl font-bold text-indigo-700 mb-6">
          Meet the Heart of Our Mission
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          Driven by compassion and a deep love for feline companions, our team
          is dedicated to creating a brighter future for cats in need. Get to
          know the individuals who pour their hearts into making a difference
          every single day.
        </p>
      </div>

      {/* Mission and goals section */}
      <div className="about-us-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Our Commitment
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We're committed to providing safe havens and finding loving forever
            homes for every cat that comes into our care. We strive to create a
            community where animal welfare is a shared value.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Our Vision for the Future
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where every cat enjoys a life filled with
            warmth, comfort, and unconditional love. We work tirelessly to make
            this vision a reality, one paw at a time.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-indigo-700 mb-4">
            Our Story So Far
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Since our inception, we've been on a heartwarming journey of
            rescuing, rehabilitating, and rehoming countless cats. Our story is
            one of compassion, community support, and unwavering dedication to
            feline welfare.
          </p>
        </div>
      </div>

      {/* Team section */}
      <div className="our-team-section">
        <h3 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          Our Team
        </h3>
        <div className="team-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member text-center flex flex-col items-center"
            >
              {/* Team member image with fallback */}
              <img
                src={member.img}
                alt={`${member.name}'s picture`}
                className="rounded-full w-32 h-32 mb-4 shadow-md object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/128/ff0000/FFFFFF?text=Error";
                }}
              />
              {/* Team member details */}
              <h4 className="text-xl font-semibold text-gray-700">
                {member.name}
              </h4>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
