import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate} from "react-router-dom";

const Form = ({ isSignInPage = false }) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fulName: "",
    }),
    email: "",
    password: "",
  });
const navigate = useNavigate()
  return (
    <div className="bg-light h-screen flex items-center justify-center">
      <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
        <div className=" text-4xl font-extrabold">
          Welcome {isSignInPage && "Back"}
        </div>
        <div className=" text-xl font-light mb-14">
          {isSignInPage
            ? "Sign in to get explored"
            : "Sign up to get started"}
        </div>
        <form
          className="flex flex-col items-center w-full"
          onSubmit={() => console.log("submited")}
        >
          {isSignInPage && (
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your name"
              className="mb-6 w-[50%]"
              isRequired
              value={data.fulName}
              onChange={(e) => setData({ ...data, fulName: e.target.value })}
            />
          )}
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="mb-6 "
            isRequired
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your name"
            className="mb-14"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </form>
        <Button
          label={isSignInPage ? "Sign in" : "Sign up"}
          className="w-1/2 mb-2"
          type="submit"
        />
        <div>
          {isSignInPage ? "Didn't havean account?" : "Alredy have an account?"}
          <span className="text-primary cursor-pointer underline" onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>
            {isSignInPage ? "Sign up" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Form;
