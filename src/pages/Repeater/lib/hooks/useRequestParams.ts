import { useCallback, useMemo, useRef } from "react";
import { HeaderParamsItem, RequestOptions } from "~/constant/intruder";
import uuid from "~/utils/UuidUtil";

export const useRequestParams = ({
  requestOptions,
  onUpdateRequest,
}: {
  requestOptions: RequestOptions;
  onUpdateRequest: (requestParams: RequestOptions) => void;
}) => {
  const emptyId = useRef(uuid());

  const params = useMemo(() => {
    const params = [...requestOptions.params];
    const last = params[params.length - 1];
    const lastIsEmpty = last && !last.key && !last.value;
    if (!lastIsEmpty) {
      const emptyIdIsUsed = params.some((item) => item.id === emptyId.current);
      if (emptyIdIsUsed) {
        emptyId.current = uuid();
      }
      params.push({ id: emptyId.current, key: "", value: "", enable: true });
    }
    return params;
  }, [requestOptions.params]);

  const onSubmit = useCallback(
    (params: HeaderParamsItem[]) => {
      onUpdateRequest({ ...requestOptions, params: params });
    },
    [requestOptions, onUpdateRequest],
  );

  const onUpdateParams = useCallback(
    (id: string, value: HeaderParamsItem) => {
      let hasUpdate = false;
      const newParams = params.map((item) => {
        if (item.id === id) {
          hasUpdate = true;
          return value;
        }
        return item;
      });
      if (hasUpdate) {
        onSubmit(newParams);
      } else {
        onSubmit([...newParams, value]);
      }
    },
    [params, onSubmit],
  );

  const onDeleteParamsItem = useCallback(
    (id: string) => {
      const newParams = params.filter((item) => item.id != id);
      onSubmit(newParams);
    },
    [params, onSubmit],
  );

  return useMemo(
    () => ({ params, onUpdateParams, onDeleteParamsItem }),
    [params, onUpdateParams, onDeleteParamsItem],
  );
};
