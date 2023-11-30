const movies = [{
    title: 'Catcher in the Rye',
    image: 'https://images.squarespace-cdn.com/content/v1/52d6d1ede4b0b322e9c7a2ea/1460412360772-Y7HS566OMPPUJ32L8EWZ/image-asset.jpeg?format=2500w',
    description: 'The Catcher in the Rye, novel by J.D. Salinger published in 1951. The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school.<br> Confused and disillusioned, Holden searches for truth and rails against the “phoniness” of the adult world. He ends up exhausted and emotionally unstable. The events are related after the fact.',
    date: '2023-03-16T00:00:00',
    director: 'Nigel Tomm',
    duration: '1h 30min'
}, {
    title: 'To Kill a Mockingbird',
    image: 'https://parentpreviews.com/images/made/legacy-pics/to_kill_a_mockingbird_668_330_80_int_s_c1.jpg',
    description: 'Based on Harper Lees Pulitzer Prize winning boo, this film adaptation skillfully explores prejudice, racial and otherwise, all from a childs point of view. Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a Black man against an undeserved rape charge, and tries to educate his young children against prejudice.',
    date: '1962-03-16T00:00:00',
    director: 'Robert Mulligan',
    duration: '2h 30min'
}];

function createMovieContent(movie){
    //card creating
    const article = document.createElement('article');
    article.classList.add('card');

    //header creating

    const header = document.createElement('header');
    header.classList.add('card__header');
    header.style.backgroundImage = `url(${movie.image})`;

    //h2 creating
    const h2 = document.createElement('h2');
    h2.classList.add('card__title');
    h2.textContent = movie.title;

    //span creating
    const info = document.createElement('span');
    info.classList.add('card__info');
    info.textContent = `${movie.date} - ${movie.duration}`;

    header.append(h2);
    header.append(info);

    //section creating
    const section = document.createElement('section');
    section.classList.add('card__content');

    const description = document.createElement('p');
    description.classList.add('card__description');
    description.textContent = movie.description;

    const line = document.createElement('hr');

    const director = document.createElement('p');
    director.textContent = movie.director;

    section.append(description);
    section.append(line);
    section.append(director);

    article.append(header);
    article.append(section);

    return article;
}   

function appendContent(content){
    const el = document.getElementById('content');

    el.append(content);
}

function init(movies){
    const fragment = document.createDocumentFragment();

    movies.forEach(movie => {
        fragment.append(createMovieContent(movie));
    });

    appendContent(fragment);
}

init(movies);