/*
 * @Author: 夏民喜
 * @Date: 2019-10-12 17:42:53
 * @LastEditors: 夏民喜
 * @LastEditTime: 2019-12-05 13:56:44
 * @Description: 主题功能文件
 */
module.exports = {
    colorList: [
        { key: '#f5222d', title: '薄暮' },
        { key: '#fa541c', title: '火山' },
        { key: '#faad14', title: '日暮' },
        { key: '#13c2c2', title: '明青' },
        { key: '#52c412', title: '极光青' },
        { key: '#1890ff', title: '拂晓蓝（默认）' },
        { key: '#2f54eb', title: '极客蓝' },
        { key: '#722ed1', title: '酱紫' }
    ],
    changeTheme: (e) => {
        localStorage.setItem("theme", e);
        window.less
            .modifyVars({
                // 全局主色
                "@primary-color": e,
                // 链接色
                "@link-color": e,
                // 成功色
                // "@success-color": e,
                // 警告色
                // "@warning-color": e,
                // 错误色
                // "@error-color": e,
                // 主字号
                // "@font-size-base": e,
                // 标题色
                "@heading-color": e,
                // 主文本色
                // "@text-color": e,
                // 次文本色
                "@text-color-secondary": e,
                // 失效色
                // "@disabled-color": e,
                // 组件/浮层圆角
                "@border-radius-base": e,
                // 边框色
                "@border-color-base": e,
                // 浮层阴影
                "@box-shadow-base": e,
                "@primary-bg": e
            })
            .then(less => console.log(less))
            .catch(error => {
                console.error(`Failed to update theme`);
            })
    }
}

