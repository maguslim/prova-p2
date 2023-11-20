document.querySelector('[data-form]').addEventListener('submit', function (event) {
    event.preventDefault();
    showToast();
    this.reset();
});

function showToast() {
    var toast = document.getElementById('toast');
    toast.style.display = 'block';

    setTimeout(function () {
        toast.style.display = 'none';
    }, 3000); 
}