document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');

    menuIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');  // メニューの表示/非表示を切り替える
        // アイコンを非表示にする処理を削除
    });
});