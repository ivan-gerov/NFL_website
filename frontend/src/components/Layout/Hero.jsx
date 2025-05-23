import { Link } from "react-router-dom";
import heroImg from "../../assets/First-wallpaper.jpg";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Blitz Bazzar"
        className="w-full h-[400px] md:h-[750px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            Get in <br /> Gear
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Lets get you ready for the season
          </p>
          <Link
            to="#"
            className="bg-black text-white-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
