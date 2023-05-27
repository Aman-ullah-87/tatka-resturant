

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=" text-center py-10   ">
             <p className="font-inter text-xl text-[#D99904]">{subHeading}</p>
            <h1 className="font-inter border-b-2 border-t-2 border-[#E8E8E8] inline   font-semibold text-[40px]">{heading}</h1>
           
        </div>
    );
};

export default SectionTitle;