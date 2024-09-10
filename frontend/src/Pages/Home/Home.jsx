
import { useEffect } from "react";
import MessageContainer from "../../Components/Messages/MessageContainer";
import Sidebar from "../../Components/Sidebar/Sidebar";
// import { useAuthContext } from "../../Context/AuthContext"

function Home() {
  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedHomePage');

    if (!hasLoadedBefore) {
      sessionStorage.setItem('hasLoadedHomePage', 'true');
      window.location.reload();
    }
  }, []);

  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
}

export default Home;
