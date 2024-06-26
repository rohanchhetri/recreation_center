import Header from "../components/Header";
// import Gym from "../assets/gym.jpg";

const Home = () => {
  const bgImage = "url('src/assets/gymbg.jpg')";
  return (
    <>
      <div
        className="text-white bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: bgImage,
        }}
      >
        <Header />
        <div className=" text-white text-3xl md:text-4xl xl:text-5xl p-8 pt-[4rem] flex flex-col justify-start gap-5 items-center w-auto h-screen min-h-[30rem] transition-all ease-in-out ">
          {" "}
          <br />
          <br />
          <br />
          <h1 className="text-center scale-150 pb-3">NO PAIN NO GAIN</h1>
          <p className="text-center scale-50">
            Fuel your passion, ignite your potential
          </p>
          <button className="scale-50 p-4 -mt-5 border-gray-50 border-2 rounded-lg">
            Join Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
