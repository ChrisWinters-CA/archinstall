/***************************\
* IcyFox user.js            *
* Written By: Chris Winters *
\***************************/

// Use LANG environment variable to choose locale
user_pref("intl.locale.requested", "");

// Use system-provided dictionaries
user_pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Disable default browser checking.
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("skipDefaultBrowserCheckOnFirstRun", false);

// Enable hardware acceleration
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.webrtc.hw.h264.enabled", true);
user_pref("media.gpu-process-decoder", true);

// Performance & Graphics Tweaks
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.capacity", 1048576);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("layers.gpu-process.enabled", true);

// JavaScript & Process Tweaks
user_pref("javascript.options.baselinejit.threshold", 50);
user_pref("javascript.options.ion.threshold", 500);

// Memory & Cache Tweaks (Non-Disk)
user_pref("browser.sessionhistory.max_total_viewers", 8);
user_pref("image.cache.size", 10485760);
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 3145728);
user_pref("network.buffer.cache.size", 65535);
user_pref("network.ssl_tokens_cache_capacity", 32768);

// Remove Mozilla stuff
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.contentanalysis.default_result", 0);
user_pref("browser.contentanalysis.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.url", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.dataFeatureRecommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.ipProtection.enabled", false);
user_pref("browser.ipProtection.guardian.endpoint", "");
user_pref("browser.ipProtection.variant", "");
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
user_pref("browser.ml.enable", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.ml.linkPreview.longPress", false);
user_pref("browser.ml.modelHubRootUrl", "http://localhost");
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.feeds.adsfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.system.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", 0);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.event", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled",	false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "");
user_pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled",	false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);
user_pref("browser.places.interactions.enabled", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.promo.cookiebanners.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
user_pref("browser.protections_panel.infoMessage.seen", true);
user_pref("browser.send_to_device_locales", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.addons", false);
user_pref("browser.urlbar.suggest.quicksuggest.fakespot", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("cookiebanners.ui.desktop.showCallout", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
user_pref("extensions.abuseReport.enabled", false);
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.ml.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false ,locked);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("sidebar.notification.badge.aichat", false);
user_pref("signon.firefoxRelay.feature", "disabled");

// Reduces the CLRite base refresh period in the lack of a persistent
// background push service
user_pref("security.OCSP.enabled", 0);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("services.settings.poll_interval", 300);

// Remove telemetry
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.trendingSearch.blockedAds", "");
user_pref("browser.newtabpage.activity-stream.trendingSearch.enabled", false);
user_pref("browser.newtabpage.activity-stream.trendingSearch.variant", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false);
user_pref("browser.search.update", false);
user_pref("browser.shopping.experience2023.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.fakespot.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("extensions.addonAbuseReport.url", "");
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.traffic_analyzer.enabled", false);
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("toolkit.contentRelevancy.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.cachedProfileGroupID", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Remove Google safebrowsing
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.debug", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.id", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryName", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.pver", 0);
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.pver", 0);
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lastupdatetime", 0);
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.base", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.content", "");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", 0);
user_pref("browser.safebrowsing.provider.mozilla.pver", 0);
user_pref("browser.safebrowsing.provider.mozilla.reportURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// Performance tweaks
user_pref("accessibility.force_disabled", 1);
user_pref("browser.tabs.unloadOnLowMemory", true);
user_pref("content.notify.interval", 100000);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);

// Privacy hardening
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.formfill.enable", false);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.sessionstore.interval", 60000);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);
user_pref("editor.truncate_user_pastes", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("media.autoplay.default", 5);
user_pref("network.IDN_show_punycode", true);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.cookie.cookieBehavior.optInPartitioning", true);
user_pref("network.cookie.cookieBehavior.optInPartitioning.pbmode", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.trr.max-fails", 5);
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://doh.libredns.gr/noads");
user_pref("pdfjs.enableScripting", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", false);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("security.tls.enable_0rtt_data", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("urlclassifier.features.socialtracking.skipURLs", "");
user_pref("urlclassifier.trackingSkipURLs", "");

// Desktop integration
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);

// UI/Behavior Tweaks
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.compactmode.show", true);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.download.open_pdf_attachments_inline", true);
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}");
user_pref("browser.menu.showViewImageInfo", true);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", true);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.newtabpage.blocked", "{\"eV8/WsSLxHadrTL1gAxhug==\":1,\"gLv0ja2RYVgxKdp0I5qwvA==\":1,\"Sqf4D/UUFWy5ggc5+HqFYA==\":1,\"mSyqhHF+GRpCZEbIVUF/Kg==\":1,\"26UbzFJ7qT9/4DhodHKA1Q==\":1,\"O3CPV5TXvL82QE8rk4umKA==\":1,\"TYwhwW+azUPl5FCRfNSnEg==\":1,\"zerT4A1ewzlLo2IlYwRH/g==\":1,\"dBxQTDpR/GeCAQihrsBT4g==\":1,\"Dzz/DVGov+OGN1uVBgTAnQ==\":1,\"/9hmYI+T+2T+pz5MmQ2g8g==\":1,\"10hfMHw3gianGzC5ac7qGQ==\":1,\"EfZewCuiDDWrFu3U/OVzAA==\":1,\"E0+zHzkPq6dd3pDqu1Hr4A==\":1,\"yM4K0oTsrEfs+xFU26JLHQ==\":1,\"fg9PCY5jRG9jV3bHFy3eJQ==\":1,\"OYQ7p/M1O4RC+nvGNyPPEg==\":1,\"3wbmnroJh9s0TJqnFJ9xhQ==\":1}");
user_pref("browser.newtabpage.enabled", true);
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://archlinux.org\",\"label\":\"Arch Linux\"},{\"url\":\"https://github.com\",\"label\":\"GitHub\"},{\"url\":\"https://www.youtube.com\",\"label\":\"YouTube\"},{\"url\":\"https://rumble.com\",\"label\":\"Rumble\"},{\"url\":\"https://vrchat.com/home\",\"label\":\"VRChat\"},{\"url\":\"https://mybenefits.mcss.gov.on.ca/\",\"label\":\"ODSP\"},{\"url\":\"https://mail.proton.me/\",\"label\":\"ProtonMail\"},{\"url\":\"https://porkbun.com/\",\"label\":\"Porkbun\"},{\"url\":\"http://192.168.0.1\",\"label\":\"Router Prime\"},{\"url\":\"http://192.168.0.4\",\"label\":\"Router VR\"},{\"url\":\"http://192.168.0.2/\",\"label\":\"Extender TF\"},{\"url\":\"http://192.168.0.3/\",\"label\":\"Extender MF\"},{\"url\":\"https://gog-games.to\",\"label\":\"GOG Games\"},{\"url\":\"https://elamigos.site/\",\"label\":\"ElAmigos\"},{\"url\":\"https://nxbrew.net/\",\"label\":\"NXBrew\"},{\"url\":\"https://google.com\",\"label\":\"@google\",\"searchTopSite\":true}]");
user_pref("browser.preferences.experimental", false);
user_pref("browser.preferences.experimental.hidden", true);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.privateWindowSeparation.enabled", false);
user_pref("browser.profiles.enabled", true);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("dom.text_fragments.create_text_fragment.enabled", true);
user_pref("extensions.postDownloadThirdPartyPrompt", false);
user_pref("findbar.highlightAll", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);
user_pref("general.autoScroll", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "1.0");
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 250);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2.0");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.stopDecelerationWeighting", "1.0");
user_pref("identity.fxaccounts.enabled", false);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("mousewheel.default.delta_multiplier_y", 300);
user_pref("sidebar.revamp", true);
user_pref("sidebar.verticalTabs", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("widget.non-native-theme.scrollbar.style", 1);

// Feature Enablement
user_pref("layout.css.grid-template-masonry-value.enabled", true);
