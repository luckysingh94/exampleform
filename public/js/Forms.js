var objEvent= {
    //error
    danger: 'has-danger',
    errorName: '.form-control-error',
    //end error
    forms:'._xn-form',
};


$(function () {
    $(objEvent.forms).submit(function (event) {
        event.preventDefault();
        removeError($(this),objEvent.errorName);
        $.ajax({
            url:$(this).attr('action'),
            type:'POST',
            data:new FormData(this),
            dataType:'JSON',
            cache:false,
            processData:false,
            contentType:false,
            success:function (data) {
                if (data.e) {
                    $.each(data.d, function (k, v) {
                        var $input = $('.' + k);
                        $input.parent().addClass('has-danger');
                        $input.after(printError(v));
                    });
                }
            },
            error:function (data) {
                console.log(data);
            }
        });
    });
});
function printError($i)
{
    return '<div class="form-control-error font-weight-bold font-12">'+$i+'</div>';
}
function removeError(e,f)
{
    e.find(f).remove();
    e.find('.'+objEvent.danger).removeClass(objEvent.danger);
}