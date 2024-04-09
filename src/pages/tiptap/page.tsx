import Iconify from '@/components/Iconify';
import { PageContainer } from '@ant-design/pro-components';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Highlight from '@tiptap/extension-highlight';
import subscript from '@tiptap/extension-subscript';
import superscript from '@tiptap/extension-superscript';
import underline from '@tiptap/extension-underline';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Dropdown, Space, Tooltip } from 'antd';
import copy from 'copy-to-clipboard';
import { common, createLowlight } from 'lowlight';
import type { FC } from 'react';
import { useMemo, useState } from 'react';

import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import xml from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/github.min.css';

const MenuBar = () => {
  const { editor } = useCurrentEditor();
  const [fontSize] = useState<number>(24);
  const [activeClassName] = useState<string>('text-sky-500');

  if (!editor) {
    return null;
  }

  return (
    <div className="tiptap-menu border-b-8 border-solid">
      <Space>
        <Iconify
          icon="material-symbols:format-paragraph"
          fontSize={fontSize}
          className={editor.isActive('paragraph') ? activeClassName : ''}
          onClick={() => editor.chain().focus().setParagraph().run()}
        />
        <Iconify
          icon="material-symbols:format-h1"
          fontSize={fontSize}
          className={editor.isActive('heading', { level: 1 }) ? activeClassName : 'default'}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        />
        <Iconify
          icon="material-symbols:format-h2"
          fontSize={fontSize}
          className={editor.isActive('heading', { level: 2 }) ? activeClassName : 'default'}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        />
        <Iconify
          icon="material-symbols:format-h3"
          fontSize={fontSize}
          className={editor.isActive('heading', { level: 3 }) ? activeClassName : 'default'}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        />

        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                label: 'H4',
                onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
              },
              {
                key: '2',
                label: 'H5',
                onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
              },
              {
                key: '3',
                label: 'H6',
                onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
              },
            ],
          }}
        >
          <Iconify icon="material-symbols:more-horiz" fontSize={fontSize} />
        </Dropdown>
      </Space>
      <Space>
        <Iconify
          icon="material-symbols:format-bold"
          fontSize={fontSize}
          className={editor.isActive('bold') ? activeClassName : 'default'}
          onClick={() => editor.chain().focus().toggleBold().run()}
        />
        <Iconify
          icon="material-symbols:format-italic"
          fontSize={fontSize}
          className={editor.isActive('italic') ? activeClassName : 'default'}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        />
        <Iconify
          icon="material-symbols:code-rounded"
          fontSize={fontSize}
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? activeClassName : 'default'}
        />
        <Iconify
          icon="material-symbols:superscript"
          fontSize={fontSize}
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={editor.isActive('superscript') ? activeClassName : 'default'}
        />
        <Iconify
          icon="material-symbols:subscript"
          fontSize={fontSize}
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={editor.isActive('subscript') ? activeClassName : 'default'}
        />
      </Space>
      <Space>
        <Iconify
          icon="material-symbols:format-strikethrough"
          fontSize={fontSize}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? activeClassName : 'default'}
        />
        <Iconify
          icon="material-symbols:format-ink-highlighter-outline"
          fontSize={fontSize}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive('highlight') ? activeClassName : 'default'}
        />
        <Iconify
          icon="material-symbols:format-underlined"
          fontSize={fontSize}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? activeClassName : 'default'}
        />
      </Space>
      <Space>
        <Iconify
          icon="material-symbols:format-quote"
          fontSize={fontSize}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? activeClassName : 'default'}
        />
        <Iconify
          icon="material-symbols:code"
          fontSize={fontSize}
          className={editor.isActive('codeBlock') ? activeClassName : 'default'}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        />
        <Dropdown
          menu={{
            items: [
              {
                key: 1,
                label: 'CSS',
                onClick: () => editor.chain().focus().toggleCodeBlock({ language: 'CSS' }).run(),
              },
              {
                key: 2,
                label: 'JSON',
                onClick: () => editor.chain().focus().toggleCodeBlock({ language: 'json' }).run(),
              },
              {
                key: 3,
                label: 'XML',
                onClick: () => editor.chain().focus().toggleCodeBlock({ language: 'xml' }).run(),
              },
            ],
          }}
        >
          <Iconify icon="material-symbols:more-horiz" fontSize={fontSize} />
        </Dropdown>
      </Space>
      <Space>
        <Tooltip title="复制 HTML 源码">
          <Iconify
            icon="material-symbols-light:content-copy"
            fontSize={fontSize}
            className="hover:text-sky-500"
            onClick={() => copy(editor?.getHTML())}
          />
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
    class: 'prose prose-base dark:prose-invert focus:outline-none',
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
    Highlight,
    underline,
    superscript,
    subscript,
    CodeBlockLowlight.configure({ lowlight: lowlight, defaultLanguage: 'plaintext' }),
  ];

  return (
    <PageContainer title={false}>
      <div className="h-[calc(100dvh-56px)] p-4 md:h-dvh">
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
