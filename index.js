$(document).ready(function () {
    $('#dog').click(function () {
        //make the button text change to "Generating Doggo..."
        $('#dog').text("Generating Doggo...");
        //add callback function that takes a parameter called "data" for the get request
        $.get('https://dog.ceo/api/breeds/image/random', function (data) {
            var image = $('<img />');
            var url = data.message;
            image.attr('src', url);
            $('body').append('<br />'); //ensures that the image shows up below the button rather than next to it.
            $('body').append(image);
            
            //Make the button text go back to "Generate Doggo"
            $('#dog').text("Generate Doggo");
        });
    });
});