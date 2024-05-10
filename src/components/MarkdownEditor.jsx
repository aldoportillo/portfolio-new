import  { useState } from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');

  const savePost = async () => {
    try {
      const payload = { content: markdown };
      //await axios.post('http://localhost:5000/api/posts', payload);
      console.log(payload)
      alert('Post saved successfully!');
    } catch (error) {
      console.error('Failed to save post:', error);
      alert('Error saving post.');
    }
  };

  return (
    <div>
      <SimpleMDE value={markdown} onChange={setMarkdown} />
      <button onClick={savePost}>Save Post</button>
    </div>
  );
}

export default MarkdownEditor;
