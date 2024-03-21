import { Route, Routes } from "react-router";
import NotFound from "./pages/notFound";
import MainPage from "./pages/mainPage";
import AuthPage from "./pages/authPage";
import { ProtectedRoute } from "./components/protected-route";
import AuthUserProfile from "./pages/authPageProfile";
import UserProfile from "./pages/profilePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="users">
        <Route path=":id" element={<UserProfile />} />
      </Route>
      <Route path="/login" element={<AuthPage />} />
      <Route path="/register" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<AuthUserProfile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route />
    </Routes>
  );
};

export default AppRoutes;