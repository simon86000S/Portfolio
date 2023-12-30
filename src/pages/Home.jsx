import Navbar from "../components/Navbar";
import Description from "../components/Description";
import MyProject from "../components/MyProject";
import Particule from "../components/Particule"
export default function Home() {
  return (
    <div
      id="Home"
      className=" lg: w-[100%]  flex flex-col  h-[100vh]  max-sm:flex "
    >
  
      <Description />
      <Navbar />
      <Particule/>
     
   
    </div>
  );
}
