
var row, columnn, colour;
$('#sizePicker').submit((event) => {
    event.preventDefault();
    var column = $('#inputHeight').val();
    var row = $('#inputWidth').val();
    makeGrid(column, row);
    })
function makeGrid(x, y) {
    $('tr').remove();
    for (var i = 1; i<=x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j<=y; j++){
            $('#table' + i).append('<td></td>');
        }    
    }
    $('td').click(function addColor() {
        colour=$('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        }else {
            $(this).attr('style', 'background-color:' + colour);
        }
    }) 
}
