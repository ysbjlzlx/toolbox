import { PageContainer } from "@ant-design/pro-components";
import { sampleSize, toNumber } from "lodash-es";
import { type FC, useCallback, useEffect, useState } from "react";
import { type LoaderFunction, type URLSearchParamsInit, useLoaderData, useSearchParams } from "react-router";

interface LoaderData {
  orchardStreetMedium: string[];
}

export const loader: LoaderFunction = async ({ request }) => {
  const orchardStreetMedium = await fetch("/text/orchard-street-medium.txt")
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      return text.split(/\r?\n/);
    });
  console.log(request);
  return { orchardStreetMedium };
};

const searchParamsInit: URLSearchParamsInit = {
  length: "8",
};

export const Component: FC = () => {
  const [length, setLength] = useState<number>(6);
  const [searchParams] = useSearchParams(searchParamsInit);
  const loaderData = useLoaderData() as LoaderData;

  useEffect(() => {
    const length = searchParams.get("length");
    if (length !== null) {
      setLength(toNumber(length));
    }
  }, [searchParams]);

  const randomWords = useCallback(
    (length: number) => {
      const words = sampleSize(loaderData.orchardStreetMedium, length);
      return words.join("-");
    },
    [loaderData.orchardStreetMedium],
  );

  return (
    <PageContainer title={false}>
      {randomWords(length)}
      {loaderData.orchardStreetMedium.map((word) => {
        return (
          <div key={word}>
            <span>{word}</span>
          </div>
        );
      })}
    </PageContainer>
  );
};
