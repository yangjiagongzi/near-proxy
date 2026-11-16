import { Suspense } from "react";
import { loadQuery } from "react-relay";
import { RouteObject, useLoaderData } from "react-router-dom";
import PageLoading from "~/components/PageLoading";
import { RoutePaths } from "~/constant/route";
import { relayEnv } from "~/relay";
import { RepeaterPage } from "./RepeaterPage";
import { RepeaterPageQuery } from "./RepeaterPageQuery";

const loader = () => {
  const queryRef = loadQuery(
    relayEnv,
    RepeaterPageQuery,
    {},
    { fetchPolicy: "store-and-network" },
  );
  return { queryRef };
};

const RepeaterWrapper = () => {
  const loaderData = useLoaderData();
  return (
    <Suspense fallback={<PageLoading />}>
      <RepeaterPage queryRef={loaderData.queryRef} />
    </Suspense>
  );
};

const RepeaterRoute: RouteObject = {
  path: RoutePaths.Repeater,
  element: <RepeaterWrapper />,
  loader: loader,
};

export default RepeaterRoute;
