import React, { useState, useEffect } from 'react'
import MonacoEditor from '@monaco-editor/react'

function MarkDownConvert() {
    const [mark, setMark] = useState('')

    const options = {
        selectOnLineNumbers: true,
        fontSize: 16
    }

    return (
        <div className="container">
            <div className="editor">
                <MonacoEditor
                    language="markdown"
                    theme="vs-dark"
                    options={options}
                />
                
            </div>
        </div>
    )
}

export default MarkDownConvert
