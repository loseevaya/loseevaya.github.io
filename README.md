# 我的个人学术主页

参考 [Jingye Chen 的主页](https://jingyechen.github.io/) 风格制作的个人主页模板。

## 项目结构

```
个人主页/
├── index.html          # 主页内容（文字、论文、经历都在这里改）
├── css/
│   └── style.css       # 样式（颜色、布局）
├── js/
│   └── main.js         # 导航高亮等交互
├── assets/
│   ├── avatar.svg      # 头像占位图，请替换为 avatar.jpg 等真实照片
│   ├── pub1.svg        # 论文配图占位
│   ├── pub2.svg        # 论文配图占位
│   └── CV.txt          # 简历占位文件，请替换为 CV.pdf
└── README.md
```

## 本地预览

方法一：直接用浏览器打开 `index.html` 即可查看。

方法二（推荐，更接近真实部署）：在项目目录启动一个本地服务器。

- Python 3：`python -m http.server 8000`
- 然后浏览器访问 http://localhost:8000

## 自定义内容

1. **基本信息**：打开 `index.html`，替换“你的名字”“某某大学”“you@example.edu”等文字。
2. **头像**：把真实照片放到 `assets/` 目录，并在 `index.html` 中把 `assets/avatar.svg` 改为你的照片文件名（如 `assets/avatar.jpg`）。
3. **论文**：替换论文标题、作者、会议名，以及 `assets/pub1.svg`、`assets/pub2.svg` 为论文配图。
4. **简历**：把 `CV.pdf` 放到 `assets/`，并修改 `index.html` 中 CV 链接为 `assets/CV.pdf`。
5. **颜色/布局**：在 `css/style.css` 中修改。

## 部署到 GitHub Pages

1. 注册/登录 [GitHub](https://github.com)。
2. 新建仓库，仓库名取为 `你的用户名.github.io`（必须与用户名完全一致）。
   - 例如用户名 `zhangsan`，仓库名就是 `zhangsan.github.io`。
3. 把本项目文件上传到该仓库（可在网页上拖拽上传，或用 git 命令）。
4. 进入仓库的 `Settings` → `Pages`，确认 `Source` 选择 `Deploy from a branch`，分支选择 `main`、目录选择 `/ (root)`，保存。
5. 等待 1~2 分钟，访问 `https://你的用户名.github.io` 即可看到主页。

> 如果还没有 git，可以参考：
> ```bash
> git init
> git add .
> git commit -m "init homepage"
> git branch -M main
> git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
> git push -u origin main
> ```

## 下一步建议

- 把“新闻”“论文”换成真实内容。
- 添加 Google Scholar / GitHub / 邮箱的真实链接。
- 可增加“项目经历”“教学”等板块。
