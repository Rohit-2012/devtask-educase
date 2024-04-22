import { Link } from "react-router-dom";
import CreateAccountBtn from "../components/CreateAccountBtn";

const Landing = () => {
  return (
    <section className="px-5 min-w-full min-h-[100vh] flex flex-col gap-3 justify-end pb-10">
      <h1 className="text-3xl font-semibold text-[#1D2226] text-left">
        Welcome to PopX
      </h1>
      <p className="text-lg text-left text-[#1D2226] text-opacity-60 mb-4 w-4/6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <CreateAccountBtn path={'signup'}/>
      <button className="min-w-80 py-3 rounded-md bg-[#6C25FF4B] text-[#1D2226] font-semibold cursor-pointer">
        <Link to='/signin'>Already Registered? Login</Link>
      </button>
    </section>
  );
};

export default Landing;
