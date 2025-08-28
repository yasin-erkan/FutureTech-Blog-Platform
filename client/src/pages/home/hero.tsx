import React from 'react';
import { FaPlus } from 'react-icons/fa';
import sun from '../../assets/images/sun.png';
import Button from '../../components/button/button';

const Hero: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-7">
      <div className="lg:col-span-4 border border-dark-15">
        <div className="px-4 md:px-8 lg:px-12 xl:ps-18 pt-10 pb-8 md:pt-16 md:pb-16 xl:pt-20">
          <h4 className="text-dark-40 text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            Your Journey Begins Here
          </h4>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl mt-3 mb-2">
            Explore the Limits of Artificial Intelligence
          </h1>

          <p className="small-text">
            Welcome to the center of artificial intelligence innovation.
            FutureTech AI News, opens the door to a world where machines think,
            learn, and reshape the future.
          </p>
        </div>

        <div className="grid grid-cols-3 border-t border-dark-15">
          <div className="border-r border-dark-15 p-5">
            <span className="flex items-center gap-1 text-2xl md:text-2xl xl:text-3xl">
              300 <FaPlus className="text-yellow-55 scale-[0.7]" />
            </span>
            <span className="small-text">Sources Available</span>
          </div>

          <div className="border-t border-dark-15 p-5">
            <span className="flex items-center gap-1 text-2xl md:text-2xl xl:text-3xl">
              12k <FaPlus className="text-yellow-55 scale-[0.7]" />
            </span>
            <span className="small-text">Downloads</span>
          </div>

          <div className="border-l border-dark-15 p-5">
            <span className="flex items-center gap-1 text-2xl md:text-2xl xl:text-3xl">
              10k <FaPlus className="text-yellow-55 scale-[0.7]" />
            </span>
            <span className="small-text">Active Users</span>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 border border-dark-15 relative overflow-hidden h-full max-lg:min-h-[300px] flex items-end p-5 md:p-8 lg:12 ">
        <div className="absolute -top-0 -left-0">
          <img
            src={sun}
            alt="sun"
            className="rotate-[30deg] scale-[1.2] scale-y-[-1] brightness-50"
          />
        </div>
        <div className="z-10">
          <h2 className="md:text-xl xl:text-2xl">1000+ Sources Available</h2>

          <p className="small-text my-3">
            Explore over 1000 articles on emerging technology trends and
            innovations.
          </p>

          <Button text="Explore Sources" to="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
