import { useCallback, useMemo } from "react";
import { HeaderParamsItem, RequestOptions } from "~/constant/intruder";
import uuid from "~/utils/UuidUtil";
import { splitBy } from "~/utils/HttpParse/utils";
import { useRequestHeaders } from "./useRequestHeaders";

export const useRequestCookies = ({
  requestOptions,
  onUpdateRequest,
}: {
  requestOptions: RequestOptions;
  onUpdateRequest: (requestParams: RequestOptions) => void;
}) => {
  const { onUpdateHeaders } = useRequestHeaders({
    requestOptions,
    onUpdateRequest,
  });
  const cookieHeader: HeaderParamsItem = useMemo(() => {
    const cookiesRow = requestOptions.headers.find(
      (row) => row.key.toLowerCase() === "cookie",
    );
    return cookiesRow || { id: uuid(), key: "Cookie", value: "", enable: true };
  }, [requestOptions.headers]);

  const cookies = useMemo(() => {
    const cookies = cookieHeader.value.split(";").map((pair, idx) => {
      const [key, value] = splitBy(pair, "=");
      return {
        id: `cookie-${idx}`,
        key: key || "",
        value: value || "",
        enable: true,
      };
    });

    const last = cookies[cookies.length - 1];
    const lastIsEmpty = last && !last.key && !last.value;
    if (!lastIsEmpty) {
      cookies.push({
        id: `cookie-${cookies.length}`,
        key: "",
        value: "",
        enable: true,
      });
    }

    return cookies;
  }, [cookieHeader]);

  const onSubmit = useCallback(
    (cookies: HeaderParamsItem[]) => {
      let cookiesString = "";
      cookies.forEach((c) => {
        if (c.enable && c.key) {
          cookiesString =
            cookiesString + `${cookiesString ? ";" : ""}${c.key}=${c.value}`;
        }
      });

      onUpdateHeaders(cookieHeader.id, {
        ...cookieHeader,
        value: cookiesString,
      });
    },
    [cookieHeader, onUpdateHeaders],
  );

  const onChange = useCallback(
    (id: string, value: HeaderParamsItem) => {
      let hasUpdate = false;
      const newCookies = cookies.map((item) => {
        if (item.id === id) {
          hasUpdate = true;
          return value;
        }
        return item;
      });
      if (hasUpdate) {
        onSubmit(newCookies);
      } else {
        onSubmit([...newCookies, value]);
      }
    },
    [cookies, onSubmit],
  );

  const onDelete = useCallback(
    (id: string) => {
      const newCookies = cookies.filter((item) => item.id != id);
      onSubmit(newCookies);
    },
    [cookies, onSubmit],
  );

  return useMemo(
    () => ({ cookies, onChange, onDelete }),
    [cookies, onChange, onDelete],
  );
};
