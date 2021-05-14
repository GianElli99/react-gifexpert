export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
    category
  )}&api_key=so6RrDMpXq18F6A8Su9CkqpAQU0Gu5md`;
  const result = await fetch(url);
  const { data } = await result.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
