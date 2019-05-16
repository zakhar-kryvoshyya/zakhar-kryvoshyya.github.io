//ФЕЙДЕР font size
$("#fader").on("input", function () {
    $(".preview__text").css("font-size", $(this).val() + "px");
});

$("#track").on("input", function () {
    $(".preview__text").css("letter-spacing", $(this).val() + "px");
});

$("#lead").on("input", function () {
    $(".preview__text").css("line-height", $(this).val() + "%");
});

//НЕГАТИВ ПЕРЕКЛЮЧАЛКА
$('#contrast').on('click', function () {
    console.log('hej');
    $('.preview').toggleClass('is-negative');
});


//ЗМІНА НАКРЕСЛЕННЯ
$('.font-weight').change(function () {
    var fontWeight = $(this).val();
    console.log(fontWeight);
    $('.preview__text').css('font-weight', fontWeight);
})

//ВАРІАНТИ ТЕКСТОВОГО ЗАПОВНЕННЯ
//$('.text-preset').change(function () {
//    var textPreset = $(this).val();
//    $('.preview__text').html(textPreset);
//})


//ЗМІНА РЕГІСТРУ
$("#uppercase, #lowercase, #capitalize, #normal").change(function () {
    var value = this.value;
    switch (value) {
        case "uppercase":
            fontTxtField.addClass("uppercase-text").removeClass("lowercase-text").removeClass("capitalize-text");
            break;
        case "lowercase":
            fontTxtField.addClass("lowercase-text").removeClass("uppercase-text").removeClass("capitalize-text");
            break;
        case "capitalize":
            fontTxtField.addClass("capitalize-text").removeClass("uppercase-text").removeClass("lowercase-text");
            break;
        case "normal":
        default:
            fontTxtField.removeClass("uppercase-text").removeClass("lowercase-text").removeClass("capitalize-text");;
            break;
    };
});


//dropdown 
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    var $previewText = $('.preview__text');
    $styledSelect.text($this.children('option').eq(0).text());
    $previewText.text($this.children('option').eq(0).val());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $previewText.text($(this).attr('rel')).removeClass('active');
        
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});