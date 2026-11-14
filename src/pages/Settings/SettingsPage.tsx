import { useFragment, usePreloadedQuery } from "react-relay";
import type { PreloadedQuery } from "react-relay";
import { SettingsPageQuery } from "./SettingsPageQuery";
import { SettingsPageQuery as TSettingsPageQuery } from "~/__generated__/SettingsPageQuery.graphql";
import { AppConfigFragment } from "~/fragments/appConfig";
import { useCallback, useMemo } from "react";
import { ThemeOptionsName, ThemeMode } from "~/constant/app";
import Select from "~/components/Select";
import { AppConfig_appConfig$key } from "~/__generated__/AppConfig_appConfig.graphql";
import { useUpdateAppConfig } from "./lib/mutations/useUpdateAppConfig";

type Props = {
  queryRef: PreloadedQuery<TSettingsPageQuery>;
};

export function SettingsPage({ queryRef }: Props) {
  const ThemeOptionList = useMemo(() => Object.values(ThemeOptionsName), []);
  const { updateAppConfig } = useUpdateAppConfig();

  const { appConfig } = usePreloadedQuery<TSettingsPageQuery>(
    SettingsPageQuery,
    queryRef,
  );

  const { themeMode, notification } = useFragment<AppConfig_appConfig$key>(
    AppConfigFragment,
    appConfig,
  );

  const choose = useMemo(() => {
    if (themeMode in ThemeOptionsName) {
      return ThemeOptionsName[themeMode as keyof typeof ThemeOptionsName];
    }
    return ThemeOptionsName[ThemeMode.AUTO];
  }, [themeMode]);

  const update = useCallback((value: Values<typeof ThemeOptionsName>) => {
    updateAppConfig({ themeMode: value.id, notification });
  }, []);

  return (
    <Select
      data={ThemeOptionList}
      value={choose}
      onChange={(value) => update(value as Values<typeof ThemeOptionsName>)}
    />
  );
}
