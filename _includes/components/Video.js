module.exports = ({title, id, timestamp = 0}) => (`
    <h2>${title}</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?start=${timestamp}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);