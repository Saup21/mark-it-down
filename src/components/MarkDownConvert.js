import React, { useState, useEffect } from 'react'
import MonacoEditor from '@monaco-editor/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkDownConvert() {
    const [mark, setMark] = useState(`# h1
## h2
### h3 
#### h4
##### h5
###### h6
***
1. Ordered list 
1. Ordered list 

- Unordered list
- Unordered list
***

- [x] Enjoy *markdown* here 

***
[Developed with Love by Sauparna Gupta](https://github.com/Saup21/mark-it-down)`)

    useEffect(() => {
        if (sessionStorage.getItem('code')) {
            setMark(sessionStorage.getItem('code'))
        } else {
            sessionStorage.setItem('code', mark)
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem('code', mark)
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
                <div className="header-text">Your Preview Appears Here</div>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {mark}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default MarkDownConvert
