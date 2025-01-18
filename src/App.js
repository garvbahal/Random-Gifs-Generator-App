import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";


function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col items-center background ">
      <h1 className=" bg-white rounded-2xl w-11/12 text-center mt-[40px] ml-[40px] p-4 font-bold mr-[40px] text-3xl mb-10">
        RANDOM GIFs
      </h1>

      <div className="flex flex-col gap-y-12 w-full items-center">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
