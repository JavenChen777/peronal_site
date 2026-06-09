import type { Tool } from '@/types/tool';

export const tools: Tool[] = [
  {
    slug: 'auto-shutdown',
    name: 'AutoShutdown',
    description: 'Windows 桌面工具，满足条件时自动执行关机 / 重启 / 睡眠。',
    longDescription: `## AutoShutdown

一个基于 Win32 的 Windows 桌面工具，用于在满足条件时自动执行电源动作（关机 / 重启 / 睡眠）。

**目标：** 轻量、无额外框架依赖，配置简单，支持托盘后台运行。

## 功能总览

- **倒计时触发** — 按小时 / 分钟 / 秒设置倒计时，到时后自动执行所选动作，可随时取消
- **网络低流量触发** — 监控网卡接收流量，持续低于阈值（KB/s）达到指定时长后触发
- **进程锁定监控** — 锁定指定进程，基于该进程的估算网速判断是否触发
- **可执行动作** — 关机（Shutdown）/ 重启（Reboot）/ 睡眠（Sleep）
- **托盘常驻** — 支持最小化 / 关闭到托盘，双击恢复，右键菜单退出
- **中英文界面** — 支持 English / 中文切换
- **设置持久化** — 配置写入注册表 \`HKCU\\Software\\AutoShutdown\`

## 工作机制

- 倒计时模块：后台线程每秒递减，归零后回调执行动作
- 网络监控模块：每秒读取网卡接收字节，计算速率并累计"低于阈值"的持续时间
- 触发执行模块：根据当前动作类型调用系统 API 执行关机 / 重启 / 睡眠

## 环境要求

- Windows 10 / 11
- CMake 3.20+
- 支持 C++17 的编译器（推荐 MSVC / Visual Studio 2022）

## Tech Used

C++ · Win32 API · CMake`,
    category: 'productivity',
    tags: ['windows', 'shutdown', 'automation', 'tray', 'network-monitor', 'cpp', 'win32'],
    icon: '⏻',
    githubUrl: 'https://github.com/JavenChen777/auto_shutdown',
    downloadUrl: 'https://pan.quark.cn/s/90ce12eea4dc',
    status: 'stable',
    featured: true,
    screenshots: ['/screenshots/screen_shot.png'],
  },
  {
    slug: 'todo-list',
    name: 'ToDoList',
    description: 'Windows 待办事项管理程序，支持分类、优先级、统计图表与外部 API。',
    longDescription: `## ToDoList

一个功能完整的 Windows 待办事项管理程序，使用 C++ 和 Qt6 框架开发，贴纸风格界面，支持深色/浅色主题。

## 功能特性

### 核心功能
- 任务的新增、编辑、删除、批量删除
- 标记任务为已完成 / 待办
- 任务搜索和过滤（按状态、关键词）
- 任务分类、优先级、截止日期、标签管理
- 数据持久化（JSON 格式），支持自动备份、损坏恢复、原子写入
- 开机自动启动，启动时最小化到系统托盘

### 自动弹出 / 隐藏
- 可配置的自动显示间隔（分钟）和自动隐藏延迟（秒）
- 点击窗口取消自动隐藏（进入手动模式）

### 统计与分析
- 任务完成趋势图（最近 7 天）
- 分类分布饼图
- 优先级分布柱状图
- 完成率统计

### 外部 API 接口
- **网络 API** — HTTP REST API，默认监听 \`127.0.0.1:8888\`，仅本机访问
- **本地 API** — IPC 命名管道
- 支持 PowerShell、Python、curl 等多种调用方式

## 环境要求

- Windows 10 / 11
- Qt 6.2+（含 Qt Charts 组件）
- CMake 3.16+
- MSVC 2019 或更高版本（或 MinGW）

## Tech Used

C++ · Qt6 · Qt Charts · CMake · JSON`,
    category: 'productivity',
    tags: ['windows', 'todo', 'task-manager', 'qt', 'cpp', 'tray', 'statistics', 'api'],
    icon: '✅',
    githubUrl: 'https://github.com/JavenChen777/toDoList',
    downloadUrl: 'https://pan.quark.cn/s/e9bbb26d587e',
    status: 'stable',
    featured: true,
    screenshots: ['/screenshots/todolist.png'],
  },
  {
    slug: 'accounts-keeper',
    name: 'AccountsKeeper',
    description: '轻量原生 Windows 密码管理器，DPAPI 加密 + Supabase 云同步，无第三方库依赖。',
    longDescription: `## AccountsKeeper

一个轻量的原生 Windows 密码管理器，使用纯 C++ 和 Win32 API 编写，无任何第三方库依赖。

## 功能特性

### 账户管理
- 原生 Win32 列表视图，支持 Product/URL、Username、Password、备注、创建日期等字段
- 账户编辑面板，Password 字段支持显示 / 隐藏切换
- 工具栏操作：刷新、新建、保存、删除、一键复制用户名 / 密码

### 安全与加密
- **客户端 DPAPI 加密** — 所有账户字段使用 Windows DPAPI（\`dpapi:v1:\` 前缀）加密后才离开本机，Supabase 仅存储密文
- **密码绑定当前 Windows 用户**，其他机器或用户无法解密

### 云同步与离线回退
- **Supabase 云同步** — 通过环境变量 \`SUPABASE_URL\` / \`SUPABASE_KEY\` 配置，支持完整 CRUD
- **离线回退** — 无法连接 Supabase 时自动使用本地 JSON 备份（\`%APPDATA%\\AccountsKeeper\\accounts_backup.json\`）
- **自动上传** — 下次成功刷新时，将仅存于本地的账户自动同步到云端

### 系统集成
- **全局热键** — \`Ctrl + Alt + K\` 在任意位置切换窗口显示 / 隐藏
- **系统托盘** — 关闭窗口时最小化到托盘，支持托盘菜单重新打开或完全退出
- **单实例** — 再次启动时将已有窗口带至前台
- **开机启动** — 可通过设置面板勾选，写入 / 移除 Windows \`Run\` 注册表项
- **代理支持** — 可选 HTTP 代理，支持用户名 / 密码认证，代理密码经 DPAPI 加密存储
- **设置持久化** — 代理与启动偏好保存至 \`%APPDATA%\\AccountsKeeper\\settings.ini\`

## 环境要求

- Windows 10 / 11
- Visual Studio 2022（Desktop development with C++ 工作负载）
- CMake 3.20+ 或直接使用 \`build_msvc.bat\`

## Tech Used

C++ · Win32 API · DPAPI · Supabase · CMake`,
    category: 'productivity',
    tags: ['windows', 'password-manager', 'security', 'dpapi', 'supabase', 'cpp', 'win32', 'tray', 'encryption'],
    icon: '🔑',
    githubUrl: 'https://github.com/JavenChen777/accounts_keeper',
    status: 'stable',
    featured: false,
    screenshots: ['/screenshots/accountskeeper.png'],
  },
];

export default tools;
