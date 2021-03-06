const API_KEY = "7ffc1b6b29ad0dbadb2301efe53c6802";
const API_BASE = "https://api.themoviedb.org/3";


/*
- Originais netflix
- Recommendados (trending)
- em alta (top rated)
- Ação
- Comedia
- Terror,
- Romance
- Documentarios
*/

const basicFetch = async (endpoint)=>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const json= {
    getHomeList: async ()=>{
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?whith_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ]
    },

    getMovieInfo: async (movieId, type)=>{
        let info = {}

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                default: 
                    info=null;
                break;
            }
        }

        return info;
    },

    getMovieTrailer: async(movieId)=>{
        const data = await basicFetch(`/movie/${movieId}/videos?api_key=${API_KEY}`)
        return data;
    }

    //http://api.themoviedb.org/3
}

export default json;