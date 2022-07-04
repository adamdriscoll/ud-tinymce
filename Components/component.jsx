import React, { useRef } from 'react';
import { withComponentFeatures } from 'universal-dashboard'
import { Editor } from '@tinymce/tinymce-react';

const UDComponent = props => {
  const editorRef = useRef(null);

  return (<Editor
    onInit={(evt, editor) => editorRef.current = editor}
    {...props}
    onEditorChange={(value) => {
      if (props.onEditorChange) {
        props.onEditorChange(value)
      }
    }}
  />)
}

export default withComponentFeatures(UDComponent)