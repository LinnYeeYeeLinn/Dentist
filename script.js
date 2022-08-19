$(document).ready(function(){
    $('nav .aLink').click(function(){
        $('nav .aLink').removeClass('active');
        $(this).addClass('active');
        $('.navSide').addClass('hidden');
    })
})

document.querySelector('.openNav').addEventListener('click', () => {
    document.querySelector('.navSide').classList.replace('hidden','block');
})
document.querySelector('.closeNav').addEventListener('click', () => {
    document.querySelector('.navSide').classList.add('hidden', 'block');
})