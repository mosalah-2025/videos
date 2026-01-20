كود الهيد

<style>
  h2.text-heading {
    color: #9c1549 !important;
  }
</style>


<style>
  .text-heading {
    color: #9c1549 !important;
  }
  .text-heading del {
    color: #9c1549 !important;
    opacity: 0.6; /* يفضل تبقي باهتة شوية زي الخصم */
  }
</style>





<style>
  /* خلفية الهيدر */
  header {
    background-color: #9d1449 !important;
  }

  /* لون الخط داخل الهيدر */
  header * {
    color: white !important;
  }

  /* تخصيص الأزرار */
  header a.btn,
  header button,
  header .btn {
    background-color: transparent !important;
    color: white !important;
    border: none !important;
  }

  /* تخصيص القوائم */
  header .dropdown-menu,
  header nav {
    background-color: #9d1449 !important;
    color: white !important;
  }

  /* تخصيص الأيقونات */
  header svg {
    color: white !important;
    fill: white !important;
    stroke: white !important;
  }

  /* عند التحويل Hover */
  header a:hover,
  header button:hover {
    color: #e0e0e0 !important;
  }

  /* الصور داخل الهيدر */
  header img {
    filter: none !important;
  }

  /* إزالة الظلال والحدود */
  header,
  header * {
    box-shadow: none !important;
    border: none !important;
  }
</style>

<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>تجربة القسم</title>
  <style>
    body {
      font-family: sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }

    #features-testimonials {
      background-color: #ffffff;
      padding: 40px 20px;
      text-align: center;
    }

    .feature-box {
      background-color: #11162e;
      color: white;
      padding: 20px;
      margin: 10px;
      border-radius: 12px;
      width: 250px;
    }

    .testimonial {
      background-color: #11162e;
      color: white;
      padding: 20px;
      margin: 10px;
      border-radius: 12px;
      min-width: 250px;
    }

    .slider {
      display: flex;
      overflow-x: auto;
    }

    .hide-button {
      margin: 20px auto;
      padding: 10px 20px;
      font-size: 18px;
      background-color: crimson;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      display: block;
    }
  </style>
</head>
<body>



<script>
  function toggleBlockById(blockId) {
    const block = document.querySelector(`#${blockId}`);
    if (!block) return;
    const isHome = location.pathname === "/" || location.pathname === "/index.html";
    block.style.display = isHome ? "block" : "none";
  }

  function initHideBlocks(blockIds = []) {
    let tryCount = 0;
    const tryInterval = setInterval(() => {
      const allExist = blockIds.every(id => document.querySelector(`#${id}`));
      if (allExist || tryCount > 100) {
        clearInterval(tryInterval);
        blockIds.forEach(toggleBlockById);
      }
      tryCount++;
    }, 50);

    const toggleAll = () => blockIds.forEach(toggleBlockById);
    const observer = new MutationObserver(toggleAll);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('popstate', toggleAll);
    window.addEventListener('pushstate', toggleAll);
    window.addEventListener('replacestate', toggleAll);

    let lastPath = location.pathname;
    setInterval(() => {
      if (location.pathname !== lastPath) {
        lastPath = location.pathname;
        toggleAll();
      }
    }, 200);
  }

  // استدعاء الدالة لكل البلوكات اللي عايزين نخفيها
  initHideBlocks(["customer-testimonials", "mobile-swiper-css","videoBannerBlock", "bannerBlock2"]);
</script>



<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "sx9mzvv2nv");
</script>





<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>شريط كوبون خصم</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    .coupon-bar {
      background-color: #9d1449;
      color: white;
      padding: 15px;
      text-align: center;
      font-size: 18px;
      width: 100%;
    }
    .coupon-btn {
      background-color: #fff;
      color: black;
      border: none;
      padding: 8px 16px;
      margin-right: 10px;
      font-size: 16px;
      border-radius: 5px;
      cursor: pointer;
    }
    .coupon-btn:hover {
      background-color: #9d1449;
    }
    .countdown {
      margin-top: 10px;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
    }
  </style>
</head>
<body>

  <!-- شريط الكوبون -->
  <div class="coupon-bar">
    احصلي على خصم 10% لما تشتري ب1000 او اكتر باستخدام الكوبون 
    <button class="coupon-btn" onclick="copyCoupon()">اضغط للنسخ الآن!</button>
    <div class="countdown" id="countdown"></div>
  </div>

  <!-- سكربت النسخ والمؤقت -->
  <script>
    function copyCoupon() {
      const coupon = "NEW10";
      navigator.clipboard.writeText(coupon).then(function() {
        alert("✅ تم نسخ الكوبون: " + coupon);
      }, function(err) {
        alert("حدث خطأ أثناء النسخ");
      });
    }

    // بدء مؤقت العد التنازلي لسبعة أيام
    const countdownElement = document.getElementById("countdown");
    const now = new Date().getTime();
    const countdownDate = now + 2 * 24 * 60 * 60 * 1000; // 7 أيام

    const timer = setInterval(function() {
      const currentTime = new Date().getTime();
      const distance = countdownDate - currentTime;

      if (distance <= 0) {
        clearInterval(timer);
        countdownElement.textContent = "انتهى العرض 🎉";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.textContent = `ينتهي الخصم خلال: ${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
    }, 1000);
  </script>

</body>
</html>



اسفل ال header
<!-- ===== بانر الفيديو (موبايل + كمبيوتر) ===== -->
<div id="videoBannerBlock">

  <section class="video-hero" id="videoHero">
    <!-- فيديو الكمبيوتر -->
    <video id="desktopVideo" autoplay muted loop playsinline preload="auto" poster="YOUR_POSTER_DESKTOP.jpg">
      <source src="https://template.canva.com/EAGORdtImys/1/document_1440w-qF2x90qApn8.mp4" type="video/mp4">
      متصفحك لا يدعم تشغيل الفيديو.
    </video>

    <!-- فيديو الموبايل -->
    <video id="mobileVideo" autoplay muted loop playsinline preload="auto" poster="YOUR_POSTER_MOBILE.jpg">
      <source src="https://template.canva.com/EAGVGHtuG30/1/document_810w-oOlP9VXHeH8.mp4" type="video/mp4">
      متصفحك لا يدعم تشغيل الفيديو.
    </video>
  </section>

  <style>
    .video-hero {
      position: relative;
      width: 100%;
      height: 85vh;
      min-height: 320px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: #000;
    }
    .video-hero video {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%, -50%);
      object-fit: cover;
    }

    /* الفيديو اللي للكمبيوتر */
    #desktopVideo { display: block; }
    #mobileVideo { display: none; }

    /* لما الشاشة تكون موبايل (تحت 700px) */
    @media (max-width: 700px) {
      #desktopVideo { display: none; }
      #mobileVideo { display: block; }

      /* تصغير حجم الفيديو للموبايل */
      .video-hero {
        height: 80vh; /* ارتفاع أصغر */
      }
    }

    .hero-text {
      position: relative;
      z-index: 3;
      color: #fff;
      text-align: center;
      margin-top: 14px;
    }
    .hero-title {
      font-size: clamp(1.3rem, 3vw, 2.4rem);
      font-weight: 900;
      margin-bottom: 6px;
    }
    .hero-sub {
      font-size: clamp(.9rem, 1.6vw, 1.05rem);
      opacity: .95;
    }
  </style>

</div>

<style>
  .site-cover {
    position: fixed;
    inset: 0;
    background: #fff;
    z-index: 999999;
  }
</style>

<div class="site-cover"></div>



اعلي ال footer
<!-- قسم آراء العملاء - منتجات تجميل -->
<div id="customer-testimonials" class="testimonial-slider-container">
  <h2 class="testimonial-title">آراء عميلاتنا الجميلات ❤️</h2>
  <div class="testimonial-slider" dir="rtl">

    <!-- رأي 1 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/4RtXQ5p/avatar1.png" alt="صورة العميلة" />
      <h3>سارة محمود</h3>
      <p>بجد المنتجات دي فرقت مع بشرتي جدًا،<br>نعومة ونضارة من أول استخدام 🌸</p>
    </div>

    <!-- رأي 2 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/YLkT9sf/avatar2.png" alt="صورة العميلة" />
      <h3>منة أحمد</h3>
      <p>الكريم خطير! ريحته تحفة<br>وبيرطب البشرة بطريقة فوق الخيال 😍</p>
    </div>

    <!-- رأي 3 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/xJf5Q3Q/avatar3.png" alt="صورة العميلة" />
      <h3>شيماء خالد</h3>
      <p>وصلتني الطلبية بسرعة<br>والباكدچ شكله شيك جدًا 👌✨</p>
    </div>

    <!-- رأي 4 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/fq0hVvQ/avatar4.png" alt="صورة العميلة" />
      <h3>داليا محمد</h3>
      <p>بصراحة أحلى منتجات جربتها،<br>خصوصًا السيروم للبشرة 💕</p>
    </div>

    <!-- رأي 5 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/6t6qGyz/avatar5.png" alt="صورة العميلة" />
      <h3>مريم سامي</h3>
      <p>التجربة كانت مميزة جدًا<br>وخدمة العملاء محترمة قوي 🌹</p>
    </div>

    <!-- رأي 6 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/D5H9H7v/avatar6.png" alt="صورة العميلة" />
      <h3>نورهان عبد العزيز</h3>
      <p>الغسول مناسب جدًا لبشرتي الحساسة<br>ومش بيسبب أي تهيج 💦</p>
    </div>

    <!-- رأي 7 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/QJr2j4p/avatar7.png" alt="صورة العميلة" />
      <h3>رحاب حسن</h3>
      <p>الزيوت الطبيعية ريحتها حلوة جدًا<br>وبجد بتدي لمعة للجسم ✨</p>
    </div>

    <!-- رأي 8 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/fXJ1ZkD/avatar8.png" alt="صورة العميلة" />
      <h3>ياسمين مصطفى</h3>
      <p>حبيت كل التفاصيل من التغليف<br>لحد جودة المنتج، شكراً ليكم 💖</p>
    </div>

    <!-- رأي 9 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/ZK6rH1k/avatar9.png" alt="صورة العميلة" />
      <h3>هالة إبراهيم</h3>
      <p>الماسك بيرطب البشرة وبيسيبها طرية<br>كأنها مخمل 💆‍♀️</p>
    </div>

    <!-- رأي 10 -->
    <div class="testimonial-card">
      <img src="https://i.ibb.co/7v6Jj6Z/avatar10.png" alt="صورة العميلة" />
      <h3>بسمة علي</h3>
      <p>أنا سعيدة جدًا إني عرفت المتجر ده،<br>هكرر التجربة تاني أكيد 🎀</p>
    </div>

  </div>
</div>

<style>
.testimonial-slider-container {
  max-width: 100%;
  background: #fdfdfd;
  padding: 40px 20px;
  text-align: center;
  font-family: 'Cairo', sans-serif;
}
.testimonial-title {
  font-size: 26px;
  color: #222;
  margin-bottom: 30px;
}
.testimonial-slider {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
}
.testimonial-slider::-webkit-scrollbar {
  display: none;
}
.testimonial-card {
  min-width: 250px;
  background-color: #9d1548;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 20px;
  scroll-snap-align: start;
  flex-shrink: 0;
  color: white;
  text-align: center;
}
.testimonial-card img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 2px solid #fff;
}
.testimonial-card h3 {
  font-size: 21px;
  color: #fff;
  margin: 10px 0 5px;
}
.testimonial-card p {
  font-size: 17px;
  color: #fff;
  line-height: 1.6;
  margin: 0;
}
</style>




اسفل ال footer
<style>
/* إخفاء أي فوترات تانية */
footer:not([style*="background-color: #9c1549"]) {
  display: none !important;
}

/* أيقونات السوشيال */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 30px auto;
  direction: ltr;
}

.social-icons img {
  width: 32px;
  height: 32
  px;
  border-radius: 6px;
}

/* شريط البحث + اللوجو */
.footer-search-container {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* لجعل العناصر تبدأ من الشمال */
  gap: 20px;
  margin: 10px auto 30px;
  max-width: 1200px;
  flex-wrap: wrap;
  direction: ltr;
}

.footer-logo {
  flex-shrink: 0;
}

.footer-logo img {
  max-height: 140px;
}

/* البحث */
.footer-search {
  display: flex;
}

.footer-search input[type="text"] {
  padding: 10px 12px;
  width: 300px;
  max-width: 80%;
  border: none;
  border-radius: 8px 0 0 8px;
  font-size: 14px;
  color: #000;
}

.footer-search button {
  padding: 10px 15px;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.3s;
}

.footer-search button:hover {
  background-color: #2563eb;
}

/* الأعمدة */
.footer-columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding: 20px 0;
  gap: 40px;
  color: white;
  font-size: 16px;
}

.footer-columns h3 {
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
  pointer-events: none; /* يمنع الضغط على العناوين */
}

.footer-columns ul {
  list-style: none;
  padding: 0;
  line-height: 1.8;
}

.footer-columns a {
  color: white;
  text-decoration: none;
}

.footer-columns a:hover {
  text-decoration: underline;
}
</style>

<footer style="background-color: #9c1549; color: white; padding: 40px 20px; font-family: 'Arial', sans-serif; font-size: 16px; direction: ltr;">

  <!-- ✅ اللوجو + شريط البحث -->
  <div class="footer-search-container">
    <div class="footer-logo">
      <a href="/" style="display: inline-block;">
        <img src="https://easyorders.fra1.digitaloceanspaces.com/1755616409793820431.webp" alt="Logo">
      </a>
    </div>
    <div class="footer-search">
      <form action="/search" method="get">
        <input type="text" name="q" placeholder="Search for products..." />
        <button type="submit">Search</button>
      </form>
    </div>
  </div>

  <!-- ✅ الأعمدة -->
  <div class="footer-columns">
    <!-- Column 1 -->
    <div>
      <h3>Categories</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/collections/boxes">Boxes</a></li>
        <li><a href="/collections/Showergel">Shower Gel</a></li>
        <li><a href="/collections/BodyScrub">Foaming Sugar Scrubs</a></li>
      </ul>
    </div>

    <!-- Column 2 -->
    <div>
      <h3>Categories 2</h3>
      <ul>
        <li><a href="/collections/Lip-sitting">Lip Gloss</a></li>
        <li><a href="/collections/I-want-butter">Whipped Body Butters</a></li>
        <li><a href="/collections/lingerie-sleepwear">8</a></li>
      </ul>
    </div>

    <!-- Column 3 -->
    <div>
      <h3>Useful Links</h3>
      <ul>
        <li><a href="/pages/about-us">About Us</a></li>
        <li><a href="/pages/contact-us">Contact with Us</a></li>
        <li><a href="/pages/shipping-policy">Shipping Policy</a></li>
        <li><a href="/pages/refund-policy">Return & Exchange Policy</a></li>
      </ul>
    </div>

    <!-- Column 4 -->
    <div>
      <h3>Contact Us</h3>
      <ul>
       <li><a href="tel:010553325000">01055332500</a></li>
<li><a href="https://wa.me/201055858244">What's App</a></li>
 <li><a href="mailto:silabelaeg@gmail.com">silabelaeg@gmail.com</a></li>
        
      </ul>
    </div>
  </div>

  <!-- ✅ السوشيال -->
  <div class="social-icons">
   <a href="https://www.facebook.com/share/16zpjuXYyf/?mibextid=wwXIfr" target="_blank" title="Facebook">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
    </a>
    <a href="https://www.instagram.com/silabela.eg?igsh=MTl2bTU4dGl1aGx0eg==" target="_blank" title="Instagram">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram">
    </a>
    <a href="https://wa.me/201055858244" target="_blank" title="WhatsApp">
      <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp">
    </a>
    <a href="https://www.tiktok.com/@selabila.eg?_t=ZS-8yzP0A150ew&_r=1" target="_blank" title="TikTok">
      <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok">
    </a>
  </div>

  <!-- ✅ الروابط السفلية -->
  <div style="text-align: center; color: white; font-size: 14px; margin-top: 20px;">
    <a href="/pages/privacy-policy" style="color: white; margin: 0 10px; text-decoration: none;">Privacy Policy</a> |
    <a href="/pages/terms-and-conditions" style="color: white; margin: 0 10px; text-decoration: none;">Terms & Conditions</a>
  </div>

  <!-- ✅ الحقوق -->
  <div style="text-align: center; color: white; font-size: 14px; margin-top: 5px;">
    <p style="margin: 8px 0;">All Rights Reserved. Silabela-eg © 2025</p>
    <p style="margin: 5px 0;">
      POWERED By
      <a href="https://bluelines.myeasyorders.com/" target="_blank" style="color:#3B82F6; text-decoration: none;"><strong>BLUE LINES</strong></a>
    </p>
    <p style="margin: 0;">
      Designed by
      <a href="https://wa.me/201007604385" target="_blank" style="color:#3B82F6; text-decoration: none;"><strong>Mohamed Salah</strong></a>
    </p>
  </div>

</footer>

