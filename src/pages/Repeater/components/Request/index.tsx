import React, { useCallback, useMemo, useState } from "react";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Modal from "~/components/Modal";
import Select from "~/components/Select";
import Tab from "~/components/Tab";
import { HttpMethod, RequestOptions } from "~/constant/intruder";
import RequestBody from "./RequestBody";
import RequestCookies from "./RequestCookies";
import RequestHeaders from "./RequestHeaders";
import RequestParams from "./RequestParams";
import RequestParse from "./RequestParse";
import styles from "./request.styles.css";

const BodyType = ["Headers", "Cookies", "Query Params", "Body"] as const;

type Props = {
  requestOptions: RequestOptions;
  onUpdateRequest: (requestParams: RequestOptions) => void;
};

const Request: React.FC<Props> = ({
  requestOptions,
  onUpdateRequest,
}: Props) => {
  const [choose, setChoose] = useState<(typeof BodyType)[number]>(BodyType[0]);
  const requestMethList = useMemo(
    () => Object.values(HttpMethod).map((m) => ({ id: m, name: m })),
    [],
  );
  const bodyTypeList = useMemo(
    () => BodyType.map((m) => ({ id: m, name: m })),
    [],
  );

  const onUpdateMethod = useCallback(
    (method: HttpMethod) => {
      onUpdateRequest({ ...requestOptions, method });
    },
    [requestOptions, onUpdateRequest],
  );

  const onUpdateBody = useCallback(
    (body: string) => {
      onUpdateRequest({ ...requestOptions, body });
    },
    [requestOptions, onUpdateRequest],
  );

  return (
    <div className={styles.content}>
      <div className={styles.inputBox}>
        <Select
          className="method-select"
          title={"Method"}
          data={requestMethList}
          value={{ id: requestOptions.method, name: requestOptions.method }}
          onChange={({ id }) => {
            onUpdateMethod(id as HttpMethod);
          }}
        />
        <Input
          className="url-input"
          title="URL*"
          placeholder='E.g. "https://example.com/foobar"'
          value={requestOptions.url}
          onChange={(e) => {
            onUpdateRequest({ ...requestOptions, url: e.target.value });
          }}
        />
        <Button
          className="curl-parse-btn"
          title="解析http报文"
          onClick={() => {
            Modal.show(<RequestParse onUpdateRequest={onUpdateRequest} />);
          }}
        />
      </div>
      <div className={styles.requestContent}>
        <Tab
          size="small"
          data={bodyTypeList}
          onChange={(value) => setChoose(value.id as (typeof BodyType)[number])}
        />
        <div className="requestOptions">
          {choose === BodyType[0] ? (
            <RequestHeaders
              requestOptions={requestOptions}
              onUpdateRequest={onUpdateRequest}
            />
          ) : null}
          {choose === BodyType[1] ? (
            <RequestCookies
              requestOptions={requestOptions}
              onUpdateRequest={onUpdateRequest}
            />
          ) : null}
          {choose === BodyType[2] ? (
            <RequestParams
              requestOptions={requestOptions}
              onUpdateRequest={onUpdateRequest}
            />
          ) : null}
          {choose === BodyType[3] ? (
            <RequestBody
              requestOptions={requestOptions}
              onUpdateBody={onUpdateBody}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Request;
