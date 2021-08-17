import React from 'react'

function Header() {

    const download = e => {
        e.preventDefault()
        let text = sessionStorage.getItem('code')
        let blob = new Blob([text], {
            type: 'text/plain'
        })
        let anchor = document.createElement('a')
        anchor.download = 'markdown_file.md'
        anchor.href = window.URL.createObjectURL(blob)
        anchor.target = '_blank'
        anchor.style.display = 'none'
        document.body.appendChild(anchor)
        anchor.click()
        document.body.removeChild(anchor)
    }

    return (
        <div className="container">
            <ul className="header">
                <li className="left"><h2 className="text-left">MARK-IT-DOWN</h2></li>
                <li className="right"><button type="button" className="btn btn-info btn-md" onClick={e => download(e)} id="save">Save</button></li>
            </ul>
        </div>
    )
}

export default Header
