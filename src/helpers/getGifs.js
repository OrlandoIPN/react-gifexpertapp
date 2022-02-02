export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=FTCYybVqj389bGTj0Dnk2hAwTUEt4J1Z`;
    const res = await fetch(url);
    const { data } = await res.json();
    // console.log(data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            URL: img.images?.downsized_medium.url
        }
    })

    console.log(gifs)
    return gifs;
   
}