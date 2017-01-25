"use strict";

$(document).ready(function () {
    /*-----------------------------------------------------
        Submit property steps switch
        - used in last form tab of 'submit-property.html'
    ------------------------------------------------------*/
    $('body').on('shown.bs.tab', '.submit-property__button', function () {
        var currentTab = $(this).attr('href');

        $('.submit-property__steps > li').removeClass('active');
        $('.submit-property__steps > li > a[href='+currentTab+']').parent().addClass('active');
    })


    /*-----------------------------------------------------
         Calendar and Calendar Widget
         - Used in dashboard index and calendar pages
    ------------------------------------------------------*/
    if($('#calendar-widget')[0]) {
        $('.calendar-widget__body').fullCalendar({
            contentHeight: 'auto',
            theme: false,
            header: {
                right: 'next',
                center: 'title, ',
                left: 'prev'
            },
            buttonIcons: {
                prev: 'left',
                next: 'right',
            },
            defaultDate: '2016-08-12',
            editable: true,
            events: [
                {
                    title: 'Dolor Pellentesque',
                    start: '2016-08-01',
                    className: 'fc-event--cyan'
                },
                {
                    title: 'Purus Nibh',
                    start: '2016-08-07',
                    className: 'fc-event--amber'
                },
                {
                    title: 'Amet Condimentum',
                    start: '2016-08-09',
                    className: 'fc-event--green'
                },
                {
                    title: 'Tellus',
                    start: '2016-08-12',
                    className: 'fc-event--blue'
                },
                {
                    title: 'Vestibulum',
                    start: '2016-08-18',
                    className: 'fc-event--cyan'
                },
                {
                    title: 'Ipsum',
                    start: '2016-08-24',
                    className: 'fc-event--teal'
                },
                {
                    title: 'Fringilla Sit',
                    start: '2016-08-27',
                    className: 'fc-event--blue'
                },
                {
                    title: 'Amet Pharetra',
                    url: 'http://google.com/',
                    start: '2016-08-30',
                    className: 'mdc-bg-amber-500'
                }
            ]
        });

        //Display Current Date as Calendar widget header
        var mYear = moment().format('YYYY');
        var mDay = moment().format('dddd, MMM D');
        $('.calendar-widget__year').html(mYear);
        $('.calendar-widget__day').html(mDay);
    }
});
