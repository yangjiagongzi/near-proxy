import { useCallback, useMemo, useRef } from "react";
import { HeaderParamsItem, RequestOptions } from "~/constant/intruder";
import uuid from "~/utils/UuidUtil";

export const useRequestHeaders = ({
  requestOptions,
  onUpdateRequest,
}: {
  requestOptions: RequestOptions;
  onUpdateRequest: (requestParams: RequestOptions) => void;
}) => {
  const emptyId = useRef(uuid());

  const headers = useMemo(() => {
    const headers = [...requestOptions.headers];
    const last = headers[headers.length - 1];
    const lastIsEmpty = last && !last.key && !last.value;
    if (!lastIsEmpty) {
      const emptyIdIsUsed = headers.some((item) => item.id === emptyId.current);
      if (emptyIdIsUsed) {
        emptyId.current = uuid();
      }
      headers.push({ id: emptyId.current, key: "", value: "", enable: true });
    }
    return headers;
  }, [requestOptions.headers]);

  const onSubmit = useCallback(
    (headers: HeaderParamsItem[]) => {
      onUpdateRequest({ ...requestOptions, headers: headers });
    },
    [requestOptions, onUpdateRequest],
  );

  const onUpdateHeaders = useCallback(
    (id: string, value: HeaderParamsItem) => {
      let hasUpdate = false;
      const newHeaders = headers.map((item) => {
        if (item.id === id) {
          hasUpdate = true;
          return value;
        }
        return item;
      });
      if (hasUpdate) {
        onSubmit(newHeaders);
      } else {
        onSubmit([...newHeaders, value]);
      }
    },
    [headers, onSubmit],
  );

  const onDeleteHeadersItem = useCallback(
    (id: string) => {
      const newHeaders = headers.filter((item) => item.id != id);
      onSubmit(newHeaders);
    },
    [headers, onSubmit],
  );

  return useMemo(
    () => ({ headers, onUpdateHeaders, onDeleteHeadersItem }),
    [headers, onUpdateHeaders, onDeleteHeadersItem],
  );
};
