import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="padding-x p-2 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <h1 className="text-green-400 text-[45px] font-bold">UrbanHue</h1>
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map(item => (
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block">
                <img 
                src={hamburger}
                alt="Hamburger"
                width={25}
                height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav