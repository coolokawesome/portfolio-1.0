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
//declare Project item Array
// Projects [
//     {name : 'Leetspeak.me',
//     desc : 'A text-generator that converts the user’s input into two kinds of leetspeak. Features an intuitive and user-friendly design.',
//     url : '/imgs/calendar.jpg'},

//     {name : 'J-808',
//     desc : 'A replica of the vintage TR-808 drum machine made using the Tone.js sound library',
//     url : '/imgs/j808.jpg'}
// ]



//add visit button for each thing
//add a display for mobile and desktop
//one laptop, one phone with a white background
//black text on the right with yellow underliner
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 500) {
        $('#mouse').show("1000");
    }
    else {
        $('#mouse').hide("1000");
    }
});