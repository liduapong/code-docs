(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{113:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" SSH")]),s._v(" "),t("p",[s._v("SSH是一种网络协议，用于计算机之间的加密登录。")]),s._v(" "),t("h2",{attrs:{id:"基本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本"}},[s._v("#")]),s._v(" 基本")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ssh")]),s._v(" 默认端口号是22, 如果远程服务器修改了端口号则命令后面加参数 "),t("code",[s._v("-p <port>")]),s._v("。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@192.168.1.121\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -i dev.pem ec2-user@"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip-address"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用pem文件方式登录")]),s._v("\n")])])]),t("ul",[t("li",[s._v("生成公钥私钥")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ssh-keygen -t rsa\n")])])]),t("p",[s._v("文件路径在 "),t("code",[s._v("~/.ssh")]),s._v("。私钥文件是 "),t("code",[s._v("id_rsa")]),s._v(", 公钥文件是 "),t("code",[s._v("id_rsa.pub")]),s._v("。公钥内容需加入远程服务器文件 "),t("code",[s._v("~/.ssh/authorized_keys")]),s._v(" 里面方能连接。")]),s._v(" "),t("h2",{attrs:{id:"高级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高级"}},[s._v("#")]),s._v(" 高级")]),s._v(" "),t("p",[s._v("对于登录频率非常高的服务器有必要修改下 "),t("code",[s._v("~/.ssh/config")]),s._v(" 文件, 避免每次都要通过命令 "),t("code",[s._v("ssh root@<ip-address>")]),s._v(" 来登录。")]),s._v(" "),t("h3",{attrs:{id:"基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),t("p",[s._v("配置 "),t("code",[s._v("~/.ssh/config")]),s._v(" 文件, 可以使用命令 "),t("code",[s._v("ssh codedocs-test")]),s._v(" 和 "),t("code",[s._v("ssh codedocs-staging")]),s._v(" 登录服务器。可读性高, 而且有智能提示。")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最简单的配置")]),s._v("\nHost codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("test\n    HostName test.codedocs.io\n    User ec2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("user\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 带pem文件和自定义PORT")]),s._v("\nHost codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("staging\n    HostName staging.codedocs.io\n    User ec2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("user\n    Port 2200\n    IdentityFile ~/pems/codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("staging.pem\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("不修改 "),t("code",[s._v("~/.ssh/config")]),s._v(" 也可以直接指定一个config文件。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -F ./ssh-config codedocs-staging\n")])])])]),s._v(" "),t("h3",{attrs:{id:"跳板加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跳板加速"}},[s._v("#")]),s._v(" 跳板加速")]),s._v(" "),t("p",[s._v("从中国直接ssh美国的服务器很慢, 以下配置通过首尔服务器做跳板可以达到加速访问的效果。")]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("Host codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev\n    HostName dev.codedocs.io\n    User ec2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("user\n    ProxyCommand ssh codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("us"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vpn nc %h %p\n\nHost codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("us"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vpn\n    HostName us.vpn.codedocs.io\n    User ubuntu\n    ProxyCommand ssh codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("seoul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vpn nc %h %p\n\nHost codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("seoul"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("vpn\n    HostName seoul.vpn.codedocs.io\n    User ubuntu\n")])])]),t("p",[t("code",[s._v("ssh codedocs-us-vpn")]),s._v(" 命令会先连到 "),t("code",[s._v("codedocs-seoul-vpn")]),s._v(" 再连到 "),t("code",[s._v("codedocs-us-vpn")]),s._v(" 服务器。")]),s._v(" "),t("p",[t("code",[s._v("ssh codedocs-dev")]),s._v(" 命令则是通过 "),t("code",[s._v("codedocs-seoul-vpn")]),s._v(" 和 "),t("code",[s._v("codedocs-us-vpn")]),s._v(" 最后连到 "),t("code",[s._v("codedocs-dev")]),s._v(" 服务器。")]),s._v(" "),t("h3",{attrs:{id:"执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),t("ul",[t("li",[s._v("登录 "),t("code",[s._v("codedocs-dev")]),s._v(" 后自动进入 "),t("code",[s._v("/var/www")]),s._v(" 目录并列出目录。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" codedocs-dev -t "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cd /var/www; ls; bash"')]),s._v("\n")])])]),t("ul",[t("li",[s._v("以下代码为ssh执行代码块的示例。代码保存为 "),t("code",[s._v("tmp.sh")]),s._v(" 文件执行 "),t("code",[s._v("ssh tmp.sh <env>")]),s._v("。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("env")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("scripts")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n    cd /tmp\n    mv bash-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$env")]),s._v(".config bash.config\n\n    bash update-env.sh\n\n    rm -f /tmp/update-env.sh\n    rm -f /tmp/bash.config\nEOF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" codedocs-dev -t "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"sudo sh -c '"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$scripts")]),s._v("'\"")]),s._v("\n")])])]),t("h3",{attrs:{id:"端口转发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#端口转发"}},[s._v("#")]),s._v(" 端口转发")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -L "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("listening port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("REMOTE_MYSQL_HOST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("REMOTE_MYSQL_PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SSH_USER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("SSH_HOST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[t("strong",[s._v("场景描述")])]),s._v(" "),t("p",[t("code",[s._v("dev.codedocs.io")]),s._v(" 服务器出于安全考虑只开放了 "),t("code",[s._v("80/443/22")]),s._v(" 端口。"),t("code",[s._v("dev.codedocs.io")]),s._v(" 服务器可以访问RDS "),t("code",[s._v("db.codedocs.io")]),s._v("。本地电脑无法直接访问 "),t("code",[s._v("db.codedocs.io")]),s._v("。本地电脑可以ssh上 "),t("code",[s._v("dev.codedocs.io")]),s._v("。")]),s._v(" "),t("p",[s._v("本地电脑希望能通过本地 "),t("code",[s._v("127.0.0.1:3308")]),s._v(" 连接上远程数据库。")]),s._v(" "),t("ol",[t("li",[s._v("如下配置")])]),s._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[s._v("Host codedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("db"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("tunnel\n    HostName dev.codedocs.io\n    User ec2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("user\n    LocalForward 3308 db.codedocs.io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("运行命令")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -f -N codedocs-dev-db-tunnel\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -f puts ssh in background")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -N makes it not execute a remote command")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("连接数据库")])]),s._v(" "),t("p",[s._v("1, 2 两步等价于 "),t("code",[s._v("ssh -f -N -L 3308:db.codedocs.io:3306 ec2-user@dev.codedocs.io")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1  -uroot -p123456 -Ddemo_db -A --port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3308")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -A no-auto-rehash 禁用智能提示, 加快敲命令速度")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);