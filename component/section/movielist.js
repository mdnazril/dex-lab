import styles from '/styles/movielist.module.css'
import { useState, useEffect } from 'react';
import Pagination from '../paging';

const Movielist = () => {

    const [movieData, setMovieData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    //get movie data
    const movieHandler =async()=>{
        const res = await fetch('https://muhdnazril.github.io/workdb/data/movies.json');
        const data = await res.json();
        setMovieData(data)
    }

    useEffect(()=>{
        movieHandler();
    },[]);

    //get current post
    const lastPost = currentPage * postsPerPage;
    const firstPost = lastPost - postsPerPage;
    const currentPost = movieData.slice(firstPost,lastPost)

    //change pages
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>TOP RATED MOVIE</h1>
            </div>
            <div className={styles.movieContainer}>
            {currentPost.map(movie => {
                return(
                    <div key={movie.id} className={styles.cover}>
                        <div className={styles.coverImage}>
                        <img src={movie.poster_path}  alt="cover img"  
                         className={styles.image} />
                        </div>
                        <div className="detail">
                        <p className={styles.title}>{movie.title}</p>
                        <p className={styles.date}>{movie.release_date.slice(0,4)}</p>
                        </div>
                    </div>
                )
            })}
            </div>
            <div className={styles.page}>
                <p>PAGE</p>
                <Pagination postsPerPage={postsPerPage}
                totalPosts={movieData.length}
                paginate={paginate} /> 
                </div>
        </div>
    );
}
 
export default Movielist;

