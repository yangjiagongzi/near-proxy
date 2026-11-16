import React from "react";
import { RequestOptions } from "~/constant/intruder";
import { useRequestCookies } from "../../lib/hooks/useRequestCookies";
import ParamsTable from "./ParamsTable";

type Props = {
  requestOptions: RequestOptions;
  onUpdateRequest: (requestParams: RequestOptions) => void;
};

const RequestCookies: React.FC<Props> = ({
  requestOptions,
  onUpdateRequest,
}: Props) => {
  const { cookies, onChange, onDelete } = useRequestCookies({
    requestOptions,
    onUpdateRequest,
  });

  return (
    <ParamsTable params={cookies} onChange={onChange} onDelete={onDelete} />
  );
};

export default RequestCookies;
