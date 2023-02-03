
Skills = [
    'HTML',
    'CSS',
    'Javascript',
    'JQuery',
    'Git Bash',
    'Python',
    'Github',
    'PhotoShop',
    'SEO',
    'C# Basics',
    'SQL Basics'
]

$('#skillsDiv').append(
    $('<h2>').attr('class', 'text-center').text('Skills'))
    .append(
    $('<div>').attr('class', "d-flex flex-wrap justify-content-center")
    .attr('id', 'mainSkills')
        )

Skills.forEach(item => {
    $('#mainSkills').append(
            $('<div>').attr(
                'class', 'skill-item rounded-3')
                    .append(
                    $('<p>').attr('class','skill-text').
                    text(item)
                ))})
