import Iconify from '@/components/Iconify';
import { PageContainer } from '@ant-design/pro-components';
import Highlight from '@tiptap/extension-highlight';
import subscript from '@tiptap/extension-subscript';
import superscript from '@tiptap/extension-superscript';
import underline from '@tiptap/extension-underline';
import { BubbleMenu, EditorProvider, FloatingMenu, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button, Card, Dropdown, Space } from 'antd';
import type { FC } from 'react';

const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div>
      <Space.Compact>
        <Button
          icon={<Iconify icon="material-symbols:format-h1" />}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          type={editor.isActive('heading', { level: 1 }) ? 'primary' : 'default'}
        />
        <Button
          icon={<Iconify icon="material-symbols:format-h2" />}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          type={editor.isActive('heading', { level: 2 }) ? 'primary' : 'default'}
        />
        <Button
          icon={<Iconify icon="material-symbols:format-h3" />}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          type={editor.isActive('heading', { level: 3 }) ? 'primary' : 'default'}
        />
        <Button
          icon={<Iconify icon="material-symbols:format-paragraph" />}
          onClick={() => editor.chain().focus().setParagraph().run()}
          type={editor.isActive('paragraph') ? 'primary' : 'default'}
        />
        <Dropdown
          menu={{
            items: [
              {
                key: '1',
                icon: <Iconify icon="material-symbols:format-h4" />,
                onClick: () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
              },
              {
                key: '2',
                icon: <Iconify icon="material-symbols:format-h5" />,
                onClick: () => editor.chain().focus().toggleHeading({ level: 5 }).run(),
              },
              {
                key: '3',
                icon: <Iconify icon="material-symbols:format-h6" />,
                onClick: () => editor.chain().focus().toggleHeading({ level: 6 }).run(),
              },
            ],
          }}
        >
          <Button icon={<Iconify icon="material-symbols:more-horiz" />} />
        </Dropdown>
      </Space.Compact>
      <Space.Compact>
        <Button
          icon={<Iconify icon="material-symbols:format-bold" />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          type={editor.isActive('bold') ? 'primary' : 'default'}
        />
        <Button
          icon={<Iconify icon="material-symbols:format-italic" />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          type={editor.isActive('italic') ? 'primary' : 'default'}
        />
      </Space.Compact>
      <Space.Compact>
        <Button
          icon={<Iconify icon="material-symbols:format-strikethrough" />}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          type={editor.isActive('strike') ? 'primary' : 'default'}
        />
        <Button
          icon={<Iconify icon="material-symbols:format-ink-highlighter-outline" />}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          type={editor.isActive('highlight') ? 'primary' : 'default'}
        />
        <Button
          icon={<Iconify icon="material-symbols:format-underlined" />}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          type={editor.isActive('underline') ? 'primary' : 'default'}
        />
      </Space.Compact>
      <Space.Compact>
        <Button
          icon={<Iconify icon="material-symbols:superscript" />}
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          type={editor.isActive('superscript') ? 'primary' : 'default'}
        />
        <Button
          icon={<Iconify icon="material-symbols:subscript" />}
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          type={editor.isActive('subscript') ? 'primary' : 'default'}
        />
      </Space.Compact>
    </div>
  );
};

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
  }),
  Highlight,
  underline,
  superscript,
  subscript,
];

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
    class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none',
  },
};
export const Component: FC = () => {
  return (
    <PageContainer title={false} className="h-[calc(100dvh-56px)] h-dvh">
      <Card className="m-4">
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
          <FloatingMenu>F</FloatingMenu>
          <BubbleMenu>B</BubbleMenu>
        </EditorProvider>
      </Card>
    </PageContainer>
  );
};
