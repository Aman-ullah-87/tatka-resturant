const MenuCard = ({menu}) => {
    const {name,recipe,price,image}=menu
  return (
    <div className="flex my-4">
      <div>
        <img
          className="h-[104px] w-[118px] border-4 border-[#D9D9D9]"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          alt=""
        />
      </div>
      <div
        className="flex flex-col text-[#737373]"
      >
        <h5 className="font-inter font-normal text-lg ">
          {name} ------------------
        </h5>
        <p className="w-[443px]">
        {recipe}
      </p>
      </div>
    
      <div>
        <span className="text-lg font-inter font-normal text-[#BB8506]">${price} </span>
      </div>
    </div>
  );
};

export default MenuCard;
