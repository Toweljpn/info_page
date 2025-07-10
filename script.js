// script.js

document.addEventListener('DOMContentLoaded', () => {
    // ページ内のすべてのvideo要素を取得
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        if (video) {
            // 再生速度を1.5倍に設定
            video.playbackRate = 1.5;

            // Optional: Play video if it was paused for some reason (e.g., browser tab change)
            // This might not be strictly necessary due to autoplay attribute, but can be a fallback.
            video.play().catch(error => {
                console.log('Video autoplay prevented:', error);
                // User might need to interact to play if autoplay is blocked by browser policies
            });
        }
    });
});
