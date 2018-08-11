module.exports = {
    'appName': 'erostest',
    'appBoard': '/config/index.js',
    // android 监听全局事件homeBack 如果为true 安卓端需要自行调用router.finish方法来关闭应用
    'androidIsListenHomeBack': 'true',
    'customBundleUpdate': 'false',
    'version': {
        'android': '1.0.0',
        'iOS': '1.0.0'
    },
    'page': {
        'homePage': '/pages/demo/index.js',
        'mediatorPage': '/mediator/index.js',
        'navBarColor': '#1DA1F2',
        'navItemColor': '#ffffff'
    },
    'url': {
        'image': 'https://lev-inf.benmu-health.com/test/xxx',
        'bundleUpdate': 'http://localhosts:3001/app/check'
    },
    'zipFolder': {
        'iOS': '/ios/WeexEros/WeexEros',
        'android': '/android/WeexFrameworkWrapper/app/src/main/assets'
    },
    'getui': {
        'enabled': 'false',
        'appId': '',
        'appKey': '',
        'appSecret': ''
    },
    'tabBar': {
        'color': '#777777',
        'selectedColor': '#00b4cb',
        'backgroundColor': '#fafafa',
        'borderColor': '#dfe1eb',
        'list': [{
                //'pagePath': '/pages/demo/router/tabbarItem1.js',
                'pagePath': '/pages/demo/hello/index.js',
                'text': '首页',
                'icon': 'bmlocal://assets/TabBar_Item1@2x.png',
                'selectedIcon': 'bmlocal://assets/TabBar_Item1_Selected@2x.png',
                'navShow': 'true',
                'navTitle': "首页"
            },
            {
                'pagePath': '/pages/demo/router/tabbarItem2.js',
                'text': '事件',
                'icon': 'bmlocal://assets/TabBar_Item2@2x.png',
                'selectedIcon': 'bmlocal://assets/TabBar_Item2_Selected@2x.png',
                'navShow': 'true',
                'navTitle': '事件'
            },
            {
                'pagePath': '/pages/demo/router/tabbarItem3.js',
                'text': '个人中心',
                'icon': 'bmlocal://assets/TabBar_Item3@2x.png',
                'selectedIcon': 'bmlocal://assets/TabBar_Item3_Selected@2x.png',
                'navShow': 'true',
                'navTitle': '我'
            }
        ]
    }
}