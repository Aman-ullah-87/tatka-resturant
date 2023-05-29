import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const {signUp}=useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
      signUp(data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
       console.log(error)
        
      });
    };
  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co/6tjDxZ2/Rectangle-75.png')",
      }}
      className="w-full h-screen py-10 px-1 sm:px-5 flex flex-col items-center "
    >
      {" "}
      {/* Container */}
      {/* :LOGIN CONTAINER */}
      <div className="w-full md:w-3/4 max-w-5xl my-auto grid grid-cols-2 border border-gray-200 rounded-2xl  text-gray-500 shadow-lg overflow-hidden">
        {/* ::Illustration */}
        <div className="relative hidden lg:block lg:col-span-1 w-full h-full ">
          <img
            src="https://i.ibb.co/yspgbR8/authentication2-1.png"
            alt=""
            className="absolute w-full h-full object-contain"
          />
        </div>
        {/* ::Login Side */}
        <div className="col-span-2 lg:col-span-1 py-10 px-10">
          {/* :::Login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center">
            {/* Email */}
            <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
              <label htmlFor="email" className="py-2">
                <span className="pl-2 pr-4 border-r border-gray-200">
                  Name:
                </span>
              </label>

              <input
                id="name"
                type="text"
                name="name"
                {...register("name", { required: true })} 
                className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
                placeholder="Name"
                required
              />
            </div>
            <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
              <label htmlFor="email" className="py-2">
                <span className="pl-2 pr-4 border-r border-gray-200">
                  Email:
                </span>
              </label>

              <input
                type="email"
                name="email"
                {...register("email", { required: true })} 
                className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
                placeholder="Email"
                required
              />
            </div>
            <div className="my-2 px-2 flex items-center border border-gray-300 rounded">
              <label htmlFor="email" className="py-2">
                <span className="pl-2 pr-4 border-r border-gray-200">
                  Password:
                </span>
              </label>

              <input
                type="password"
                name="password"
                {...register("password", { required: true })} 
                className="form-input h-8 py-5 px-5 border-none text-yellow-600 focus:ring-0 focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
           

            {/* Password */}

            {/* Options and Login */}
            <div className="w-full py-3 flex justify-center sm:justify-around items-center">
             
              <button
                type="submit"
                className="btn-primary"
              >
               sign Up
              </button>
            </div>
          </form>

          <p className="text-center">
            Already have any Account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
