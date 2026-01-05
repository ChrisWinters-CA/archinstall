/****************************
* IceWolf user.js           *
* Written by: Chris Winters *
*****************************

/****************************
* START: PERFORMANCE TWEAKS *
*****************************
/* MEMORY CACHE */
user_pref("gfx.content.skia-font-cache-size", 32);

/* GFX */
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.webrender.layer-compositor", true);
user_pref("webgl.max-size", 16384);

/* IMAGE CACHE */
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 65536);

/* MEMORY CACHE */
user_pref("browser.cache.memory.max_entry_size", 20480);

/* MEDIA CACHE */
user_pref("media.cache_readahead_limit", 600);
user_pref("media.cache_resume_threshold", 300);
user_pref("media.memory_cache_max_size", 262144);
user_pref("media.memory_caches_combined_limit_kb", 1048576);

/* SMOOTH SCROLLING */
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300);

/**************************
* END: PERFORMANCE TWEAKS *
***************************

/****************************
* START: PRIVACY & SECURITY *
*****************************
/* DISABLE ML/AI */
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.maxLength", 0);
user_pref("browser.ml.chat.page", false);
user_pref("browser.ml.chat.page.footerBadge", false);
user_pref("browser.ml.chat.page.menuBadge", false);
user_pref("browser.ml.chat.prompt.prefix", "{}");
user_pref("browser.ml.chat.prompts.0", "{}");
user_pref("browser.ml.chat.prompts.1", "{}");
user_pref("browser.ml.chat.prompts.3", "{}");
user_pref("browser.ml.chat.prompts.4", "{}");
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.shortcuts.custom", false);
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.ml.linkPreview.longPress", false);
user_pref("browser.ml.modelHubRootUrl", "example.com");
user_pref("extensions.ml.enabled", false);
user_pref("sidebar.notification.badge.aichat", false);

/* TRACKING PROTECTION */
user_pref("urlclassifier.features.socialtracking.skipURLs", "");
user_pref("urlclassifier.trackingSkipURLs", "");

/* SHUTDOWN & SANITIZING */
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);

/* DNS OVER HTTPS */
user_pref("network.trr.max-fails", 5);
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");

/* MOZILLA */
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);

/* EXPERIMENTS */
user_pref("browser.preferences.experimental.hidden", true);

/**************************
* END: PRIVACY & SECURITY *
***************************

/*************************************
* START: USER INTERFACE & EXPERIENCE *
**************************************
/* MOZILLA UI */
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false);
user_pref("browser.toolbars.bookmarks.visibility", "never");
user_pref("browser.uidensity", 1);
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);
user_pref("widget.non-native-theme.scrollbar.style", 1);
user_pref("sidebar.revamp", true);
user_pref("sidebar.verticalTabs", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
user_pref("media.videocontrols.picture-in-picture.enabled", false);

/* NEW TAB PAGE */
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://archlinux.org\",\"label\":\"Arch Linux\"},{\"url\":\"https://github.com\",\"label\":\"GitHub\"},{\"url\":\"https://www.youtube.com\",\"label\":\"YouTube\"},{\"url\":\"https://rumble.com\",\"label\":\"Rumble\"},{\"url\":\"https://vrchat.com/home\",\"label\":\"VRChat\"},{\"url\":\"https://mybenefits.mcss.gov.on.ca/\",\"label\":\"ODSP\"},{\"url\":\"https://mail.proton.me/\",\"label\":\"ProtonMail\"},{\"url\":\"https://porkbun.com/\",\"label\":\"Porkbun\"},{\"url\":\"http://192.168.0.1\",\"label\":\"Router Prime\"},{\"url\":\"http://192.168.0.4\",\"label\":\"Router VR\"},{\"url\":\"http://192.168.0.2/\",\"label\":\"Extender TF\"},{\"url\":\"http://192.168.0.3/\",\"label\":\"Extender MF\"},{\"url\":\"https://gog-games.to\",\"label\":\"GOG Games\"},{\"url\":\"https://elamigos.site/\",\"label\":\"ElAmigos\"},{\"url\":\"https://nxbrew.net/\",\"label\":\"NXBrew\"},{\"url\":\"https://5mind.com\",\"label\":\"5mind\"}]");

/* BLOCK AUTOPLAY */
user_pref("media.autoplay.blocking_policy", 2);

/* ENABLE MIDDLE MOUSE AUTOSCROLL */
user_pref("general.autoScroll", true);

/***********************************
* END: USER INTERFACE & EXPERIENCE *
************************************
