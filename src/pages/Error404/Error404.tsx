import { useEffect, useState } from 'react'
import { AnimatedPage, Button, RouterLink } from '../../components'
import './Error404.scss'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Error404 = () => {

    const [timer, setTimer] = useState<number>(7)
    const [isTimerActive, setIsTimerActive] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isTimerActive) return

        const interval = setInterval(() => {
            if (timer > 0){
                setTimer(timer => timer - 1)
            } else {
                navigate('/')
            }
        }, 1000)
        
        return () => clearInterval(interval)
    }, [timer])

    return (
        <AnimatedPage>
            <Helmet>
                <title>404 Error - Vi saknar denna sida</title>
                <meta name="description" content="Tyvärr, sidan du letar efter finns inte eller har flyttats" />
            </Helmet>
            <div className='error404'>
                <span>404 Error</span>
                <h1>Vi saknar denna sida</h1>
                <p>Tyvärr, sidan du letar efter finns inte eller har flyttats</p>
                <div className="gohome">
                    <RouterLink to='/' variant='primary' className='pulsating'>Gå hem</RouterLink>
                    {isTimerActive && <>
                        <p>eller</p>
                        <p>Gå automatiskt hem om {timer} sekunder<Button variant='link' onClick={() => setIsTimerActive(false)}>Avbryt</Button></p>
                    </>}
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Error404