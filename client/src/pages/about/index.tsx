const About = () => {
  return (
    <div className="padding-x py-10">
      <h1 className="text-2xl lg:text-3xl xl:text-4xl mb-8">
        About FutureTech
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-yellow-55">Our Mission</h2>
          <p className="text-grey-60">
            At FutureTech, we are passionate about exploring and sharing the
            latest developments in artificial intelligence and technology. Our
            mission is to make complex technological concepts accessible to
            everyone.
          </p>

          <h2 className="text-xl font-semibold text-yellow-55 mt-8">
            Our Vision
          </h2>
          <p className="text-grey-60">
            We envision a future where technology enhances human potential, and
            we're dedicated to being at the forefront of this transformation.
            Through our platform, we aim to create a community of tech
            enthusiasts who share knowledge and insights.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-yellow-55">Our Team</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-15 p-4 rounded-lg">
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-grey-60 text-sm">Founder & CEO</p>
            </div>
            <div className="bg-dark-15 p-4 rounded-lg">
              <h3 className="font-semibold">Jane Smith</h3>
              <p className="text-grey-60 text-sm">Lead Developer</p>
            </div>
            <div className="bg-dark-15 p-4 rounded-lg">
              <h3 className="font-semibold">Mike Johnson</h3>
              <p className="text-grey-60 text-sm">AI Researcher</p>
            </div>
            <div className="bg-dark-15 p-4 rounded-lg">
              <h3 className="font-semibold">Sarah Wilson</h3>
              <p className="text-grey-60 text-sm">Content Manager</p>
            </div>
          </div>

          <div className="bg-dark-15 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-semibold text-yellow-55 mb-4">
              Our Numbers
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold">50+</p>
                <p className="text-grey-60 text-sm">Team Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100k+</p>
                <p className="text-grey-60 text-sm">Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1M+</p>
                <p className="text-grey-60 text-sm">Monthly Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
