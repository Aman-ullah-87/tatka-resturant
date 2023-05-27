const ParallaxContainer = ({img,title,subTitle}) => {
  return (
    <div className="flex bg-fixed py-20 " style={{backgroundImage:`url(${img})`}}>
      <div className={`border-white/30 relative mx-auto my-5 w-full max-w-4xl rounded-lg border bg-[#151515] shadow-lg opacity-50   z-40`}>
       
         <div className="text-[#FFFFFF] text-center py-20 px-6 space-y-4">
            <h1 className="font-normal font-semibold text-5xl">{title}</h1>
            <p className="text-white text-base ">{subTitle}</p>
         </div>
      </div>
    </div>
  );
};

export default ParallaxContainer;
