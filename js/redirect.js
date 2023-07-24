function redirectBasedOnOS() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if (/android/i.test(userAgent)) {
			// Redirect per Android
			window.location.href = 'https://play.google.com/store/apps/details?id=com.sisalute.bper';
		} else if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
			// Redirect per iOS
			window.location.href = 'https://apps.apple.com/us/app/sisalute-up-per-bper-banca/id6450174302';
		}
	}

// Richiama la funzione al caricamento della pagina
window.onload = redirectBasedOnOS;