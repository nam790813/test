// JavaScript scheduleIndex.js
	
	function scheduleIndex(){
	
		var firstDate = '1501';
		//���̏�̍s�ɍŏ��ɕ\�����������N������͂��܂��B
		//(��)�u�Q�O�P�R�N�P���v�Ȃ�y1301�z�ƂȂ�A�uvar firstDate = '1301';�v���L�q���Ă��������B
		
		var lastDate = '1512';
		//���̏�̍s�ɕ\�������������Ԃ̍Ō�̔N������͂��܂��B
		//(��)�u�Q�O�P4�N2���v�Ȃ�y1402�z�ƂȂ�A�uvar lastDate = '1402';�v���L�q���Ă��������B
		
		
		var nowDate = new Date();
		var nowYear = nowDate.getFullYear();
		nowYear = String(nowYear).substring(2,4);
		var nowMonth = nowDate.getMonth()+1;
		var nowMonthInt =�@parseInt(nowMonth);
		if(nowMonthInt<10){
			nowMonth = "0"+String(nowMonthInt);
		}
		var nowYYMM = nowYear + nowMonth;
		
		/* ���ݕ\�����Ă���y�[�W��YYMM���擾 */
		var file_url = location.href;
		file_url = file_url.substring(file_url.lastIndexOf("e")+1,file_url.length);
		file_url = file_url.substring(0,4);
		
		/* ���͂����ŏ���YYMMY�ƍŌ��YMM����{�^���𐶐� */
		var firstYear = firstDate.substring(0,2);
		var firstYearInt =�@parseInt(firstYear);
		var firstMonth = firstDate.substring(2,4);
		var firstMonthInt =�@parseInt(firstMonth);
		
		var lastYear = lastDate.substring(0,2);
		var lastYearInt =�@parseInt(lastYear);
		var lastMonth = lastDate.substring(2,4);
		var lastMonthInt =�@parseInt(lastMonth);
		var limitMonthInt = lastMonthInt+1;
		if(limitMonthInt<10){
			var limitMonth = "0"+String(limitMonthInt);
		}else{
			var limitMonth = String(limitMonthInt);
		}
		var limit = lastYear + limitMonth;
		
		var nowPage = location.href;
		var npl = nowPage.length;
		nowPage = nowPage.substring((npl - 19),(npl - 5));
		var scheduleHTML = '';
		if(nowPage == 'schedule_index'){
			location.href = "./schedule" + nowYYMM + ".html";
		}else{
			var monthName ='';
			scheduleHTML = '<table id="scheduleIndex"><tr><th colspan="4">20' + firstYear +'�N</th></tr><tr>';
			var trCount = 1;
			for(i=1; i < 30; i++){
				if(firstMonthInt<13){
					var yymmID = firstYearInt +""+ firstMonth;
					if(yymmID == file_url){
						scheduleHTML += '<td><a id="selected">'+ onMonthName(firstMonthInt) + '</td>';
					}else{
						scheduleHTML += '<td><a href="schedule'+firstYearInt+ '' +firstMonth+'.html">'+ onMonthName(firstMonthInt) + '</a></td>';
					}
					firstMonthInt++;
					if(firstMonthInt<10){
						firstMonth = "0"+String(firstMonthInt);
					}else{
						firstMonth = String(firstMonthInt);
					}					
				}else{
					firstMonth='01';
					firstMonthInt=1;
					firstYearInt++;
					scheduleHTML += '</tr><tr><th colspan="4">20' + firstYearInt +'�N</th></tr><tr>';
					trCount = 0;
				}
				if( trCount % 4 == 0 ){
					scheduleHTML += '</tr>';
					scheduleHTML += '<tr>';
				}
				trCount++;
				var check = String(firstYearInt) + firstMonth;
				if(check >= limit){
					break;
				}
			}
			
			scheduleHTML += '</table>';
			scheduleHTML += '<p id="scheduleHoliday">�� �{���̋x�Ɠ��́A�y���A�j���ƔN��3���A�N��1���ł��B</p>';
			//<div id="scheduleIndex">�̒��g�͂����܂�
			document.getElementById('scheduleIndex').innerHTML = scheduleHTML;
		}
	}
	
	function onMonthName(firstMonthInt){
		var monthName =�@'';
		if(firstMonthInt == 1){
			monthName = "1�� January";
		}else if(firstMonthInt == 2){
			monthName = "2�� February";
		}else if(firstMonthInt == 3){
			monthName = "3�� March";
		}else if(firstMonthInt == 4){
			monthName = "4�� April";
		}else if(firstMonthInt == 5){
			monthName = "5�� May";
		}else if(firstMonthInt == 6){
			monthName = "6�� June";
		}else if(firstMonthInt == 7){
			monthName = "7�� July";
		}else if(firstMonthInt == 8){
			monthName = "8�� August";
		}else if(firstMonthInt == 9){
			monthName = "9�� September";
		}else if(firstMonthInt == 10){
			monthName = "10�� October";
		}else if(firstMonthInt == 11){
			monthName = "11�� November";
		}else if(firstMonthInt == 12){
			monthName = "12�� December";
		}
		return monthName;
	}