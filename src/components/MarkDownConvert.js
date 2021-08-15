import React, { useState, useEffect } from 'react'
import MonacoEditor from '@monaco-editor/react'
import ReactMarkdown from 'react-markdown'

function MarkDownConvert() {
    const [mark, setMark] = useState('')

    useEffect(() => {
        if (sessionStorage.getItem('code')) {
            setMark(sessionStorage.getItem('code'))
        } else {
            sessionStorage.setItem('code', mark)
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('code', mark)
        console.log('storing');
    }, [mark])



    return (
        <div className="container area">
            <div className="editor">
                <MonacoEditor
                    language="markdown"
                    theme="vs-dark"
                    options={{
                        minimap: {
                            enabled: true,
                        },
                        selectOnLineNumbers: true,
                        fontSize: 16,
                        wordWrap: "on"
                    }}
                    value={mark}
                    onChange={(value, event) => { setMark(value) }}
                />
            </div>
            <div className="preview">
                <div className="header-text">Your Preview appears here</div>
                <ReactMarkdown>
                    {mark}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkDownConvert
