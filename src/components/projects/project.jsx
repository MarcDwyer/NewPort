import React from 'react'
import uuid from 'uuid'
import '../projects/project-styles.scss'

const Project = (props) => {
    if (!props.project) return null
    return props.project.map(({ title, details, url, links, stack }, index) => {
        let newDex = index + 2
        const isDark = newDex % 2 === 0 ? "" : "dark"
        return (
            <div className={"parent " + isDark} key={uuid()}>
                <div className="container projectcont">
                    <div className="project-details">
                    <h1>{title}</h1>
                    <div className="btn-links">
                    {(() => {
                        return links.map(({ title, link }, index) => {
                            const mg = index > 0 ? "25px" : ""
                            return (
                                <button key={uuid()} style={{marginLeft: mg}} rel="noopener noreferrer"
                                onClick={() => {
                                    const win = window.open(link, '_blank');
                                    win.focus()
                                }}
                                >{title}</button>
                            )
                        })
                    })()}
                    </div>
                    <span style={{fontWeight: "bold", marginTop: "25px"}}>Stack: <span>{stack}</span></span>
                    <p>{details}</p>
                    </div>
                    <img src={url} alt="project"/>
                </div>
            </div>
        )
    })
} 

export default Project