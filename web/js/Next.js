function disp(pdf_file){

	// 「OK」時の処理開始 ＋ 確認ダイアログの表示
	if(window.confirm('よろしいですか？')){
		window.open(pdf_file, '_blank')
//		location.href = pdf_file; // pdf へジャンプ
	}
	// 「OK」時の処理終了

	// 「キャンセル」時の処理開始
	else{

		window.alert('キャンセルされました'); // 警告ダイアログを表示

	}
	// 「キャンセル」時の処理終了

}