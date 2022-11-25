import { Editor } from '@tinymce/tinymce-react';

const DocEditor = () => {
  const handleUpdate = (value: any, editor: any) => {
    console.log(value);
    console.log(editor);
  };
  return (
    <Editor
      apiKey="8dlna1bwtkwflbvg5binktln4qju91ia2er3jzinnl15lfec"
      initialValue="<p>This is the initial content of the editor.</p>"
      onEditorChange={handleUpdate}
      init={{
        height: '100%',
        menubar: true,
        language: 'zh_CN',
        plugins: ['image', 'autolink', 'lists', 'media', 'table'],

        toolbar: [
          { name: 'styles', items: ['styles'] },
          { name: 'formatting', items: ['bold', 'italic'] },
          { name: 'alignment', items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify'] },
          { name: 'indentation', items: ['outdent', 'indent'] },
          { name: 'other', items: ['checklist', 'editimage'] },
        ],
      }}
    />
  );
};

export default DocEditor;
