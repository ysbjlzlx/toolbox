import { md5 as MD5 } from "@noble/hashes/legacy.js";
import { bytesToHex } from "@noble/hashes/utils.js";
import { Card, Input } from "antd";
import { SHA1, SHA256, SHA512 } from "crypto-js";
import type { FC } from "react";
import { useEffect, useState } from "react";
import InputCopyable from "@/components/InputCopyable.tsx";
import { PageContainer } from "@/components/ui";

interface HashResult {
  md5?: string;
  sha1?: string;
  sha256?: string;
  sha512?: string;
}

export const Component: FC = () => {
  const defaultHashResult: HashResult = {
    md5: "",
    sha1: "",
    sha256: "",
    sha512: "",
  };

  const [plainText, setPlainText] = useState<string>("");
  const [hashResult, setHashResult] = useState<HashResult | null>(defaultHashResult);
  useEffect(() => {
    if (!plainText || plainText === "") {
      setHashResult((defaultHashResult) => defaultHashResult);
      return;
    }
    const md5 = bytesToHex(MD5(new TextEncoder().encode(plainText)));
    const sha1 = SHA1(plainText).toString();
    const sha256 = SHA256(plainText).toString();
    const sha512 = SHA512(plainText).toString();
    setHashResult((hashResult) => {
      return { ...hashResult, md5, sha1, sha256, sha512 };
    });
  }, [plainText]);
  return (
    <PageContainer>
      <Card className="mx-auto max-w-screen-md">
        <div className="mb-8">
          <Input.TextArea
            value={plainText}
            rows={2}
            placeholder="原文"
            onChange={(event) => {
              setPlainText(event.target.value);
            }}
            showCount
          />
        </div>

        <InputCopyable tag="MD5" value={hashResult?.md5} />
        <InputCopyable tag="SHA1" value={hashResult?.sha1} />
        <InputCopyable tag="SHA256" value={hashResult?.sha256} />
        <InputCopyable tag="SHA512" value={hashResult?.sha512} />
      </Card>
    </PageContainer>
  );
};
