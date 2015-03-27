// JavaScript scheduleIndex.js
	
	function scheduleIndex(){
	
		var firstDate = '1501';
		//この上の行に最初に表示させたい年月を入力します。
		//(例)「２０１３年１月」なら【1301】となり、「var firstDate = '1301';」を記述してください。
		
		var lastDate = '1512';
		//この上の行に表示させたい期間の最後の年月を入力します。
		//(例)「２０１4年2月」なら【1402】となり、「var lastDate = '1402';」を記述してください。
		
		
		var nowDate = new Date();
		var nowYear = nowDate.getFullYear();
		nowYear = String(nowYear).substring(2,4);
		var nowMonth = nowDate.getMonth()+1;
		var nowMonthInt =　parseInt(nowMonth);
		if(nowMonthInt<10){
			nowMonth = "0"+String(nowMonthInt);
		}
		var nowYYMM = nowYear + nowMonth;
		
		/* 現在表示しているページのYYMMを取得 */
		var file_url = location.href;
		file_url = file_url.substring(file_url.lastIndexOf("e")+1,file_url.length);
		file_url = file_url.substring(0,4);
		
		/* 入力した最初のYYMMYと最後のYMMからボタンを生成 */
		var firstYear = firstDate.substring(0,2);
		var firstYearInt =　parseInt(firstYear);
		var firstMonth = firstDate.substring(2,4);
		var firstMonthInt =　parseInt(firstMonth);
		
		var lastYear = lastDate.substring(0,2);
		var lastYearInt =　parseInt(lastYear);
		var lastMonth = lastDate.substring(2,4);
		var lastMonthInt =　parseInt(lastMonth);
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
			scheduleHTML = '<table id="scheduleIndex"><tr><th colspan="4">20' + firstYear +'年</th></tr><tr>';
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
					scheduleHTML += '</tr><tr><th colspan="4">20' + firstYearInt +'年</th></tr><tr>';
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
			scheduleHTML += '<p id="scheduleHoliday">※ 本所の休業日は、土日、祝日と年首3日、年末1日です。</p>';
			//<div id="scheduleIndex">の中身はここまで
			document.getElementById('scheduleIndex').innerHTML = scheduleHTML;
		}
	}
	
	function onMonthName(firstMonthInt){
		var monthName =　'';
		if(firstMonthInt == 1){
			monthName = "1月 January";
		}else if(firstMonthInt == 2){
			monthName = "2月 February";
		}else if(firstMonthInt == 3){
			monthName = "3月 March";
		}else if(firstMonthInt == 4){
			monthName = "4月 April";
		}else if(firstMonthInt == 5){
			monthName = "5月 May";
		}else if(firstMonthInt == 6){
			monthName = "6月 June";
		}else if(firstMonthInt == 7){
			monthName = "7月 July";
		}else if(firstMonthInt == 8){
			monthName = "8月 August";
		}else if(firstMonthInt == 9){
			monthName = "9月 September";
		}else if(firstMonthInt == 10){
			monthName = "10月 October";
		}else if(firstMonthInt == 11){
			monthName = "11月 November";
		}else if(firstMonthInt == 12){
			monthName = "12月 December";
		}
		return monthName;
	}