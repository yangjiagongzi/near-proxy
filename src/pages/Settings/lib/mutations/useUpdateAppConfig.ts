import { graphql, useMutation } from "react-relay";

import type {
  UpdateAppConfigMutation as MutationType,
  ThemeMode,
} from "~/__generated__/UpdateAppConfigMutation.graphql";

const UpdateAppConfigMutation = graphql`
  mutation UpdateAppConfigMutation($input: AppConfigInput!) {
    updateAppConfig(input: $input) {
      ...AppConfig_appConfig
    }
  }
`;

export function useUpdateAppConfig() {
  const [commit, isInFlight] = useMutation<MutationType>(
    UpdateAppConfigMutation,
  );

  const run = (input: { themeMode: ThemeMode; notification: boolean }) => {
    commit({
      variables: { input },
      onCompleted() {},
      onError(err) {
        console.error(err);
      },
    });
  };

  return { updateAppConfig: run, isInFlight };
}
