module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"G-14GV24LM9K","head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/images/favicon.ico","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"70e30d62c63141070bdd44d5dacc0231"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["G-X23C028SNG","AW-CONVERSION_ID","DC-FLOODIGHT_ID"],"gtagConfig":{"optimize_id":"OPT_CONTAINER_ID","anonymize_ip":true,"cookie_expires":0},"pluginConfig":{"head":false,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"]}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
