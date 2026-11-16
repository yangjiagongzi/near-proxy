import React from "react";
import { RequestOptions } from "~/constant/intruder";
import { useRequestParams } from "../../lib/hooks/useRequestParams";
import ParamsTable from "./ParamsTable";

type Props = {
  requestOptions: RequestOptions;
  onUpdateRequest: (requestParams: RequestOptions) => void;
};

const RequestParams: React.FC<Props> = ({
  requestOptions,
  onUpdateRequest,
}: Props) => {
  const { params, onUpdateParams, onDeleteParamsItem } = useRequestParams({
    requestOptions,
    onUpdateRequest,
  });

  return (
    <ParamsTable
      params={params}
      onChange={onUpdateParams}
      onDelete={onDeleteParamsItem}
    />
  );
};

export default RequestParams;
