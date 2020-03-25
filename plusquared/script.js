

//returns a random integer	
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

//returns the current date and time
function getTime(){
	var today = new Date();
	var date=
{
		year:today.getFullYear(),
		month:today.getMonth(),
		day:today.getDate(),
		hour:today.getHours(),
		minute:today.getMinutes(),
		second:today.getSeconds()
	};
	return date;
}


//returns the number of seconds between two dates in seconds
function timeSince(reference_time, current_time) {
	var time_difference= {
		year:current_time.year-reference_time.year,
		month:current_time.month-reference_time.month,
		day:current_time.day-reference_time.day,
		hour:current_time.hour-reference_time.hour,
		minute:current_time.minute-reference_time.minute,
		second:current_time.second-reference_time.second
	}
	if (time_difference.month<0) {time_difference.month+=12;}
	if (time_difference.day<0) {time_difference.day+=30;}
	if (time_difference.hour<0) {time_difference.hour+=24;}
	if (time_difference.minute<0) {time_difference.minute+=60;}
	if (time_difference.second<0) {time_difference.second+=50;}
	var time_difference_sec=time_difference.year*365*24*60*60+time_difference.month*30*24*60*60+time_difference.day*24*60*60+time_difference.hour*60*60+time_difference.minute*60+time_difference.second;
	return time_difference_sec;
}

//sets the initial number for counter
function setInitialCount(reference_num, increment_amount, time_since) {
	return reference_num+(increment_amount*time_since);
}	

function numToString(num) {
	var str_num; 
	if (num<1000000){ //if less than a million, no units
		str_num=String(num);
		return str_num;
	}
	else if (num>=1000000){ 
		var arr_num=Array.from(String(num), Number);
		var before;
		var after;
		var units;
		
		if (num<1000000000){ //assigns unit of million
			before=arr_num.slice(0,arr_num.length-6);
			after=arr_num.slice(arr_num.length-6,arr_num.length);
			units=' million';
		}
		else if (num>=1000000000&&num<1000000000000){ //assigns unit of billion
			before=arr_num.slice(0,arr_num.length-9);
			after=arr_num.slice(arr_num.length-9,arr_num.length);
			units=' billion';
		}
		else if (num>=1000000000){ //assigns unit of trillion
			before=arr_num.slice(0,arr_num.length-12);
			after=arr_num.slice(arr_num.length-12,arr_num.length);
			units=' trillion';
		}
	}
	str_num=before.join('')+'.'+after.join('')+units;
	return str_num;
}

