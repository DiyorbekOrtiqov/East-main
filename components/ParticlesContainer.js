import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Foldit } from '@next/font/google';


const ParticlesContainer = () => {

  const particlesInit = useCallback (async(engine)=>{
    await loadFull(engine)

  },[]);

  const particlesLoaded =useCallback( async () => { }, []);

  return(
    <Particles 
    className='w-full h-full absolute translate-z-0'
    id='tsparticles' 
    init={particlesInit} 
    loaded={particlesLoaded} 
    options={{
      fullScreen: {enable:false},
      background: {
        color:{
          value:'',
        },
      },
      fpsLimit:120,
      interactivity:{
        events:{
          onClick:{
            enable:false,
            mode:'push '
          },
          onHover:{
            enable:true,
            mode:'repulse',
          },
          resize:true,

        },
        modes:{
          push:{
            quantity:90
          },
          repulse:{
            distance:200,
            duration:0.4,

          }
        }
      },
      particles:{
        color:{
          value:'#e68e2e'
        },
        links:{
          color:'#f5d396',
          distance:145,
          enable: true,
          opacity:0.4,
          with:1
        },
        collisions:{
          enable:true,
        },
        move:{
          directions:'none',
          enable:true,
          outModes:{
            default:'bounce'
          },
          random:false,
          speed:0.7,
          straight:false
        },
        number:{
          density:{
            enable:true,
            area:700

          },
          value:75
        },
        opacity:{
          value:0.5,

        },
        shape:{
          type:'circle'
        },
        size:{
          value:{ min:1, max:4},
        },
      },
      detectRetina: true,
      }}
      />

  );
};

export default ParticlesContainer;
