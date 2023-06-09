const Card = () => {
  return (
    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden border border-gray-100 bg-white shadow-md">
      <a className="relative flex h-60 overflow-hidden" href="#">
        <img
          className="absolute top-0 right-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
          alt="product image"
        />
      
        <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
          <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </a>
      <div className="mt-4 px-5 pb-5 text-center space-y-3">
      
          <h5 className="text-xl tracking-tight text-slate-900">
            Lululemon Comfort Tee - White
          </h5>
     
        <div className="text-center ">
          <p>
            <span className="text-sm font-bold text-slate-900">$79</span>
            
          </p>
        </div>
        <button className="btn-primary">
          
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;
