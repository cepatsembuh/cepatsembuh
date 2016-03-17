/*
* Cepat Sembuh v1.0
* Copyright 2016 Cepat Sembuh
*/

// Puskesmas form action
function puskesmas() {
	// Input value
	var nama_puskesmas = $('#nama_puskesmas').val();
	var nik_puskesmas = $('#nik_puskesmas').val();
	var madya_puskesmas = $('#madya_puskesmas').val();
	var input_puskesmas = $('.input-puskesmas').val();

	if (input_puskesmas == '') {
		// Validate name input
		alert('Input is not filled');
	} else {
			// Get madya dropdown value
			switch (madya_puskesmas) {
				/* case "jakut":
					window.location.href = 'available.html';
					break;
				case "jakbar":
					window.location.href = 'available.html';
					break;
				case "jakpus":
					window.location.href = 'available.html';
					break;
				case "jaktim":
					window.location.href = 'available.html';
					break;
				case "jaksel":
					window.location.href = 'available.html';
					break; */					
				default:
					window.location.href = 'available.html';
					break;
		 }
	}

	// Log input value for testing
	console.log('Nama: ' + nama_puskesmas);
	console.log('NIK: ' + nik_puskesmas);
	console.log('Lokasi: ' + madya_puskesmas);
// Push input value to firebase
};

// RSUD form action
function rsud() {
	// Input value
	var rujuk_rsud = $('#rujuk_rsud').val();
	var nik_rsud = $('#nik_rsud').val();
	var madya_rsud = $('#madya_rsud').val();
	var input_rsud = $('.input-rsud').val();

	if (input_rsud == '') {
		// Validate rujuk rsud input
		alert('Input is not filled');
	} else {
			// Get madya dropdown value
			switch (madya_rsud) {
				/* case "jakut":
					window.location.href = 'available.html';
					break;
				case "jakbar":
					window.location.href = 'available.html';
					break;
				case "jakpus":
					window.location.href = 'available.html';
					break;
				case "jaktim":
					window.location.href = 'available.html';
					break;
				case "jaksel":
					window.location.href = 'available.html';
					break; */
				default:
					window.location.href = 'available.html';
					break;
		 }
	}

	// Log input value for testing
	console.log('No Rujuk: ' + rujuk_rsud);
	console.log('NIK: ' + nik_rsud);
	console.log('Lokasi: ' + madya_rsud);
};

// RSUK form action
function rsuk() {
	// Input value
	var rujuk_rsuk = $('#rujuk_rsuk').val();
	var nik_rsuk = $('#nik_rsuk').val();
	var madya_rsuk = $('#madya_rsuk').val();
	var input_rsuk = $('.input-rsuk').val();

	if (input_rsuk == '') {
		// Validate rujuk rsuk input
		alert('Input is not filled');
	} else {
				// Get madya dropdown value
				switch (madya_rsuk) {
					/* case "jakut":
						window.location.href = 'available.html';
						break;
					case "jakbar":
						window.location.href = 'available.html';
						break;
					case "jakpus":
						window.location.href = 'available.html';
					 	break;
					case "jaktim":
						window.location.href = 'available.html';
						break;
					case "jaksel":
						window.location.href = 'available.html';
						break; */
					default:
						window.location.href = 'available.html';
						break;
			 }
	}

	// Log input value for testing
	console.log('No Rujuk: ' + rujuk_rsuk);
	console.log('NIK: ' + nik_rsuk);
	console.log('Lokasi: ' + madya_rsuk);
};

$('#pesan').on('click', function(){
	window.location.href = 'faskes.html'
});
