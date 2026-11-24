import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Highlighter,
  Italic,
  Link,
  Link2Off,
  List,
  ListOrdered,
  Minus,
  Redo2,
  RemoveFormatting,
  SquareCode,
  Strikethrough,
  Subscript,
  Superscript,
  TextAlignCenter,
  TextAlignEnd,
  TextAlignJustify,
  TextAlignStart,
  TextQuote,
  Underline,
  Undo2,
} from "lucide-react";
import React from "react";

import type { RichTextEditorIcons } from "./icon-types";
import { DEFAULT_LANGUAGE_ICONS } from "./language-icons";

// ---------------------------------------------------------------------------
// Embed toolbar icons (used by ResizableNodeView / EmbedToolbar)
// ---------------------------------------------------------------------------

type AlignDir = "left" | "center" | "right";

export const ALIGN_PATHS: Record<AlignDir, React.ReactNode> = {
  center: (
    <>
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="17" y1="12" x2="7" y2="12" />
      <line x1="19" y1="18" x2="5" y2="18" />
    </>
  ),
  left: (
    <>
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="15" y1="12" x2="3" y2="12" />
      <line x1="17" y1="18" x2="3" y2="18" />
    </>
  ),
  right: (
    <>
      <line x1="21" y1="6" x2="3" y2="6" />
      <line x1="21" y1="12" x2="9" y2="12" />
      <line x1="21" y1="18" x2="7" y2="18" />
    </>
  ),
};

export type { AlignDir };

export const AlignIcon = ({ dir }: { dir: AlignDir }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rte-editor-icon"
  >
    {ALIGN_PATHS[dir]}
  </svg>
);

export const EditUrlIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rte-editor-icon"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

export const OpenInYouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rte-editor-icon"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const DeleteEmbedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="rte-editor-icon"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const iconProps = { className: "rte-editor-icon" };

export const DEFAULT_ICONS: RichTextEditorIcons = {
  alignCenterControlIcon: <TextAlignCenter {...iconProps} />,
  alignJustifyControlIcon: <TextAlignJustify {...iconProps} />,
  alignLeftControlIcon: <TextAlignStart {...iconProps} />,
  alignRightControlIcon: <TextAlignEnd {...iconProps} />,
  blockquoteControlIcon: <TextQuote {...iconProps} />,
  boldControlIcon: <Bold {...iconProps} />,
  bulletListControlIcon: <List {...iconProps} />,
  clearFormattingControlIcon: <RemoveFormatting {...iconProps} />,
  codeBlockControlIcon: <SquareCode {...iconProps} />,
  codeControlIcon: <Code {...iconProps} />,
  h1ControlIcon: <Heading1 {...iconProps} />,
  h2ControlIcon: <Heading2 {...iconProps} />,
  h3ControlIcon: <Heading3 {...iconProps} />,
  h4ControlIcon: <Heading4 {...iconProps} />,
  h5ControlIcon: <Heading5 {...iconProps} />,
  h6ControlIcon: <Heading6 {...iconProps} />,
  highlightControlIcon: <Highlighter {...iconProps} />,
  hrControlIcon: <Minus {...iconProps} />,
  italicControlIcon: <Italic {...iconProps} />,
  languageIcons: DEFAULT_LANGUAGE_ICONS,
  linkControlIcon: <Link {...iconProps} />,
  orderedListControlIcon: <ListOrdered {...iconProps} />,
  redoControlIcon: <Redo2 {...iconProps} />,
  strikeControlIcon: <Strikethrough {...iconProps} />,
  subscriptControlIcon: <Subscript {...iconProps} />,
  superscriptControlIcon: <Superscript {...iconProps} />,
  underlineControlIcon: <Underline {...iconProps} />,
  undoControlIcon: <Undo2 {...iconProps} />,
  unlinkControlIcon: <Link2Off {...iconProps} />,
};
