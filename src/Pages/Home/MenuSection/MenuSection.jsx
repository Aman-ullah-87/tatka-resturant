import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const MenuSection = () => {
  return (
    <div
      className="flex my-20 bg-fixed py-20 "
      style={{
        backgroundImage: `url('https://i.ibb.co/HgxWyVk/Rectangle-13.png')`,
      }}
    >
      <div
        className={` relative mx-auto my-5 w-full max-w-4xl rounded-lg   shadow-lg   `}
      >
        <div className="text-[#FFFFFF]  py-2 px-6 space-y-4">
          <SectionTitle
            heading="FROM OUR MENU"
            subHeading="---Check it out---"
          />
          <div className="flex gap-8">
            <div className="w-[400px] h-[300px]">
              <img src="https://i.ibb.co/4KR8wt3/Rectangle-14.png" alt="" />
            </div>
            <div className="w-[605px]">
              <p className="font-inter font-normal  ">
                {" "}
                <span className="text-xl"> March 20, 2023</span> <br />{" "}
                <span className="text-xl">WHERE CAN I GET SOME?</span> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn-primary my-2">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
