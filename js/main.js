(() => {
  "use strict";

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const config = window.weddingConfig;

  const translations = {
    mr: {
      skip: "मुख्य मजकुराकडे जा", coverEyebrow: "सस्नेह निमंत्रण", coverTitle: "शुभविवाह",
      openCard: "आमंत्रण उघडण्यासाठी स्पर्श करा", openButton: "पत्रिका उघडा",
      coverFootnote: "एक सुंदर नव्या प्रवासाची सुरुवात...", navInvite: "निमंत्रण",
      navEvents: "कार्यक्रम", navDate: "शुभदिन", navVenue: "स्थळ", music: "संगीत",
      heroEyebrow: "॥ श्री गणेशाय नमः ॥", heroSmall: "दोन मनं • एक सुंदर बंध",
      heroDescription: "आमच्या आयुष्यातील या मंगल क्षणी आपली उपस्थिती आणि आशीर्वाद लाभावेत, हीच प्रेमळ विनंती.",
      scroll: "पुढे पाहा", invitationEyebrow: "प्रेमपूर्वक निमंत्रण",
      invitationTitle: "आमच्या आनंदात सहभागी व्हा",
      mantra: "॥ श्री गणेशाय नमः ॥",
      invitationCopy: "ईश्वराच्या कृपेने आणि वडीलधाऱ्यांच्या आशीर्वादाने आमच्या कुटुंबातील हा मंगल सोहळा साजरा होत आहे. या शुभप्रसंगी आपण सहकुटुंब उपस्थित राहून वधू-वरांना आशीर्वाद द्यावेत, ही नम्र विनंती.",
      groomFamily: "वरपक्ष", brideFamily: "वधूपक्ष", eventsEyebrow: "मंगल सोहळे",
      eventsTitle: "कार्यक्रमाची रूपरेषा", eventsIntro: "आपल्या भेटीची आतुरतेने वाट पाहत आहोत.",
      eventLocation: "स्थळ", dateEyebrow: "एक खास दिवस", dateTitle: "आमचा शुभदिन शोधा",
      scratchHint: "हृदयावर अलगद स्क्रॅच करा आणि लग्नाची तारीख उघडा.",
      weddingDay: "आमचा लग्नसोहळा", scratchNow: "येथे स्क्रॅच करा",
      revealButton: "तारीख थेट उघडा", countdownEyebrow: "उलटी गिनती सुरू झाली आहे",
      countdownTitle: "मंगल क्षणापर्यंत", days: "दिवस", hours: "तास", minutes: "मिनिटे",
      seconds: "सेकंद", countdownDone: "आजचा दिवस आपल्या आनंदाचा आहे! शुभविवाह!",
      countdownPassed: "या सुंदर सोहळ्याच्या आठवणी सदैव सोबत राहोत.",
      venueEyebrow: "आपली भेट येथे होईल", venueTitle: "लग्नाचे स्थळ",
      directions: "नकाशावर मार्ग पाहा ↗", copyAddress: "पत्ता कॉपी करा",
      addressCopied: "पत्ता कॉपी झाला!", copyFailed: "पत्ता कॉपी करता आला नाही.",
      mapPlaceholder: "स्थळाचा पत्ता जोडल्यानंतर नकाशा येथे दिसेल.",
      closingEyebrow: "आपली उपस्थितीच आमची भेट", closingTitle: "आपली वाट पाहत आहोत!",
      closingCopy: "आपले प्रेम, शुभेच्छा आणि आशीर्वाद आमच्यासाठी अमूल्य आहेत.",
      share: "आमंत्रण शेअर करा ↗", shared: "आमंत्रण शेअर करण्यासाठी तयार आहे.",
      footer: "प्रेमाने तयार केलेले आमंत्रण", backTop: "वर जा ↑",
      openFailed: "आमंत्रण उघडले नाही? खालील बटण पुन्हा दाबा."
    },
    en: {
      skip: "Skip to main content", coverEyebrow: "You are cordially invited",
      coverTitle: "Wedding Invitation", openCard: "Tap to open your invitation",
      openButton: "Open Invitation", coverFootnote: "The beginning of a beautiful new journey...",
      navInvite: "Invitation", navEvents: "Events", navDate: "The Date", navVenue: "Venue",
      music: "Music", heroEyebrow: "With the blessings of Lord Ganesha",
      heroSmall: "Two hearts • One beautiful bond",
      heroDescription: "We would be delighted to have your presence and blessings on this auspicious moment in our lives.",
      scroll: "Scroll to explore", invitationEyebrow: "With love and blessings",
      invitationTitle: "Please join our celebration", mantra: "With the blessings of Lord Ganesha",
      invitationCopy: "With God's grace and the blessings of our elders, our families are delighted to invite you to this auspicious celebration. Please join us with your family and bless the couple as they begin their new journey together.",
      groomFamily: "Groom's family", brideFamily: "Bride's family", eventsEyebrow: "Celebration schedule",
      eventsTitle: "Wedding Events", eventsIntro: "We are looking forward to celebrating with you.",
      eventLocation: "Venue", dateEyebrow: "A day to remember", dateTitle: "Discover our special date",
      scratchHint: "Gently scratch the heart to reveal our wedding date.",
      weddingDay: "Our wedding day", scratchNow: "Scratch here",
      revealButton: "Reveal date now", countdownEyebrow: "The countdown has begun",
      countdownTitle: "Until our special moment", days: "Days", hours: "Hours",
      minutes: "Minutes", seconds: "Seconds",
      countdownDone: "Today is our day of joy. Let the celebration begin!",
      countdownPassed: "May the memories of this beautiful celebration stay with us forever.",
      venueEyebrow: "We will meet here", venueTitle: "Wedding Venue",
      directions: "Get Directions ↗", copyAddress: "Copy Address",
      addressCopied: "Address copied!", copyFailed: "Could not copy the address.",
      mapPlaceholder: "Add the venue address to show the map here.",
      closingEyebrow: "Your presence is our greatest gift", closingTitle: "We look forward to seeing you!",
      closingCopy: "Your love, wishes and blessings mean the world to us.",
      share: "Share Invitation ↗", shared: "Ready to share the invitation.",
      footer: "An invitation made with love", backTop: "Back to top ↑",
      openFailed: "If the invitation did not open, tap the button again."
    }
  };

  let currentLanguage = "mr";
  let countdownInterval = null;
  let toastTimeout = null;
  let scratchInitialized = false;
  let isScratching = false;
  let lastPoint = null;
  let scratchPixels = 0;

  function getText(obj, mrKey, enKey) {
    return currentLanguage === "mr" ? obj[mrKey] : obj[enKey];
  }

  function updateConfiguredText() {
    $$("[data-config]").forEach(el => {
      const path = el.dataset.config.split(".");
      let value = config;
      for (const key of path) value = value?.[key];
      if (path[0] === "groom" || path[0] === "bride") {
        const person = config[path[0]];
        const key = path[1];
        const enKey = key.endsWith("Mr") ? key.replace(/Mr$/, "En") : key;
        if (currentLanguage === "en" && person[enKey] != null) value = person[enKey];
      }
      if (path[0] === "wedding" && currentLanguage === "en") {
        const key = path[1];
        if (key === "displayDateMr") value = config.wedding.displayDateEn;
        if (key === "timeDisplayMr") value = config.wedding.timeDisplayEn;
      }
      if (path[0] === "venue" && currentLanguage === "en") {
        const key = path[1];
        if (key === "name") value = config.venue.nameEn || config.venue.name;
        if (key === "address") value = config.venue.addressEn || config.venue.address;
      }
      if (value != null) el.textContent = value;
    });
    const family = currentLanguage === "mr"
      ? (config.invitingFamily || []).join(" • ")
      : (config.invitingFamilyEn || config.invitingFamily || []).join(" • ");
    const familyEl = $("[data-config='invitingFamilyDisplayMr']");
    if (familyEl) familyEl.textContent = family;
  }

  function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    $$("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[language][key]) el.textContent = translations[language][key];
    });
    $("#languageToggle").textContent = language === "mr" ? "EN" : "मराठी";
    updateConfiguredText();
    renderEvents();
    updateDirections();
    updateCountdown();
    const canvas = $("#scratchCanvas");
    if (canvas && !canvas.classList.contains("is-cleared")) drawScratchSurface(true);
  }

  function renderEvents() {
    const list = $("#eventList");
    if (!list) return;
    list.replaceChildren();
    const events = Array.isArray(config.events) ? config.events : [];
    if (!events.length) {
      const p = document.createElement("p");
      p.className = "event-empty";
      p.textContent = currentLanguage === "mr" ? "कार्यक्रमांची माहिती लवकरच येथे दिली जाईल." : "Event details will be added here soon.";
      list.appendChild(p);
      return;
    }
    events.forEach((event, index) => {
      const card = document.createElement("article");
      card.className = "event-card";
      card.style.transitionDelay = `${Math.min(index * 100, 400)}ms`;
      const time = document.createElement("span");
      time.className = "event-time";
      time.textContent = `${getText(event, "dateMr", "dateEn")} · ${getText(event, "timeMr", "timeEn")}`;
      const title = document.createElement("h3");
      title.textContent = getText(event, "nameMr", "nameEn");
      const description = document.createElement("p");
      description.textContent = getText(event, "descriptionMr", "descriptionEn");
      const location = document.createElement("p");
      location.className = "event-location";
      location.textContent = `⌖ ${getText(event, "locationMr", "locationEn")}`;
      card.append(time, title, description, location);
      list.appendChild(card);
      revealObserver?.observe(card);
    });
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
  }

  function openInvitation() {
    const cover = $("#cover");
    const shell = $("#siteShell");
    const button = $("#openCard");
    if (cover.classList.contains("is-opening")) return;
    button.disabled = true;
    cover.classList.add("is-opening");
    setTimeout(() => {
      cover.hidden = true;
      shell.inert = false;
      shell.classList.add("is-visible");
      document.body.classList.add("invitation-open");
      $("#main-content").setAttribute("tabindex", "-1");
      $("#main-content").focus({ preventScroll: true });
    }, 850);
  }

  const revealObserver = ("IntersectionObserver" in window)
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" })
    : null;

  function initReveals() {
    $$(".reveal").forEach(el => {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add("is-visible");
    });
  }

  function getWeddingTimestamp() {
    const [year, month, day] = String(config.wedding.date).split("-").map(Number);
    const [hour, minute] = String(config.wedding.time).split(":").map(Number);
    if (![year, month, day, hour, minute].every(Number.isFinite)) return NaN;
    // Convert the configured wedding local time in Asia/Kolkata into an absolute timestamp.
    const utcGuess = Date.UTC(year, month - 1, day, hour, minute);
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: config.wedding.timeZone || "Asia/Kolkata",
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", hourCycle: "h23"
    });
    let guess = utcGuess;
    for (let i = 0; i < 3; i++) {
      const parts = Object.fromEntries(formatter.formatToParts(new Date(guess)).map(p => [p.type, p.value]));
      const representedUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
      guess += utcGuess - representedUtc;
    }
    return guess;
  }

  function updateCountdown() {
    const target = getWeddingTimestamp();
    const note = $("#countdownNote");
    if (!Number.isFinite(target)) {
      note.textContent = currentLanguage === "mr" ? "कृपया js/config.js मध्ये लग्नाची योग्य तारीख आणि वेळ भरा." : "Please set a valid wedding date and time in js/config.js.";
      return;
    }
    const remaining = target - Date.now();
    if (remaining <= 0) {
      ["days", "hours", "minutes", "seconds"].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = id === "days" ? "000" : "00"; });
      note.textContent = remaining > -86400000 ? translations[currentLanguage].countdownDone : translations[currentLanguage].countdownPassed;
      return;
    }
    const seconds = Math.floor(remaining / 1000);
    const values = {
      days: Math.floor(seconds / 86400),
      hours: Math.floor((seconds % 86400) / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: seconds % 60
    };
    Object.entries(values).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = id === "days" ? String(value).padStart(3, "0") : String(value).padStart(2, "0");
    });
    note.textContent = "";
  }

  function updateDirections() {
    const link = $("#directionsLink");
    const frame = $("#mapFrame");
    if (!link || !frame) return;
    let mapUrl = config.venue.mapsUrl;
    if (!mapUrl && config.venue.latitude != null && config.venue.longitude != null) {
      mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(config.venue.latitude + "," + config.venue.longitude)}`;
    }
    if (!mapUrl && config.venue.address && !config.venue.address.startsWith("आपला पूर्ण")) {
      mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(config.venue.address)}`;
    }
    link.href = mapUrl || "https://www.google.com/maps";
    if (mapUrl && config.venue.address && !config.venue.address.startsWith("आपला पूर्ण")) {
      const query = config.venue.latitude != null && config.venue.longitude != null
        ? `${config.venue.latitude},${config.venue.longitude}`
        : config.venue.address;
      frame.innerHTML = `<iframe title="Google Maps venue location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=${encodeURIComponent(query)}&output=embed"></iframe>`;
    } else {
      frame.innerHTML = `<div class="map-placeholder"><span aria-hidden="true">⌖</span><p>${translations[currentLanguage].mapPlaceholder}</p></div>`;
    }
  }

  async function copyAddress() {
    const address = currentLanguage === "en" ? (config.venue.addressEn || config.venue.address) : config.venue.address;
    try {
      await navigator.clipboard.writeText(address);
      $("#copyFeedback").textContent = translations[currentLanguage].addressCopied;
      showToast(translations[currentLanguage].addressCopied);
    } catch {
      $("#copyFeedback").textContent = translations[currentLanguage].copyFailed;
      showToast(translations[currentLanguage].copyFailed);
    }
  }

  function initScratchCanvas() {
    const canvas = $("#scratchCanvas");
    if (!canvas || scratchInitialized) return;
    scratchInitialized = true;
    drawScratchSurface(false);
    canvas.addEventListener("pointerdown", event => {
      if (canvas.classList.contains("is-cleared")) return;
      isScratching = true;
      lastPoint = getCanvasPoint(event, canvas);
      canvas.setPointerCapture?.(event.pointerId);
      scratchAt(lastPoint, lastPoint);
      event.preventDefault();
    });
    canvas.addEventListener("pointermove", event => {
      if (!isScratching || canvas.classList.contains("is-cleared")) return;
      const point = getCanvasPoint(event, canvas);
      scratchAt(lastPoint, point);
      lastPoint = point;
      scratchPixels += 1;
      if (scratchPixels % 12 === 0) checkScratchProgress();
      event.preventDefault();
    });
    const stop = () => { isScratching = false; lastPoint = null; checkScratchProgress(); };
    canvas.addEventListener("pointerup", stop);
    canvas.addEventListener("pointercancel", stop);
    canvas.addEventListener("lostpointercapture", stop);
  }

  function drawScratchSurface(redraw) {
    const canvas = $("#scratchCanvas");
    if (!canvas || canvas.classList.contains("is-cleared")) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      requestAnimationFrame(() => drawScratchSurface(redraw));
      return;
    }
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    const w = rect.width, h = rect.height;
    ctx.clearRect(0, 0, w, h);
    // Heart silhouette: the canvas coating is clipped to this path.
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(w * .5, h * .88);
    ctx.bezierCurveTo(w * .42, h * .79, w * .08, h * .57, w * .08, h * .34);
    ctx.bezierCurveTo(w * .08, h * .08, w * .38, h * .03, w * .5, h * .25);
    ctx.bezierCurveTo(w * .62, h * .03, w * .92, h * .08, w * .92, h * .34);
    ctx.bezierCurveTo(w * .92, h * .57, w * .58, h * .79, w * .5, h * .88);
    ctx.closePath();
    ctx.clip();
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, "#f1d995");
    gradient.addColorStop(.48, "#c99a43");
    gradient.addColorStop(1, "#f4dfa6");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(107,16,40,.72)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * .18, h * .43); ctx.quadraticCurveTo(w * .5, h * .25, w * .82, h * .43);
    ctx.stroke();
    ctx.font = `${Math.max(18, w * .09)}px serif`;
    ctx.fillStyle = "#6b1028";
    ctx.textAlign = "center";
    ctx.fillText("✦", w / 2, h * .38);
    ctx.font = `${Math.max(11, w * .045)}px sans-serif`;
    ctx.fillText(currentLanguage === "mr" ? "शुभदिन" : "THE DATE", w / 2, h * .52);
    ctx.restore();
    ctx.globalCompositeOperation = "source-over";
    if (redraw) scratchPixels = 0;
  }

  function getCanvasPoint(event, canvas) {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  function scratchAt(from, to) {
    const canvas = $("#scratchCanvas");
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(24, rect.width * .12);
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    ctx.restore();
  }

  function checkScratchProgress() {
    const canvas = $("#scratchCanvas");
    if (!canvas || canvas.classList.contains("is-cleared")) return;
    const ctx = canvas.getContext("2d");
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparent = 0;
    const stride = 32;
    for (let i = 3; i < data.length; i += 4 * stride) if (data[i] < 30) transparent++;
    const sampled = Math.ceil(data.length / (4 * stride));
    if (sampled && transparent / sampled > .38) revealDate();
  }

  function revealDate() {
    const canvas = $("#scratchCanvas");
    if (!canvas || canvas.classList.contains("is-cleared")) return;
    canvas.classList.add("is-cleared");
    $("#scratchPrompt").hidden = true;
    $("#revealedDate").setAttribute("aria-live", "polite");
  }

  async function shareInvitation() {
    const shareData = {
      title: document.title,
      text: currentLanguage === "mr" ? "आमच्या लग्नाच्या मंगल सोहळ्यासाठी सस्नेह निमंत्रण!" : "You are warmly invited to celebrate our wedding!",
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (error) { if (error.name !== "AbortError") showToast(translations[currentLanguage].shared); }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast(currentLanguage === "mr" ? "आमंत्रणाची लिंक कॉपी झाली!" : "Invitation link copied!");
      } catch { showToast(translations[currentLanguage].shared); }
    }
  }

  function initMusic() {
    const audio = $("#weddingMusic");
    const button = $("#musicToggle");
    if (!audio || !button) return;
    audio.src = config.musicPath || "assets/audio/wedding-instrumental.mp3";
    button.addEventListener("click", async () => {
      if (audio.paused) {
        try {
          await audio.play();
          button.setAttribute("aria-pressed", "true");
          button.firstChild.textContent = "♫ ";
        } catch {
          showToast(currentLanguage === "mr" ? "संगीतासाठी assets/audio मध्ये MP3 फाइल जोडा." : "Add an MP3 file in assets/audio to enable music.");
        }
      } else {
        audio.pause();
        button.setAttribute("aria-pressed", "false");
      }
    });
  }

  function init() {
    if (!config) {
      console.error("Wedding configuration missing. Check js/config.js.");
      return;
    }
    $("#openCard")?.addEventListener("click", openInvitation);
    $("#coverCard")?.addEventListener("click", event => {
      if (event.target.closest("button")) return;
      openInvitation();
    });
    $("#languageToggle")?.addEventListener("click", () => applyLanguage(currentLanguage === "mr" ? "en" : "mr"));
    $("#revealDateButton")?.addEventListener("click", revealDate);
    $("#copyAddress")?.addEventListener("click", copyAddress);
    $("#shareButton")?.addEventListener("click", shareInvitation);
    initReveals();
    initScratchCanvas();
    initMusic();
    applyLanguage("mr");
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    window.addEventListener("resize", () => {
      if (!$("#scratchCanvas")?.classList.contains("is-cleared")) drawScratchSurface(true);
    });
    window.addEventListener("beforeunload", () => clearInterval(countdownInterval));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
