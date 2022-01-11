const areaSocialMedia = window.document.querySelector("#area-social-media");

const iconsDataMediaSocial = [
    {
        id: "01",
        src: "./assets/icons/icon_facebook.svg",
        alt: "facebook icon"
    },
    {
        id: "02",
        src: "./assets/icons/icon_twitter.svg",
        alt: "twitter icon"
    },
    {
        id: "03",
        src: "./assets/icons/icon_instagram.svg",
        alt: "instagram icon"
    },
]

for(let icon of iconsDataMediaSocial) {
    const { id, src, alt } = icon;

    areaSocialMedia.innerHTML += `
        <div 
            class="social-media"
            data-id="${id}"
        >
            <img
                src="${src}"
                alt="${alt}""
            />
        </div>
    `
}