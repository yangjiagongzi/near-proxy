import { useCallback, useMemo } from "react";
import type { PreloadedQuery } from "react-relay";
import { useFragment, usePreloadedQuery } from "react-relay";
import { AppConfigFragment$key } from "~/__generated__/AppConfigFragment.graphql";
import { SettingsPageQuery as TSettingsPageQuery } from "~/__generated__/SettingsPageQuery.graphql";
import Select from "~/components/Select";
import { ThemeMode, ThemeOptionsName } from "~/constant/app";
import { AppConfigFragment } from "~/fragments/appConfig";
import { useUpdateAppConfig } from "./lib/mutations/useUpdateAppConfig";
import { SettingsPageQuery } from "./SettingsPageQuery";

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

  const { themeMode, notification } = useFragment<AppConfigFragment$key>(
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
