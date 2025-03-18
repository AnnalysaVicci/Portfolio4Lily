function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}
document.getElementById('home').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('about').addEventListener('click', function() {
    window.location.href = 'about.html';
});

document.getElementById('curation').addEventListener('click', function() {
    window.location.href = 'curation.html';
});

document.getElementById('design').addEventListener('click', function() {
    window.location.href = 'design.html';
});