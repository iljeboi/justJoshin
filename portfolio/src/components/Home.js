import React from "react"
import image from "../space.jpg"
export default function Home() {
    return (
        <main>
            <img src={image} alt="Space" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h2 className="text-6xl text-green-100 cursive leading-none lg:leading-snug home-name">Hello, I'm Tommy.</h2>
            </section>
        </main>
    )
}