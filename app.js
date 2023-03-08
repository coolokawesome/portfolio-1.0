//declared skill items
Skills = [
    'HTML',
    'CSS',
    'Javascript',
    'JQuery',
    'React',
    'Bootstrap/Tailwind',
    'Git',
    'Python',
    'Github',
    'C# Basics',
    'SQL Basics',
    'Photoshop',
    'Illustrator',
    'Bash & Powershell',
    'Debugging'
    ]
//get the div and give it a separate container for each item
$('#skillsDiv').attr('class', 'mb-1').append(
    $('<h3>').attr('class', 'text-center skilltext').text('Skills'))
    .append(
    $('<div>').attr('class', "d-flex flex-wrap justify-content-center")
    .attr('id', 'mainSkills')
        )
Skills.forEach(item => {
    $('#mainSkills').append(
            $('<div>').attr('class', 'skill-item rounded-3')
                .append(
                    $('<p>').attr('class','skill-text')
                        .text(item)
                ))})

