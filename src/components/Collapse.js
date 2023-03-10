import React, { useState } from 'react'
import VectorTop from "../assets/VectorTop.png";
import VectorBottom from "../assets/VectorBottom.png";

function Collapse({title, content}) {
  //useState à false car collapse fermée par défaut
    const [open, setOpen] = useState(true)
    console.log(content)
    return (
        <div className="collapse">
            <div className="collapse__header">
                <div className="collapse__header--title">
                    {title}
                    <span 
                    className="collapse__header--button"
                        onClick={() => setOpen(!open)}
                    >
                        <img className="collapse__header--vector" src={open ? VectorTop : VectorBottom} />
                    </span>
                </div>
            </div>
            { open ? <div className="collapse__description">
                { Array.isArray(content) ? content.map(item => <p key={item}>{item}</p>) : content

                }
            </div> : null }
        </div>
    )
} 
export default Collapse

  