import { PageContainer } from '@ant-design/pro-components';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Highlight from '@tiptap/extension-highlight';
import subscript from '@tiptap/extension-subscript';
import superscript from '@tiptap/extension-superscript';
import underline from '@tiptap/extension-underline';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button, Dropdown, Space, Tooltip } from 'antd';
import copy from 'copy-to-clipboard';
import { common, createLowlight } from 'lowlight';
import type { FC } from 'react';
import { useMemo } from 'react';

import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';

import { Icon } from '@/components/ui/Icon.tsx';
import 'highlight.js/styles/github.min.css';

// eslint-disable-next-line complexity
const MenuBar = () => {
  const { editor } = useCurrentEditor();
  const activeClassName = 'text-sky-500';

  if (!editor) {
    return null;
  }

  return (
    <div className="tiptap-menu my-4 flex flex-wrap gap-x-4 gap-y-2">
      <Space.Compact>
        <Button
          icon={<Icon name="Pilcrow" />}
          type={editor.isActive('paragraph') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().setParagraph().run()}
        />
        <Button
          icon={<span>H1</span>}
          type={editor.isActive('heading', { level: 1 }) ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        />
        <Button
          icon={<span>H2</span>}
          type={editor.isActive('heading', { level: 2 }) ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        />
        <Button
          icon={<span>H3</span>}
          type={editor.isActive('heading', { level: 3 }) ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        />
        <Dropdown
          menu={{
            items: [
              {
                key: 'h4',
                label: <h4 className={editor.isActive('heading', { level: 4 }) ? activeClassName : ''}>H4</h4>,
              },
              {
                key: 'h5',
                label: <h5 className={editor.isActive('heading', { level: 5 }) ? activeClassName : ''}>H5</h5>,
              },
              {
                key: 'h6',
                label: <h6 className={editor.isActive('heading', { level: 6 }) ? activeClassName : ''}>H6</h6>,
              },
            ],
            onClick: (info) => {
              if (info.key === 'h4') {
                editor.chain().focus().toggleHeading({ level: 4 }).run();
              } else if (info.key === 'h5') {
                editor.chain().focus().toggleHeading({ level: 5 }).run();
              } else if (info.key === 'h6') {
                editor.chain().focus().toggleHeading({ level: 6 }).run();
              }
            },
          }}
        >
          <Button
            icon={<Icon name="ChevronDown" />}
            type={
              editor.isActive('heading', { level: 4 }) ||
              editor.isActive('heading', { level: 5 }) ||
              editor.isActive('heading', { level: 6 })
                ? 'primary'
                : 'default'
            }
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      </Space.Compact>
      <Space.Compact>
        <Button
          icon={<Icon name="Bold" />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          type={editor.isActive('bold') ? 'primary' : 'default'}
        />
        <Button
          icon={<Icon name="Italic" />}
          type={editor.isActive('italic') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <Button
          icon={<Icon name="Code" />}
          type={editor.isActive('code') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleCode().run()}
        />
        <Button
          icon={<Icon name="Superscript" />}
          type={editor.isActive('superscript') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
        />
        <Button
          icon={<Icon name="Subscript" />}
          type={editor.isActive('subscript') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleSubscript().run()}
        />
      </Space.Compact>
      <Space.Compact>
        <Button
          icon={<Icon name="Strikethrough" />}
          type={editor.isActive('strike') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        />
        <Button
          icon={<Icon name="Highlighter" />}
          type={editor.isActive('highlight') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
        />
        <Button
          icon={<Icon name="Underline" />}
          type={editor.isActive('underline') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        />
      </Space.Compact>
      <Space.Compact>
        <Button
          icon={<Icon name="List" />}
          type={editor.isActive('bulletList') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        />
        <Button
          icon={<Icon name="ListOrdered" />}
          type={editor.isActive('orderedList') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        />
        <Button
          icon={<Icon name="Quote" />}
          type={editor.isActive('blockquote') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        />
        <Button
          icon={<Icon name="CodeXml" />}
          type={editor.isActive('codeBlock') ? 'primary' : 'default'}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        />
      </Space.Compact>
      <Space>
        <Tooltip title="复制 HTML 源码">
          <Button icon={<Icon name="Copy" />} onClick={() => copy(editor?.getHTML())} />
        </Tooltip>
      </Space>
    </div>
  );
};

const content = `
  <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d
    probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That’s a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <p>
    Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
  </p>
  <pre><code class="language-css">body {
    display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit
    around. Don’t forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that’s amazing. Good work, boy! 👏
    <br/>
    — Mom
  </blockquote>
`;

const editorProps = {
  attributes: {
    class: 'prose prose-base dark:prose-invert focus:outline-none max-w-full',
  },
};
export const Component: FC = () => {
  const lowlight = useMemo(() => {
    const lowlight = createLowlight(common);
    lowlight.register({ json, css, xml });
    return lowlight;
  }, []);

  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      codeBlock: false,
    }),
    Highlight.configure({ HTMLAttributes: { class: 'bg-yellow-500' } }),
    underline,
    superscript,
    subscript,
    CodeBlockLowlight.configure({ lowlight: lowlight, defaultLanguage: 'plaintext' }),
  ];

  return (
    <PageContainer title={false}>
      <div className="h-[calc(100dvh-56px)] p-4 md:h-dvh ">
        <div className="rounded border-solid p-4">
          <EditorProvider
            slotBefore={<MenuBar />}
            extensions={extensions}
            editorProps={editorProps}
            content={content}
            onUpdate={({ editor }) => {
              console.log(editor.getJSON());
              console.log(editor.getHTML());
              console.log(editor.getText());
            }}
          >
            {null}
          </EditorProvider>
        </div>
      </div>
    </PageContainer>
  );
};
