import { useCurrentEditor } from '@tiptap/react';
import { Fragment } from 'react';
import { BiCodeBlock } from 'react-icons/bi';
import {
  FaBold,
  FaCode,
  FaItalic,
  FaParagraph,
  FaRedo,
  FaStrikethrough,
  FaUndo,
} from 'react-icons/fa';
import { GrBlockQuote } from 'react-icons/gr';
import {
  LuHeading1,
  LuHeading2,
  LuListOrdered,
  LuRemoveFormatting,
  LuSeparatorHorizontal,
  LuWrapText,
} from 'react-icons/lu';
import { MdFormatListBulleted } from 'react-icons/md';
import { MenuItem } from './MenuItem';
import './styles/MenuBar.css';

export const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }
  const items = [
    {
      icon: FaBold,
      title: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive('bold'),
    },
    {
      icon: FaItalic,
      title: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive('italic'),
    },
    {
      icon: FaStrikethrough,
      title: 'Strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive('strike'),
    },
    {
      icon: FaCode,
      title: 'Code',
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive('code'),
    },
    // {
    //   icon: 'mark-pen-line',
    //   title: 'Highlight',
    //   action: () => editor.chain().focus().toggleHighlight().run(),
    //   isActive: () => editor.isActive('highlight'),
    // },
    {
      type: 'divider',
    },
    {
      icon: LuHeading1,
      title: 'Heading 1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive('heading', { level: 1 }),
    },
    {
      icon: LuHeading2,
      title: 'Heading 2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive('heading', { level: 2 }),
    },
    {
      icon: FaParagraph,
      title: 'Paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive('paragraph'),
    },
    {
      icon: MdFormatListBulleted,
      title: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive('bulletList'),
    },
    {
      icon: LuListOrdered,
      title: 'Ordered List',
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive('orderedList'),
    },
    // {
    //   icon: 'list-check-2',
    //   title: 'Task List',
    //   action: () => editor.chain().focus().toggleTaskList().run(),
    //   isActive: () => editor.isActive('taskList'),
    // },
    {
      icon: BiCodeBlock,
      title: 'Code Block',
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive('codeBlock'),
    },
    {
      type: 'divider',
    },
    {
      icon: GrBlockQuote,
      title: 'Blockquote',
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive('blockquote'),
    },
    {
      icon: LuSeparatorHorizontal,
      title: 'Horizontal Rule',
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: LuWrapText,
      title: 'Hard Break',
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    {
      icon: LuRemoveFormatting,
      title: 'Clear Format',
      action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
      type: 'divider',
    },
    {
      icon: FaUndo,
      title: 'Undo',
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: FaRedo,
      title: 'Redo',
      action: () => editor.chain().focus().redo().run(),
    },
  ];

  return (
    <div className='mb-5 flex flex-wrap gap-2 bg-black text-white'>
      {items.map((item, index) => (
        <Fragment key={index}>
          {item.type === 'divider' ? (
            <div className='divider' />
          ) : (
            <MenuItem {...item} />
          )}
        </Fragment>
      ))}
    </div>
  );
};
