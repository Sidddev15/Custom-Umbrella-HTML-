const umbrellaImage = document.querySelector('.umbrella-image');
const logoPreview = document.querySelector('#logo-preview');
const colorSwatches = document.querySelectorAll('.color-swatch');
const logoUpload = document.getElementById("logo-upload");
const uploadedLogo = document.querySelector(".uploaded-logo");

// Change umbrella color on color swatch click
colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        const color = swatch.style.backgroundColor;
        umbrellaImage.src = `Images/${color} umbrella.png`;
    });
});

// Preview uploaded logo on canvas
logoUpload.addEventListener("change", function() {
	const file = logoUpload.files[0];
	const reader = new FileReader();
	reader.onload = function() {
	  uploadedLogo.src = reader.result;
	}
	
	logoUpload.onload = () => {
		logoPreview.getContext('2d').clearRect(0, 0, logoPreview.width, logoPreview.height);
		logoPreview.getContext('2d').drawImage(logo, 0, 0, logoPreview.width, logoPreview.height);
	};

	reader.addEventListener("load", function() {
		logoPreview.src = reader.result;
		uploadedLogo.style.display = "block";
	});

	if (file) {
		reader.readAsDataURL(file);
	}
  });




