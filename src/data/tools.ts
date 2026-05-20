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
];

export default tools;
