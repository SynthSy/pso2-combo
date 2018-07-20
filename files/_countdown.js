/* (c)SEGA */
$(function(){
/*--------------------------------
 カウントダウン countdown
--------------------------------*/
// サーバー時間に合わせる場合はstime.phpが必要

/* ---------------- settings ---------------- */
	var cdwn = {
		element : $('#countdown')	// 表示要素
	};
	cdwn.targetTime = new Date(2018, 6, 24, 12, 0, 0);	// 目標日時（月は0～11）

/* ---------------- codes ---------------- */

	var doubleNum = function(num) {
		num += "";
		if (num.length === 1) {
		  num = "0" + num;
		}
		return num;     
	};
	
	cdwn.targetYear = cdwn.targetTime.getFullYear();
	cdwn.targetMonth = cdwn.targetTime.getMonth() + 1;
	cdwn.targetDate = cdwn.targetTime.getDate();
	cdwn.targetHour = cdwn.targetTime.getHours();

	cdwn.localTime = new Date();
	cdwn.diffTime = 0;
	if(typeof sTime !== 'undefined'){
		cdwn.diffTime = cdwn.localTime.getTime() - sTime * 1000;
	}

	function countdown(){
		cdwn.localTime = new Date();

		cdwn.countTime = cdwn.targetTime.getTime() - cdwn.localTime.getTime() + cdwn.diffTime;

		if(cdwn.countTime < 0){return;}
		cdwn.countDate = doubleNum(Math.floor(cdwn.countTime / 86400000));
		cdwn.countTime -= cdwn.countDate * 86400000;
		cdwn.countHour = doubleNum(Math.floor(cdwn.countTime / 3600000));
		cdwn.countTime -= cdwn.countHour * 3600000;
		cdwn.countMin = doubleNum(Math.floor(cdwn.countTime / 60000));
		cdwn.countTime -= cdwn.countMin * 60000;
		cdwn.countSec = doubleNum(Math.floor(cdwn.countTime / 1000));
		cdwn.countText = '<li class="days">' +cdwn.countDate + '<span>DAYS</span></li><li class="hours">' +
						cdwn.countHour + '<span>HOURS</span></li><li class="minutes">' +
						cdwn.countMin + '<span>MINUTES</span></li><li class="seconds">' +
						cdwn.countSec + '<span>SECONDS</span></li>';

		if(typeof sTime !== 'undefined'){
			cdwn.countText += '';
		}else{
			cdwn.countText += '';
		}

		cdwn.element.html('<ul>' + cdwn.countText + '</ul>');
	}

	setInterval(function(){countdown()}, 1000);

/* end
 カウントダウン countdown
--------------------------------*/

	$('#visual').css('background-image', 'url('+bgimg+')');

	if(typeof rdt !== 'undefined'){
		location.href = rdt;
	}

});
