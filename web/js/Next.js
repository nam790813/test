function disp(pdf_file){

	// �uOK�v���̏����J�n �{ �m�F�_�C�A���O�̕\��
	if(window.confirm('��낵���ł����H')){
		window.open(pdf_file, '_blank')
//		location.href = pdf_file; // pdf �փW�����v
	}
	// �uOK�v���̏����I��

	// �u�L�����Z���v���̏����J�n
	else{

		window.alert('�L�����Z������܂���'); // �x���_�C�A���O��\��

	}
	// �u�L�����Z���v���̏����I��

}