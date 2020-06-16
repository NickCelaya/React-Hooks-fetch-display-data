import React from 'react'
import './../App.css'

const Cristobal = (props) => {
    const {test, data} = props
    const info = test.map( (element, key) => {
            return(
                <div className="dataColorSelect" key={key}>
                 <h3>
                    <li>{element.name}</li>
                </h3>
                </div>
            )
        })

        const animals = data.map( (element, key) => {
            return(
                <div key={key}>
                 <h3>
                    <li>{element}</li>
                </h3>
                </div>
            )
        })
    

    console.log(props, 'nick')
    console.log(test, 'this is test')
    return(
        <div>
         {info}
         {animals}
        </div>
    )

}

export default Cristobal