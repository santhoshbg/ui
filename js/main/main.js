$(document).ready(function() {

    //Gallery Sections

    $('.property-collection-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10
    });

    $('.hotel-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10
    });

    // $('.property-collection-carousel').owlCarousel({
    //     items: 1,
    //     nav: true,
    //     loop: true,
    //     margin: 10
    // });

    $('.amenities-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    $('.amenities-carousel-sub').owlCarousel({
        nav: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            480: {
                items: 2,
                nav: true
            },
            1000: {
                items: 6,
                nav: true
            }
        }
    });

    $('.deals-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    // Rooming Listing
    $('.room-listing-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });

    $('.gallery-next-prev .lSPrev').click(function() {
        $('.lSSlideWrapper .lSPrev').click();
    });

    $('.gallery-next-prev .lSNext').click(function() {
        $('.lSSlideWrapper .lSNext').click();
    });

    $('.viewGallery').click(function() {
        $('.image-gallery-compinent').css({ 'opacity': '1', 'z-index': '999' });
    });

    $(".desktop .dropdown").hover(
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).show();
            $(this).toggleClass('open');
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).hide();
            $(this).toggleClass('open');
        }
    );

    $(document).on('click', '.extra-off', function() {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $(this).animate({ 'width': '72px' });
        } else {
            $(this).addClass('opened');
            $(this).animate({ 'width': '361px' });
        }

    });

    $(window).scroll(function() {
        if ($('.extra-off').hasClass('opened')) {
            $('.extra-off').removeClass('opened');
            $('.extra-off').animate({ 'width': '72px' });
        }
    });


    $("#hotels .hotel-content-hide").addClass('hotel-section');
    $("#hotels .collapse-expand").click(function() {
        if ($("#hotels .collapse-expand").hasClass('collapse-collapse-img')) {
            $(this).removeClass("collapse-collapse-img");
            $("#hotels .hotel-section").addClass("hotel-content-hide");
        } else {
            $("#hotels .hotel-section").removeClass("hotel-content-hide");
            $(this).addClass("collapse-collapse-img");
        }
    });

    $("#residences .hotel-content-hide").addClass('flag');
    $("#residences .collapse-expand").click(function() {
        if ($("#residences .collapse-expand").hasClass('flag-remove')) {
            $(this).removeClass("flag-remove");
            $("#residences .flag").addClass("hotel-content-hide");
            $(this).addClass("collapse-collapse-img-two");
        } else {
            $("#residences .flag").removeClass("hotel-content-hide");
            $(this).addClass("flag-remove");
        }
    });

    // scroll 

    $('#stickyheader a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 40
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });

    $(document).mouseup(function(e) {
        var container = $(".extra-off");
        var staySelection = $(".choose-your-stay-selection");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.removeClass('opened');
            container.animate({ 'width': '72px' });
        }
        if (!staySelection.is(e.target) && staySelection.has(e.target).length === 0) {
            $('.choose-your-stay-selection').hide();
        }
    });

    $(document).on('click', '.banner-arrow', function() {
        $('html, body').animate({ scrollTop: $('#main-content').position().top - 40 }, 'slow');
    });


    // Accordion 

    $(document).on('click', '.accordion__item', function() {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $(this).find('.accordion__itemContent').animate({ 'height': '0' }, 1000);
        } else {
            $(this).addClass('is-active');
            $(this).find('.accordion__itemContent').animate({ 'height': '400px' }, 1000);
            $(this).find('.accordion__itemContent').animate({ 'height': '100%' });
        }
    });

    //Pagination

    //Pagination PRESS RELEASES
    pageSize = 3;
    var pageCount = $("#pressreleases .app-article-listitem").length / pageSize;
    for (var i = 0; i < pageCount; i++) {
        $("#pressreleases .pagination").append('<li>' + (i + 1) + '</li> ');
    }
    $("#pressreleases .pagination li").first().addClass("active")
    showPage = function(page) {
        $("#pressreleases .app-article-listitem").hide();
        $("#pressreleases .app-article-listitem").each(function(n) {
            if (n >= pageSize * (page - 1) && n < pageSize * page)
                $(this).show();
        });
    }
    showPage(1);
    $("#pressreleases .pagination li").click(function() {
        $("#pressreleases .pagination li").removeClass("active");
        $(this).addClass("active");
        showPage(parseInt($(this).text()));
    });

    //Pagination PRESS RELEASES

    pageSizeMedia = 6;
    var pageCountMedia = $("#mediamentions .app-article-mediaitem").length / pageSizeMedia;
    for (var i = 0; i < pageCountMedia; i++) {
        $("#mediamentions .pagination").append('<li>' + (i + 1) + '</li> ');
    }
    $("#mediamentions .pagination li").first().addClass("active")
    showPageMedia = function(page) {
        $("#mediamentions .app-article-mediaitem").hide();
        $("#mediamentions .app-article-mediaitem").each(function(n) {
            if (n >= pageSizeMedia * (page - 1) && n < pageSizeMedia * page)
                $(this).show();
        });
    }
    showPageMedia(1);
    $("#mediamentions .pagination li").click(function() {
        $("#mediamentions .pagination li").removeClass("active");
        $(this).addClass("active");
        showPageMedia(parseInt($(this).text()));
    });

    //Navigation

    $(".mobile .navbar-toggle").click(function() {
        $('.mobile-nav').fadeIn();
        $('.popup-background').fadeIn();
    });

    $(".close-icon").click(function() {
        $('.mobile-nav').fadeOut();
        $('.booking-widget').fadeOut();
        $('.popup-background').fadeOut();
        $('.image-gallery-compinent').css({ 'opacity': '0', 'z-index': '-1' });
    });


    //Booking Widget
    $('.choose-your-stay-selection ul').eq(0).addClass('hotels');
    $('.choose-your-stay-selection ul').eq(1).addClass('residences');

    $('.bookMyStay').click(function() {
        $('.booking-widget').fadeIn();
        $('.popup-background').fadeIn();
    });

    $('.choose-your-stay').click(function() {
        $('.choose-your-stay-selection').toggle("slow");
        $('.hasDatepicker').hide();
        $('.checkout-wrapper, .checkin-wrapper').removeClass('active');
        $('.checkout-wrapper, .checkin-wrapper').removeClass('selected');
    });

    var dataList = '';

    $(".choose-your-stay-selection ul li").on("click", function() {
        var listSelect = $(this).text();
        $('.choose-your-stay-title').text(listSelect);
        dataList = listSelect;
        $('.error-placement').hide();

        setTimeout(function() {
            $('.checkin-wrapper').click();
            var selectedStayindex = $('.choose-your-stay-selection ul li').index(this);
            $("#property option").eq(selectedStayindex).click();
        }, 100);

        if ($(this).parent().hasClass('residences')) {
            $('.choose-your-stay').removeClass('hotelstay');
            $('.choose-your-stay').addClass('residencesstay');
            $('.minimum-stay').show();
        } else {
            $('.choose-your-stay').removeClass('residencesstay');
            $('.choose-your-stay').addClass('hotelstay');
            $('.minimum-stay').hide();
        }
        $('.choose-your-stay').addClass('staySelected');
        $('#datepicker .ui-datepicker-today').click();
    });

    $('#book-now-btn-sub').click(function() {
        if (dataList == '') {
            $('.error-placement').show();
            return false;
        } else {

        }
    });

    $(".checkin-wrapper").click(function() {
        $('#to').hide();
        $(".checkout-wrapper").removeClass('active');
        $(this).addClass('active');
        $(this).addClass('selected');
        $('#datepicker').fadeIn();
    });
    $(".checkout-wrapper").click(function() {
        $('#datepicker').hide();
        $(".checkin-wrapper").removeClass('active');
        $(this).addClass('active');
        $(this).addClass('selected');
        $('#to').fadeIn();
    });

    var windowWidth = $(window).width();
    if (windowWidth < 767) {
        var numberMonths = 1;
    } else {
        var numberMonths = 2;
    }
    var d = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    today = monthNames[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear();
    var dateFormat = "mm/dd/yy",
        from = $("#datepicker")
        .datepicker({
            defaultDate: "0",
            minDate: 0,
            altField: "#alternate",
            altFormat: "DD,d,MM,yy",
            numberOfMonths: numberMonths
        })
        .on("change", function() {
            getcheckInDate();
            var from = getDate(this);
            var date_diff = Math.ceil((from.getTime() - Date.parse(today)) / 86400000);
            if ($('.choose-your-stay').hasClass('residencesstay')) {
                var minDate_d = date_diff + 7 + 'd';
            } else {
                var minDate_d = date_diff + 1 + 'd';
            }
            to.datepicker("option", "minDate", minDate_d);
            if ($('.choose-your-stay').hasClass('staySelected')) {
                setTimeout(function() {
                    $('.checkin-wrapper').click();
                    $('.choose-your-stay').removeClass('staySelected');
                    $('.checkout-wrapper').addClass('selected');
                    $(".hasDatepicker#to .ui-state-active").click();
                    $(".hasDatepicker#to tr a.ui-state-default").eq(0).click();
                }, 100);
            } else {
                setTimeout(function() {
                    $('.checkout-wrapper').click();
                    $(".hasDatepicker#to .ui-state-active").click();
                    $('.checkout-wrapper').removeClass('selected');
                    $('.checkout-wrapper').addClass('active');
                }, 100);
            }
        }),
        to = $("#to").datepicker({
            defaultDate: "+1d",
            altField: "#alternateto",
            altFormat: "DD,d,MM,yy",
            numberOfMonths: numberMonths
        })
        .on("change", function() {
            getcheckOutDate();
            from.datepicker("option", "maxDate", getDate(this) + 1);
            $('.hasDatepicker').hide();
            $(".checkout-wrapper").removeClass('active');
            $(".checkout-wrapper").addClass('selected');
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }
        return date;
    }

    getcheckInDate();
    getcheckOutDate();

    function getcheckInDate() {
        var checkInDate = $("#alternate").val().split(",");
        $('.checkin-wrapper .checkin-checkout-date').text(checkInDate[1]);
        $('.checkin-wrapper .month-and-year').text(checkInDate[2] + " " + checkInDate[3]);
        $('.checkin-wrapper .checkin-checkout-day').text(checkInDate[0]);
    }

    function getcheckOutDate() {
        var checkOutDate = $("#alternateto").val().split(",");
        $('.checkout-wrapper .checkin-checkout-date').text(checkOutDate[1]);
        $('.checkout-wrapper .month-and-year').text(checkOutDate[2] + " " + checkOutDate[3]);
        $('.checkout-wrapper .checkin-checkout-day').text(checkOutDate[0]);
    }

    /*
        $( "#from, #to" ).datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            onSelect: function( selectedDate ) {
                if(this.id == 'from'){
                var dateMin = $('#from').datepicker("getDate");
                var rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 1); 
                var rMax = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 31); 
                $('#to').datepicker("option","minDate",rMin);
                $('#to').datepicker("option","maxDate",rMax);                    
                }
                
            }
        });
    */


    // Sticky Second menu

    var stickyHeaderTop = $('#stickyheader').offset().top;
    $(window).scroll(function() {
        // alert('s');
        if ($(window).scrollTop() > stickyHeaderTop) {
            $('#stickyheader').css({ position: 'fixed', top: '0px', background: '#fff', width: '80%', margin: '0 auto', right: '10%' });
            // $('#submenu-selec').css({position: 'fixed', top: '0px'});

            // $('#stickyheader ul li').css({position: 'fixed', top: '0px', background: 'none', width: '150px', display: 'inline-block', float: 'right'});
            $('#stickyalias').css('display', 'block');
        } else {
            $('#stickyheader').css({ position: 'static', top: '0px' });
            // $('#stickyalias').css('display', 'none');
        }
    });

});