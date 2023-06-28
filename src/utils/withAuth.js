import { useEffect, useState } from "react";
import { getToken } from "../utils";
import { useRouter } from "next/router";

const withAuth = WrappedComponet => {
  return props => {
    const router = useRouter();
    const [token, setToken] = useState("");

    useEffect(() => {
      if (getToken()) {
        setToken(getToken());
      } else {
        router.push("/user/login");
      }
    }, []);

    if (token) {
      return <WrappedComponet {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
