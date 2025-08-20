export default function () {
  return (
    <>
      <div className="px-4 w-full mt-10 md:mt-20 md:mx-10 text-text mb-10 overflow-x-hidden relative">
        <p className="font-primary text-xl font-bold captalize">
          Memes for Employed
        </p>
        <div className="hidden md:block ">
          <img
            src="/img/meme.jpg"
            alt=""
            className="absolute top-10 right-40 z-2 w-120"
          />
        </div>

        <div className="text-6xl md:text-8xl mt-6  font-heading font-bold break-words ">
          <span>Are you</span>{" "}
          <span className="font-cursive font-normal text-6xl md:text-8xl">
            Employed?
          </span>
          <p>If you are good for you.</p>{" "}
          <p className="z-10 relative">This just so happnes to be for you.</p>
          <span>M4E</span>
        </div>

        <div className="mt-8 font-secondary text-xl font-semibold ">
          <p>The place for you. Do you feel left out of the</p>
          <p>Internet cluture? If so don't worry.</p>
        </div>

        <div className="mt-2 relative">
          <button className="px-8 bg-white py-3 rounded-xl hover:scale-110 transition-all group cursor-pointer ">
            <p className=" opacity-0 text-xl font-bold font-primary cursor-pointer">
              Explore M4E
            </p>
          </button>
          <p className=" absolute text-xl font-bold font-secondaryh top-3 left-8 group cursor-pointer ">
            Explore M4E
          </p>
        </div>
      </div>
    </>
  );
}
