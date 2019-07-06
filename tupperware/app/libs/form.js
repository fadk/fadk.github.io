var err = 0;

var inputboxNodeList = document.querySelectorAll('.inputbox__cycle');
	for (var i = 0; i < inputboxNodeList.length; i++) {
		inputboxNodeList[i].addEventListener('input', function() {
		var value = this.value; 
		var trimmedValue = value.trim();
		var errorMessage = this.parentNode.querySelector('.error__message'); 

		    if (this.type == 'text') {
		        if (trimmedValue.search(/^[a-zа-я \s ]*$/i) || trimmedValue == ''){
					err = 1;
					errorMessage.classList.remove("error__message_hide"); 
				} 
				else {
					err = 0;
					errorMessage.classList.add("error__message_hide"); 
				}
		    }
/*		  	else if (this.type == 'tel') {
		        if (trimmedValue.search(/^[0-9 \s ]*$/) || trimmedValue == ''){
					err = 1;
					errorMessage.classList.remove("error__message_hide"); 
				} 
				else {
					err = 0;
					errorMessage.classList.add("error__message_hide"); 
				}
		    }*/
		    else if (this.type == 'email') {
		        if (trimmedValue.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) || trimmedValue == ''){
					err = 1;
					errorMessage.classList.remove("error__message_hide"); 
				} 
				else {
					err = 0;
					errorMessage.classList.add("error__message_hide"); 
				}
		    }
		    else if (this.type == 'url') {
		        if (trimmedValue.search(/^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?$/) || trimmedValue == ''){
					err = 1;
					errorMessage.classList.remove("error__message_hide"); 
				} 
				else {
					err = 0;
					errorMessage.classList.add("error__message_hide"); 
				}
		    }
		});

};

var sendForm = document.querySelector('.application__form');
sendForm.addEventListener('submit', function(event){
	event.preventDefault();
		var form=this,
		elements=form.elements,
		element_val,
		serialize='',
		request = new XMLHttpRequest(),
		link=form.action;

	if (err == 0) {
		for (var j = 0; elements[j]; j++) {
			element_val=elements[j].value;
			serialize+='&'+elements[j].name+'='+element_val;
			//проверка на пустую строку
		}
		request.open('POST', "form.php", true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) { 
								form.classList.add('form_success');
								//goals_form(form.id);
							} 
			else { alert('Возникла ошибка! Попробуйте позже.');	}
		};
	//else if (contactValue.value.trim()=='' && siteValue.value.trim()=='') {
	//alert('выбери')
	//};
		request.onerror = function() { alert('Возникла ошибка! Попробуйте позже.'); };

		request.send(serialize);
	}
})
