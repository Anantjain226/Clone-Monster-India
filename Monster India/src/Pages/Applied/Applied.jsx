import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

export const Applied = () => {
    const params = useParams()
    // const data = useSelector(state => state.jobs.jobs)

    // React.useEffect(() => {
    //     const data = 
    // })

    return (
        <div>
            <p style = {{fontSize: 30, marginRight: 1100, color: "grey", padding: 20}} >Job Applied</p> 
            <div style = {{background: "white", display: "flex"}} > 
                <div> <img src = "https://www.flaticon.com/svg/static/icons/svg/992/992481.svg" style = {{height: 50}} /></div>
                <div> 
                    <p>You have successfully submitted your application for </p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
