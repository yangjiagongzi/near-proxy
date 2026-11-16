import React from "react";
import { RequestOptions } from "~/constant/intruder";
import { useRequestHeaders } from "../../lib/hooks/useRequestHeaders";
import ParamsTable from "./ParamsTable";

type Props = {
  requestOptions: RequestOptions;
  onUpdateRequest: (requestParams: RequestOptions) => void;
};

const RequestHeaders: React.FC<Props> = ({
  requestOptions,
  onUpdateRequest,
}: Props) => {
  const { headers, onUpdateHeaders, onDeleteHeadersItem } = useRequestHeaders({
    requestOptions,
    onUpdateRequest,
  });

  return (
    <ParamsTable
      params={headers}
      onChange={onUpdateHeaders}
      onDelete={onDeleteHeadersItem}
    />
  );
};

export default RequestHeaders;
