import { Route, Routes } from "react-router-dom";
import Error from "../../pages/Error";
import Posts from "../../pages/Posts";
import About from "../../pages/About";
import { Navigate } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="posts" element={<Posts />} />
      <Route path="about" element={<About />} />
      <Route path="error" element={<Error />} />
      <Route path="*" element={<Navigate to="error" replace />} />
    </Routes>
  );
};

export default AppRouter;
