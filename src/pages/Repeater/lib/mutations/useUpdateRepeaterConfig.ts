import { graphql, useMutation } from "react-relay";
import type { UpdateRepeaterConfigMutation as MutationType } from "~/__generated__/UpdateRepeaterConfigMutation.graphql";
import { RequestOptions } from "~/constant/intruder";

const UpdateRepeaterConfigMutation = graphql`
  mutation UpdateRepeaterConfigMutation($input: RepeaterConfigInput!) {
    updateRepeaterConfig(input: $input) {
      ...RepeaterConfigFragment
    }
  }
`;

export function useUpdateRepeaterConfig() {
  const [commit, isInFlight] = useMutation<MutationType>(
    UpdateRepeaterConfigMutation,
  );

  const run = (input: RequestOptions) => {
    commit({
      variables: { input },
      onCompleted() {},
      onError(err) {
        console.error(err);
      },
    });
  };

  return { updateRepeaterConfig: run, isInFlight };
}
