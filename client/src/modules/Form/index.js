import Input from "../../components/Input";

const Form = () => {
  return (
    <div className="bg-white w-[600px] h-[800px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className=" text-4xl font-extrabold">Welcome</div>
      <div className=" text-xl font-light">Sign up to now to get started</div>
      <Input/>
    </div>
  );
};
export default Form;
