const filmografia = [
    {
        year: 2024,
        poster: '/assets/img/poster-vertical.png',
        title: 'Un Dolor Real',
        genre: 'Drama',
        duration: '130 Min.',
        role: 'DIRECTOR - ACTOR'
    },
    {
        year: 2021,
        poster: '/assets/img/poster-vertical.png',
        title: 'El Maravilloso Mago De Oz',
        genre: 'Drama',
        duration: '130 Min.',
        role: 'ACTOR'
    },
    {
        year: 2019,
        poster: '/assets/img/poster-vertical.png',
        title: 'El Maravilloso Mago de Oz',
        genre: 'Drama',
        duration: '130 Min.',
        role: 'ACTOR'
    },
    {
        year: 2017,
        poster: '/assets/img/poster-vertical.png',
        title: 'Un Dolor Real',
        genre: 'Drama',
        duration: '130 Min.',
        role: 'DIRECTOR - ACTOR'
    },
    {
        year: 2016,
        poster: '/assets/img/poster-vertical.png',
        title: 'Un Dolor Real',
        genre: 'Drama',
        duration: '130 Min.',
        role: 'DIRECTOR - ACTOR'
    },
    {
        year: 2015,
        poster: '/assets/img/poster-vertical.png',
        title: 'Un Dolor Real',
        genre: 'Drama',
        duration: '130 Min.',
        role: 'ACTOR'
    },
    {
        year: 2013,
        poster: '/assets/img/poster-vertical.png',
        title: 'Un Dolor Real',
        genre: 'Drama',
        duration: '130 Min.',
        role: 'ACTOR'
    },
    {
        year: 2010,
        poster: '/assets/img/poster-vertical.png',
        title: 'Un Dolor Real',
        genre: 'Drama',
        duration: '130 Min.',
        role: 'DIRECTOR - ACTOR'
    }
];

// function renderTimeline(data) {
//     const timeline = document.getElementById('timeline');
//     timeline.innerHTML = data.map((item, idx) => `
//       <div class="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center timeline-col">
//         <div class="timeline-year-dot-container position-relative w-100 d-flex flex-column align-items-center">
//           <div class="timeline-year fw-bold">${item.year}</div>
//           <div class="timeline-dot"></div>
//         </div>
//         <img class="timeline-poster mb-2" src="${item.poster}" alt="${item.title}">
//         <div class="timeline-title fw-bold text-center mb-1">${item.title}</div>
//         <div class="timeline-info d-flex justify-content-center gap-2 mb-1">
//           <span><i class="fa fa-film"></i> ${item.genre}</span>
//           <span><i class="fa fa-clock"></i> ${item.duration}</span>
//         </div>
//         <div class="timeline-role fw-bold text-primary text-center">${item.role}</div>
//       </div>
//     `).join('');
// }

document.addEventListener('DOMContentLoaded', () => {
    renderTimeline(filmografia);
});