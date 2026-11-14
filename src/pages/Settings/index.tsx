import { Suspense } from "react";
import { loadQuery } from "react-relay";
import { RouteObject, useLoaderData } from "react-router-dom";
import PageLoading from "~/components/PageLoading";
import { relayEnv } from "~/relay";
import { SettingsPage } from "./SettingsPage";
import { SettingsPageQuery } from "./SettingsPageQuery";
import { RoutePaths } from "~/constant/route";

const loader = () => {
  const queryRef = loadQuery(
    relayEnv,
    SettingsPageQuery,
    {},
    { fetchPolicy: "store-and-network" },
  );
  return { queryRef };
};

const SettingsWrapper = () => {
  const loaderData = useLoaderData();
  return (
    <Suspense fallback={<PageLoading />}>
      <SettingsPage queryRef={loaderData.queryRef} />
    </Suspense>
  );
};

const SettingsRoute: RouteObject = {
  path: RoutePaths.Settings,
  element: <SettingsWrapper />,
  loader: loader,
};

export default SettingsRoute;
