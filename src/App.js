import { Route, Routes } from "react-router-dom";
import Authentication from "./Components/Authentication/Authentication";
import RootLayout from "./Components/Layout/root";
import RootLayout2 from "./Components/Layout/root2";
import Compose from "./Components/Profile/Compose";
import Inbox from "./Components/Profile/inbox";
import EmailMessage from "./Components/Profile/EmailMessage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { inboxItemFill } from "./Store/inbox-slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(inboxItemFill(localStorage.getItem("userEmail")));
  },[]);
  return (
    <div>
      <Routes>
        <Route index element={<Authentication />} />
        <Route path="/" element={<RootLayout />}>
          <Route path="/profile" element={<RootLayout2 />} exact>
            <Route path="/profile/compose" element={<Compose />} />
            <Route path="/profile/inbox" element={<Inbox />} />
            <Route path="/profile/inbox/message" element={<EmailMessage />}exact/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
