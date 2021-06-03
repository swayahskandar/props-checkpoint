import './App.css';
import Profile1 from "./Profile/Profile1"
const data={
  fullName:"Rihab Chouikh",
  bio:"Diplomed From the National School of Engeneering of Carthage",
   profession:"Industrial Engeneer" }

const handleName = (x) => alert(`Profile User : ${x}`);

function App() {
  return (
    <div>
      
      <Profile1  fullName={data.fullName} bio={data.bio} profession={data.profession}  handleName={handleName} > 
      <img src="/fotoProfile.jpg" alt="PhotoProfile" height="350"width="350"/></Profile1>
    </div>
  );
}

export default App;
