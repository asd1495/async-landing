const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3zoY9LapZERsN7caDKqz0w&part=snippet%2Cid&order=date&maxResults=12';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c09c0f4c67msh69db3d36f6986abp150d04jsn7ca145836b00',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const respone = await fetch(urlApi, options);
    const data = await respone.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,12).join('')}
        `;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();