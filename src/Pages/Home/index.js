import React from 'react'
import HeroSection from '../../Components/HeroSection'
import ProjectList from '../../Components/ProjectList'
import { HomeContainer } from './HomeElements'

const Home = () => {

    const transitionVariant = {
        hidden:{x:'-100vw'},
        show:{
            x:'0',
            transition:{
                duration:0.5,
                ease:'easeInOut',
                when:'beforeChildren',
            }
        },
        exit:{
            x:'100vw',
            transition:{
                type:'tween',
                duration:0.5,
                ease:'easeInOut',
                when:'afterChildren'
            }
        }
    }

    return (
        <HomeContainer
            variants={transitionVariant}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <HeroSection/>
            <ProjectList/>
        </HomeContainer>
    )
}

export default Home
