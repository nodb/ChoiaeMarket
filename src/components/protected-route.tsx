import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const user = isUserLogin; // 유저의 로그인 여부(User | null)
  const user = "abc";
  console.log(user);

  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
