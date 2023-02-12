//declared skill items
Skills = [
    'HTML',
    'CSS',
    'Javascript',
    'JQuery',
    'Git Bash',
    'Python',
    'Github',
    'PhotoShop',
    'C# Basics',
    'SQL Basics'
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

$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('#mouse').hide();
    }
    if ($(window).scrollTop() > 200) {
        $('#mouse').hide();
    }
    else {
        $('#mouse').show();
    }
});