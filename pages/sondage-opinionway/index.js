import {useEffect, useState} from 'react'

function SondageOpinionWay() {

    const [screenHeight, setScreenHeight] = useState(0)


    useEffect(()=>{
        setScreenHeight(screen.height)
    },[])

    return (
        <a href='/assets/pdf/ow.pdf'/>
    )
}
export default SondageOpinionWay