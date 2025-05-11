import { useSelector } from "react-redux";

export default function useAuth() {
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}

// ("https://psychologists-services-1c5d3-default-rtdb.firebaseio.com/");
