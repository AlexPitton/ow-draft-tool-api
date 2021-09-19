import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const configuration = {
  toolbar: [
    'heading',
    '|',
    'alignment',
    '|',
    'fontSize',
    'fontColor',
    'fontBackgroundColor',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'link',
    '|',
    // 'subscript',
    // 'superscript',
    // 'specialCharacters',
    '|',
    'bulletedList',
    'numberedList',
    'todoList',
    'indent',
    'outdent',
    '|',
    // 'horizontalLine',
    // 'blockQuote',
    // 'htmlEmbed',
    'mediaEmbed',
    // 'codeBlock',
    // 'code',
    // 'insertTable',
    '|',
    // 'exportPdf',
    'removeFormat',
  ],
};

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
    <CKEditor
  editor={ClassicEditor}
  config={configuration}
  data={value}
  onReady={editor => editor.setData(value)}
  onChange={(event, editor) => {
    const data = editor.getData();
    onChange({ target: { name, value: data } });
  }}
  />
  </Wrapper>
);
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
