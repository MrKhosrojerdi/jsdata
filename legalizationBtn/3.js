$.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

$('#btnadd11').click(function () {
	var personCount = 3;
	var set_new_consular_id = '3';
	
        if (2 > 1) {
            var getcalendaractive = '1';
            var set_new_exit_office_id = $('.office').val();
            var set_new_service_type_id = $('.officetype').val();
            var set_new_calendar_type = $('.setnewcalendarstatus').val();


            if (($('.setnewcalendarstatus').val() == "1" || $('.setnewcalendarstatus').val() == "2" || $('.setnewcalendarstatus').val() == "3") && (getcalendaractive == "1")) {
                $.ajax({
                                url: "https://ir-appointment.visametric.com/ir/appointment-form/personal/getdate",
                                type: "POST",
                                async: false,
                                data: {
                                    consularid: set_new_consular_id,
                                    exitid: set_new_exit_office_id,
                                    servicetypeid: set_new_service_type_id,
                                    calendarType: set_new_calendar_type,
                                    totalperson: personCount
                                },
                                success: function (getvaliddates) {

                                    var enableDays = getvaliddates;
                                    $("#datepicker").datepicker({
                                        maxViewMode: 2,
                                        weekStart: 1,
                                        beforeShowDay: function (date) {
                                            if (enableDays.indexOf(formatDate(date)) < 0)
                                                return {
                                                    enabled: false
                                                }
                                            else
                                                return {
                                                    enabled: true
                                                }
                                        },
                                        startDate: "+1d",
                                        endDate: "+2m",
                                        todayHighlight: true,
                                        format: "dd-mm-yyyy",
                                        clearBtn: true,
                                        autoclose: true
                                    });

                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    console.log(textStatus, errorThrown);
                                }
                            });

                        }
}

});