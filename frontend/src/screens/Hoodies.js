import React from 'react'
import CardImage from '../minicomponents/CardImage'
import {Link} from 'react-router-dom'
import HeroTitle from '../minicomponents/HeroTitle'
import Meta from '../minicomponents/Meta'


export default function Hoodies() {
    return (
        <div className="SubCategories SubHoodies my-4">
            <Meta title="Chaotic | Hoodies" />
            <Link to='/' className="btn btn-dark text-right mb-2">
                Go Home <i className="fas fa-home"></i>
            </Link>
            <HeroTitle text="Shop in Hoodies" />
            <div className="row">
                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/plainhoodies'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427390/plain_watugh.jpg"
                            centered={true} title="Plain Hoodies" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/animie'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427380/anime_mkou9v.jpg"
                            centered={true} title="Anime" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/webseries'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427389/tv_shows_azg6jm.jpg"
                            centered={true} title="Webseries" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/cartoons'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/cartoon_nuawdz.jpg"
                            centered={true} title="Cartoons" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/memesandquotes'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427368/meme_lzhpgz.jpg"
                            centered={true} title="Memes and Quotes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/superheroes'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427377/superhero_twffhv.jpg"
                            centered={true} title="Superheroes" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/games'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427392/games_vjucmc.jpg"
                            centered={true} title="Games" />
                    </Link>
                </div>

                <div className="col-6 col-md-4">
                    <Link to='/api/products/category/hoodies/brand/music'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1606427386/music_opxjqj.jpg"
                            centered={true} title="Music" />
                    </Link>
                </div>

                <div className="col col-md-4">
                    <Link to='/api/products/category/hoodies/brand/collection'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1611065433/alchemy/a_sample_1_qsj6cf.png"
                            centered={true} title="Chaotic Collection" />
                    </Link>
                </div>

                <div className="col col-md-4">
                    <Link to='/api/products/category/hoodies'>
                        <CardImage src="https://res.cloudinary.com/alchemy069/image/upload/v1611198038/alchemy/Slideshow/all_hood_t2szjo.jpg"
                            centered={true} title="All Hoodies" />
                    </Link>
                </div>
                
            </div>
        </div>
    )
}
