
        const swiper = new Swiper('.vertical-swiper', {
            direction: 'vertical',
            slidesPerView: 6,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
        const thumbnails = document.querySelectorAll('.thumbnail-slide');
        const mainImage = document.getElementById('mainImage');
        const iframe = document.getElementById('vimeo_product');
        const dots = document.querySelectorAll('.swiper-pagination-bullet');
        let currentIndex = 0;
        function updateImage(index) {
            if (index < 0) index = thumbnails.length - 1;
            if (index >= thumbnails.length) index = 0;
            currentIndex = index;
            thumbnails.forEach(t => t.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            thumbnails[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            if (currentIndex === 6) {
                mainImage.style.display = 'none';
                iframe.style.display = 'block';
                iframe.classList.remove('d-none');
            } else {
                mainImage.style.display = 'block';
                iframe.style.display = 'none';
                iframe.classList.add('d-none');
                mainImage.src = `assests/images/image${currentIndex + 1}.webp`;
            }
            swiper.slideTo(Math.max(0, currentIndex - 2));
        }
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                updateImage(index);
            });
        });
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateImage(index);
            });
        });
        document.querySelector('.nav-custom.prev').addEventListener('click', () => {
            updateImage(currentIndex - 1);
        });
        document.querySelector('.nav-custom.next').addEventListener('click', () => {
            updateImage(currentIndex + 1);
        });
        document.querySelector('.side-nav.prev').addEventListener('click', () => {
            updateImage(currentIndex - 1);
        });
        document.querySelector('.side-nav.next').addEventListener('click', () => {
            updateImage(currentIndex + 1);
        });
        updateImage(0);

        document.addEventListener('DOMContentLoaded', function () {
            const oneTimeBtn = document.getElementById('one-time-tab');
            const subscribeBtn = document.getElementById('subscribe-tab');
            function setActive(btn) {
                btn.classList.add('text-white', 'border-0');
                btn.style.backgroundColor = '#0B4F9A';
            }
            function setInactive(btn) {
                btn.classList.remove('text-white', 'border-0');
                btn.style.backgroundColor = '#fff';
                btn.style.border = '2px solid #0B4F9A';
            }
            oneTimeBtn.addEventListener('shown.bs.tab', function () {
                setActive(oneTimeBtn);
                setInactive(subscribeBtn);
            });
            subscribeBtn.addEventListener('shown.bs.tab', function () {
                setActive(subscribeBtn);
                setInactive(oneTimeBtn);
            });
        });

        document.getElementById('subscribe-help').addEventListener('click', function () {
            document.getElementById('subscribe-tooltip').classList.toggle('d-none');
        });
        document.addEventListener("DOMContentLoaded", function () {
            const container = document.querySelector(".community-photos");
            const leftBtn = document.querySelector(".left-arrow");
            const rightBtn = document.querySelector(".right-arrow");

            let scrollX = 0;
            const step = 240;

            rightBtn.addEventListener("click", () => {
                const maxScroll = container.scrollWidth - container.clientWidth;
                scrollX = Math.min(scrollX + step, maxScroll);
                container.style.transform = `translateX(-${scrollX}px)`;
            });

            leftBtn.addEventListener("click", () => {
                scrollX = Math.max(scrollX - step, 0);
                container.style.transform = `translateX(-${scrollX}px)`;
            });
        });
        document.addEventListener('DOMContentLoaded', () => {
            const mainImage = document.getElementById('main-image');
            const videoContainer = document.getElementById('video-container');
            const mainVideo = document.getElementById('main-video');
            const watchVideoBtn = document.getElementById('watch-video-button');
            if (watchVideoBtn) {
                watchVideoBtn.addEventListener('click', function (e) {
                    e.preventDefault();
                    mainImage.parentElement.classList.add('d-none');
                    videoContainer.classList.remove('d-none');
                    mainVideo.currentTime = 0;
                    mainVideo.load();
                    mainVideo.play();
                    document.getElementById('media-display').scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                });
            }
        });
