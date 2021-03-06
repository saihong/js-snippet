	var go = (function() {
	    var form = document.createElement('form');
	    form.setAttribute('method', 'post');
	    form.setAttribute('target', 'ajaxIfr');
	    form.setAttribute('action', '/erp/ue/jsp/uejjwfchart.jsp');

	    var ifr = document.createElement('iframe');
	    ifr.setAttribute('name', 'ajaxIfr');
	    document.body.appendChild(ifr);

	    function fmt(date) {
	        if (date < 10) {
	            return '0' + date;
	        }
	        return date + "";
	    }

	    function postData() {
	        var data = {
	            submit: '%BDT%A9w',
	            type: 'ROOM',
	            date: '',
	            alreadFillDesc: 'ok',
	            doAction: 'ok',
	            itemID: '18F-0001',
	            itemGroupID: 'icsc',
	            reserveFrom: '',
	            reserveTo: '',
	            descColumn1: '1060601_新人集中訓練',
	            descColumn2: '4', // 人數
	            descColumn3: '35617'
	        }

	        var reserveFrom, reserveTo, reserveDate;

	        for (var field in data) {
	            var input = document.createElement('input');
	            input.setAttribute('name', field);
	            input.setAttribute('value', data[field]);
	            form.appendChild(input);
	        }
	        var submitBtn = document.createElement('input') ;
	        submitBtn.setAttribute('type','submit');
	        form.appendChild(submitBtn);

	        document.body.appendChild(form);

	        var index = 1;

	        var submitForm = function submitForm() {
	            var date = new Date(2017, 8, index);
	            if (date.getDay() > 0 && date.getDay() < 6) {
	                var reserveDate = (date.getFullYear() - 1911) + fmt(date.getMonth() + 1) + fmt(date.getDate());
	                $('input[name="reserveFrom"]').val(reserveDate + "0830");
	                $('input[name="reserveTo"]').val(reserveDate + "1800");
	                $('input[name="date"]').val(reserveDate);
	                console.log('submit.....'+reserveDate) ;
	                $(submitBtn).click() ;
	                console.log('submit finished !') ;
	            }
	            if (index++ < 31) {
	                setTimeout(submitForm, 300);
	            }
	        }
	        submitForm() ;
	    }
	    postData();
	});
	setTimeout(go, 1000);
