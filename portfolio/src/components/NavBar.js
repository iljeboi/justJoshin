import React from "react"
import { NavLink} from "react-router-dom"
import { SocialIcon } from "react-social-icons"
export default function NavBar() {
    return (
        <header className="bg-purple-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact 
                    activeClassName="text-white"
                    className="inline-flex items-center py-4 px-6 rounded text-red-100 hover:text-green-800 font-bold tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/post"
                    className="inline-flex items-center py-4 px-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                    className="inline-flex items-center py-4 px-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inline-flex items-center py-4 px-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-4 px-3">
                    <SocialIcon url="https://www.linkedin.com/in/thomas-madden-54b4a5197/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://www.facebook.com/iljeboi" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon url="https://github.com/iljeboi" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>   
            </div>
        </header>
    )
}