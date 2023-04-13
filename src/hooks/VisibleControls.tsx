import { useEffect, RefObject } from 'react';
import { IsVisible } from '../hooks'
import { useAnimation } from 'framer-motion';

const VisibleControls = (ref: RefObject<HTMLElement>) => {
    const visible = IsVisible(ref)
    const controls = useAnimation()
    
    useEffect(() => {
        if (visible) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [visible])
    
    return controls;
}

export default VisibleControls;