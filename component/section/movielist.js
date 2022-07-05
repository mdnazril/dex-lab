import styles from '/styles/movielist.module.css'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Movielist = () => {

    const [movieData, setMovieData] = useState([]);

    const movieHandler =async()=>{
        console.log('masuk');
        const res = await fetch('https://muhdnazril.github.io/workdb/data/movies.json');
        
        const data = await res.json();
        console.log(data);
        setMovieData(data)
    }

    useEffect(()=>{
        movieHandler();
        // console.log(movieData);
    },[]);

    return (
        <div className={styles.container}>
            <div className={styles.movieContainer}>
            <div className={styles.header}>
                <p>TOP RATED MOVIE</p>
            </div>
            {movieData.map(movie => {
                return(
                    <div key={movie.id} className={styles.cover}>
                        <div className={styles.coverImage}>
                        <Image src={movie.poster_path}  alt="cover img" width='200px' height='300px' 
                        layout='responsive' className={styles.image} />
                        </div>
                        <div className="detail">
                        <p className={styles.title}>{movie.title}</p>
                        <p className={styles.date}>{movie.release_date}</p>
                        </div>
                    </div>
                )
            })}
            </div>
            {/* <p>{movieData.title}</p> */}
            {/* <div className="movieContainer">
                <div className={styles.cover}>
                    <div className={styles.coverImage}>
                    <Image src="/mmm.jpg" alt="cover img" width='200px' height='300px' 
                    layout='responsive' className={styles.image} />
                    </div>
                    <div className="detail">
                        <p className={styles.title}>Scareface</p>
                        <p className={styles.date}>1967</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
 
export default Movielist;

