import { useMemo, useState } from "react";
import type { PreloadedQuery } from "react-relay";
import { useFragment, usePreloadedQuery } from "react-relay";
import { RepeaterConfigFragment$key } from "~/__generated__/RepeaterConfigFragment.graphql";
import { RepeaterPageQuery as TRepeaterPageQuery } from "~/__generated__/RepeaterPageQuery.graphql";
import Button from "~/components/Button";
import Tab from "~/components/Tab";
import { parseHttpMethod } from "~/utils/HttpParse";
import Request from "./components/Request";
import Response from "./components/Response";
import { TabTypes } from "./lib/constants";
import { RepeaterConfigFragment } from "./lib/fragments/repeaterConfig";
import { useUpdateRepeaterConfig } from "./lib/mutations/useUpdateRepeaterConfig";
import { RepeaterPageQuery } from "./RepeaterPageQuery";
import styles from "./styles.css";

type Props = {
  queryRef: PreloadedQuery<TRepeaterPageQuery>;
};

export function RepeaterPage({ queryRef }: Props) {
  const tabs = useMemo(() => Object.values(TabTypes), []);
  const [choose, setChoose] = useState<Values<typeof TabTypes>["id"]>(
    TabTypes.request.id,
  );
  const { updateRepeaterConfig } = useUpdateRepeaterConfig();
  const { repeaterConfig } = usePreloadedQuery<TRepeaterPageQuery>(
    RepeaterPageQuery,
    queryRef,
  );
  const { response, ...request } = useFragment<RepeaterConfigFragment$key>(
    RepeaterConfigFragment,
    repeaterConfig,
  );
  const formatRequestOptions = useMemo(() => {
    const method = parseHttpMethod(request.method);
    const headers = [...request.headers];
    const params = [...request.params];
    return { ...request, method, headers, params };
  }, [request]);

  return (
    <div className={styles.container}>
      <Button
        className={styles.startBtn}
        title={"发送"}
        onClick={() => {
          // near todo
        }}
      />
      <Tab
        size="large"
        value={choose}
        data={tabs}
        onChange={(value) =>
          setChoose(value.id as Values<typeof TabTypes>["id"])
        }
      />
      <div className={styles.content}>
        {choose === TabTypes.request.id ? (
          <Request
            requestOptions={formatRequestOptions}
            onUpdateRequest={updateRepeaterConfig}
          />
        ) : null}
        {choose === TabTypes.response.id ? <Response value={response} /> : null}
      </div>
    </div>
  );
}
