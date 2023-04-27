export function getMovies(req, res) {
    res.status(200).json([
        {
            name: "movie 1",
            img: "https://static.tkt.ge/img/502c347c-0322-4938-84f0-45f55ff7d23e.jpeg",
        },
        {
            name: "movie 2",
            img: "https://static.tkt.ge/img/fa44a27f-ba48-49ce-aed0-084d383fa116.jpeg",
        },
        {
            name: "movie 3",
            img: "https://static.tkt.ge/img/c5861fd8-5b54-4a7a-9bd8-03298cd50b65.jpeg",
        },
        {
            name: "movie 4",
            img: "https://static.tkt.ge/img/ffb25faa-6716-4e6e-a496-8b3503ca3d03.jpeg",
        },
        {
            name: "movie 5",
            img: "https://static.tkt.ge/img/db9afb32-e561-49f9-a05f-171e2297c428.jpeg"
        },

    ])
}