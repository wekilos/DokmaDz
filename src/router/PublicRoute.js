import React, { Suspense } from "react";
import { Route, useHistory } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import { isLogin } from "../utils/index";

const Headers = React.lazy(() => import("../components/header"));
const Footer = React.lazy(() => import("../components/footer"));

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) => (
        <div>
          <Suspense fallback={<PageLoading />}>
            <Headers />
          </Suspense>
          <div
            className="p-0"
            style={{
              width: "100%",
              minHeight: "80vh",
              margin: "0 auto",
              padding: "0px",
            }}
          >
            <Component {...props} />
            {/* <div className="xl:h-0 h-[100px] w-full"></div> */}
          </div>
          <Suspense fallback={<PageLoading />}>
            <Footer />
          </Suspense>
        </div>
      )}
    />
  );
};

export default PublicRoute;
