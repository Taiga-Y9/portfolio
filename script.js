document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');  // メニューの表示/非表示を切り替える
        
        // 位置を動的に設定
        if (navMenu.classList.contains('active')) {
            navMenu.style.top = '70px';  // 表示する際の位置を設定
        } else {
            navMenu.style.top = '60px';  // 非表示の際の位置を設定（必要に応じて）
        }
    });
});