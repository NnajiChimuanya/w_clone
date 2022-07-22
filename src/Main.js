import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";

const Main = ({ messages }) => {
  return (
    <div className="app-body">
      <Sidebar />
      <Chat messages={messages} />
    </div>
  );
};

export default Main;
