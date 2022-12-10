import React, {useEffect, useState} from 'react'

const MovieData = () => {
    const [popular, setPopular] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const [loading, setLoading] = useState(false)
    const [text, setText] = useState('')

    const fetchMovie = async () => {
        setLoading(true)
        const response = await fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=6c288757e59a68ab616ba95e467' +
            '779dc&language=en-US&page=1'
        )
        const data = await response.json()

        setPopular(await data.results)
        setFiltered(await data.results)
        setLoading(false)
    }


    useEffect(() => {
        fetchMovie()
    }, [])

    const searchHandle = (e) => {
        setText(e)
        if (e !== '') {
            const filteredEl = popular.filter((item) => {
                return Object
                    .values(item.title)
                    .join('')
                    .toLowerCase()
                    .includes(e.toLowerCase())
            })
            setFiltered(filteredEl)
        } else {
            setFiltered(popular)
        }
    }

    return (
        <div className='movie-data'>
            <div className="form">
                <form onSubmit={(e) => e.preventDefault()}>
                    <p>Search</p>
                    <input type="text" value={text} onChange={(e) => searchHandle(e.target.value)}/>
                </form>
            </div>

            <div className="movie-div">
                {loading ? 'Loading ...' : (
                    filtered.map((item) => (
                        <div className='movies' key={item.id}>
                            <h3>{item.title}</h3>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default MovieData
