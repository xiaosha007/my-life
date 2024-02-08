import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, Extensions } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Dispatch, SetStateAction } from 'react';
import { MenuBar } from './MenuBar';
import './styles/Tiptap.css';

const extensions: Extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure(),
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
];

export const Tiptap = ({
  setContent,
  content,
}: {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className='rounded   bg-white p-5'>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        editorProps={{
          attributes: {
            class:
              'p-2 border-black border-solid border-[2px] border-solid border-black min-h-[20vh]',
          },
        }}
        onUpdate={({ editor }) => {
          const html = editor.getHTML();
          setContent(html);
        }}
      >
        {' '}
      </EditorProvider>
    </div>
  );
};
// export default () => {
//   return (
//     <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}></EditorProvider>
//   )
// }
