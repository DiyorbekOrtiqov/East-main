
import {Sora} from '@next/font/google'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora ',
  weight:['100','200','300','400','500','600','700','800']
})


import Nav from '../components/Nav'
import Header from '../components/Header/Header'
import { children } from 'react'
import Main from '../components/main/main'



const Layout = ( {children}) => {
  return <div className={`page  bg-zinc-800  text-white ${ sora.variable}  font-sora relative ` }>
    <Nav/>
    <div className='costumScrol '>
           <Header/>
          {children}
    </div>
  </div>
};

export default Layout;
