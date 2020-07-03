var appCfg = require('rc')(appname, conf);
appCfg.configs[0] // /etc/appnamerc
appCfg.configs[1] // /home/dominictarr/.config/appname
appCfg.config // same as appCfg.configs[appCfg.configs.length - 1]
