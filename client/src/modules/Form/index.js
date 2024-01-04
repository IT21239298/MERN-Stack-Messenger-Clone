import Button from "../../components/Button";
import Input from "../../components/Input";

const Form = () => {
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className=" text-4xl font-extrabold">Welcome</div>
      <div className=" text-xl font-light mb-14">
        Sign up to now to get started
      </div>
      <Input
        label="Full Name"
        name="name"
        placeholder="Enter your name"
        className="mb-6"
      />
      <Input
        label="Email Address"
        name="email"
        placeholder="Enter your email"
        className="mb-6"
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your name"
        className="mb-6"
      />
      <Button label="Sign up" />
    </div>
  );
};
export default Form;
