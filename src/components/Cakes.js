import React from 'react'
import Crunch from '../assets/crunch.jpg'
import Peanutbutter from '../assets/peanutbutter.jpg'
import Bannana from '../assets/bannana.jpg'
import Strawberry from '../assets/strawberry.jpg'
import Redvelvet from '../assets/redvelvet.jpg'
import Cookie from '../assets/cookie.jpg'

const Cakes = () => {
    return (
        <>
        <section className="grid">
            <h1 className="cake">Cakes</h1>
            <div className="grid-items">
            <div>
                <img src={Crunch} alt=""  />
                <h4>Crunch Cake</h4>
                <p> Try our Crunch Cake today.
                </p>
            </div>

            <div>
                <img src={Peanutbutter} alt="" />
                <h4>Peanut Butter Cake</h4>
                <p> Try our Peanur Butter Cake today.
                </p>
            </div>

            <div>
                <img src={Bannana} alt=""  />
                <h4>Bannana Pudding Cake</h4>
                <p> Try our Bannana Pudding Cake today.
                </p>
                </div>

                <div>
                <img src={Strawberry} alt=""  />
                <h4>Strawberry Cake</h4>
                <p> Try our Strawberry Cake today.
                </p>
            </div>

            <div>
                <img src={Redvelvet} alt="" />
                <h4>Red Velvet Cake</h4>
                <p> Try our Red Velvet Cake today.
                </p>
            </div>

            <div>
                <img src={Cookie} alt=""  />
                <h4>Cookie Cake</h4>
                <p> Try our Cookie Cake today.
                </p>
                </div>
            </div>
        </section>
            
            
        </>
    )
}

export default Cakes
