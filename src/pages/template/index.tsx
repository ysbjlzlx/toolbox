import { ProForm, ProFormList, ProFormText } from "@ant-design/pro-components";
import { githubDark } from "@uiw/codemirror-theme-github";
import CodeMirror from "@uiw/react-codemirror";
import { handlebarsLanguage } from "@xiechao/codemirror-lang-handlebars";
import Handlebars from "handlebars";
import { useEffect, useState } from "react";

export interface Template {
  title: string;
  description?: string;
  content: string;
}

export interface Argument {
  name: string;
  value?: string;
}

export const Component = () => {
  const [value, setValue] = useState<string>("<p>{{firstname}} {{lastname}}</p>");
  const [parameters, setParameters] = useState<Argument[]>([]);
  const [result, setResult] = useState<string>("");
  const [formInstance] = ProForm.useForm();

  useEffect(() => {
    console.log(parameters);
  }, [parameters]);
  useEffect(() => {
    const template = Handlebars.compile(value);
    const data: Record<string, string> = {};
    parameters.forEach((parameter) => {
      data[parameter.name] = parameter.value || "";
    });
    setResult(template(data));
  }, [value, parameters]);
  return (
    <div>
      <div>
        <CodeMirror
          value={value}
          height="200px"
          theme={githubDark}
          extensions={[handlebarsLanguage]}
          onChange={setValue}
        />
      </div>
      <div className="mt-4">
        <ProForm
          form={formInstance}
          layout="vertical"
          submitter={false}
          onChange={() => {
            setParameters(formInstance.getFieldValue("arguments"));
          }}
        >
          <ProFormList
            name="arguments"
            creatorButtonProps={{
              position: "bottom",
              creatorButtonText: "新增变量",
            }}
            initialValue={[
              {
                name: "firstname",
                value: "石",
              },
              {
                name: "lastname",
                value: "破天",
              },
            ]}
          >
            <ProForm.Group>
              <ProFormText name="name" label="名称" required />
              <ProFormText name="value" label="值" required />
            </ProForm.Group>
          </ProFormList>
        </ProForm>
      </div>
      <div className="mt-4">
        <CodeMirror value={result} height="200px" theme={githubDark} extensions={[handlebarsLanguage]} />
      </div>
    </div>
  );
};
