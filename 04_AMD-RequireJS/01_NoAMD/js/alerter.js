define(['dataService', 'jquery'], function(dataService, $) {
    let name = 'Tom'

    function showMsg() {
        $('body').css('background', 'gray')
        alert(dataService.getMsg() + ', ' + name)
    }

    return { showMsg }
})