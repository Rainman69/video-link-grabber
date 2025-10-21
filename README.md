# Video Link Grabber 🎬

[![License](https://img.shields.io/github/license/Rainman69/video-link-grabber)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-UserScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-Compatible-green.svg)](https://www.tampermonkey.net/)
[![Version](https://img.shields.io/badge/Version-1.0-blue.svg)](https://github.com/Rainman69/video-link-grabber)

A **powerful browser userscript** that automatically detects and extracts video URLs from any webpage, allowing you to **copy video links with a single click**. Perfect for content creators, researchers, and anyone who needs quick access to video URLs.

## ✨ Features

### 🎯 **Smart Video Detection**
- **Automatic scanning**: Detects all `<video>` elements on any webpage
- **Real-time monitoring**: Updates video list as page content changes
- **Multiple source support**: Handles `src` and `currentSrc` attributes
- **Universal compatibility**: Works on all websites with HTML5 videos

### 📋 **One-Click Copy**
- **Instant clipboard access**: Copy video URLs with a single click
- **Multiple URL support**: Copies all detected video URLs at once
- **Visual feedback**: Shows "URL copied!" confirmation message
- **Seamless integration**: Non-intrusive overlay design

### 🎨 **Adaptive Interface**
- **Smart color matching**: Automatically adapts text color to site theme
- **Minimal footprint**: Tiny 10px font, positioned unobtrusively
- **Scroll-responsive**: Hides during scrolling, reappears when idle
- **Fade transitions**: Smooth opacity animations for better UX

### 🔄 **Dynamic Updates**
- **Live monitoring**: Tracks DOM changes for new video elements
- **Auto-refresh**: Updates video list when content loads dynamically
- **Performance optimized**: Efficient mutation observer implementation

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- Userscript manager extension installed

### 1. Install Userscript Manager

#### For Chrome/Edge:
- Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

#### For Firefox:
- Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

#### For Safari:
- Install [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)

### 2. Install the Script

#### Method 1: Direct Installation (Recommended)
```bash
# Click this link to install directly:
https://raw.githubusercontent.com/Rainman69/video-link-grabber/main/video%20url.js
```

#### Method 2: Manual Installation
1. Open your userscript manager dashboard
2. Click **"Create a new script"** or **"+"**
3. Copy the contents of [`video url.js`](https://github.com/Rainman69/video-link-grabber/blob/main/video%20url.js)
4. Paste into the script editor
5. Save the script (Ctrl+S)

### 3. Start Using
1. Visit any webpage with HTML5 videos
2. Look for the small video URL indicator in the top-left corner
3. Click the indicator to copy all video URLs to clipboard
4. Paste the URLs wherever you need them!

## 📖 Usage Guide

### Basic Operation
1. **Navigate** to any webpage containing videos
2. **Locate** the video URL indicator (appears in top-left corner)
3. **Click** the indicator to copy all detected video URLs
4. **Receive** visual confirmation: "URL copied!"
5. **Paste** URLs in your preferred application

### Advanced Usage
- **Multiple videos**: Script automatically detects all videos on page
- **Dynamic content**: Works with videos loaded via JavaScript/AJAX
- **Streaming sites**: Compatible with most video streaming platforms
- **Social media**: Works on platforms like Twitter, Facebook, Instagram

### Supported Video Sources
- **Direct video files**: `.mp4`, `.webm`, `.ogg`, `.mov`
- **Streaming protocols**: HLS, DASH, WebRTC
- **CDN content**: Videos served from content delivery networks
- **Embedded players**: Most HTML5 video implementations

## 🛠️ Technical Details

### Script Architecture
```
video url.js
├── Video Detection Engine
│   ├── DOM Scanner
│   ├── URL Extractor
│   └── Real-time Monitor
├── User Interface
│   ├── Overlay Container
│   ├── Color Adaptation
│   └── Visual Feedback
└── Clipboard Integration
    ├── Copy Function
    └── Confirmation System
```

### Key Functions
- **`extractVideoURLs()`**: Scans DOM for video elements and extracts URLs
- **`updateVideoURLs()`**: Refreshes the video URL list in real-time
- **`copyURL()`**: Copies video URLs to clipboard with visual feedback
- **`MutationObserver`**: Monitors DOM changes for new video content

### Browser Compatibility
| Browser | Userscript Manager | Status |
|---------|-------------------|---------|
| **Chrome** | Tampermonkey | ✅ Fully Supported |
| **Firefox** | Greasemonkey/Tampermonkey | ✅ Fully Supported |
| **Edge** | Tampermonkey | ✅ Fully Supported |
| **Safari** | Userscripts | ✅ Supported |
| **Opera** | Tampermonkey | ✅ Supported |

## 🎯 Use Cases

### Content Creation
- **Video research**: Collect reference material URLs
- **Source attribution**: Get direct links for proper crediting
- **Backup creation**: Save video URLs for offline reference

### Educational
- **Research projects**: Gather video evidence and sources
- **Documentation**: Create bibliographies with video references
- **Study materials**: Collect educational video links

### Technical
- **Web development**: Extract video URLs for testing/debugging
- **Media analysis**: Get direct access to video files
- **Automation**: Feed URLs to download managers or scripts

### Social Media
- **Content sharing**: Get direct video links for sharing
- **Archiving**: Save important video content URLs
- **Cross-platform posting**: Extract videos for re-posting

## 🔧 Customization

### Position Adjustment
```javascript
// Modify these values in the script to change position:
videoURLContainer.style.top = '10px';    // Distance from top
videoURLContainer.style.left = '10px';   // Distance from left
```

### Appearance Settings
```javascript
// Customize appearance:
videoURLContainer.style.fontSize = '10px';        // Text size
videoURLContainer.style.fontFamily = 'Arial';     // Font family
videoURLContainer.style.padding = '5px';          // Container padding
```

### Timing Configuration
```javascript
// Adjust timing settings:
setTimeout(function() {
    videoURLContainer.style.opacity = '0';
    updateVideoURLs();
}, 3000);  // Change confirmation display duration
```

## 🚨 Troubleshooting

### Common Issues

#### Script Not Working
- ✅ Ensure userscript manager is installed and enabled
- ✅ Check if script is active in userscript manager dashboard
- ✅ Verify the webpage contains HTML5 video elements
- ✅ Try refreshing the page

#### No Videos Detected
- ✅ Confirm videos are HTML5 `<video>` elements (not Flash/other)
- ✅ Check if videos are loaded (some require playing first)
- ✅ Wait for dynamic content to fully load
- ✅ Try scrolling to make videos visible

#### Copy Function Not Working
- ✅ Check browser permissions for clipboard access
- ✅ Ensure you're clicking the video URL indicator
- ✅ Try using keyboard shortcut (Ctrl+C) after clicking
- ✅ Check if popup blockers are interfering

#### URLs Not Accessible
- ⚠️ Some videos may have access restrictions
- ⚠️ Private/authenticated content may not be accessible
- ⚠️ DRM-protected content cannot be directly accessed
- ⚠️ Some streaming services use encrypted URLs

### Debug Mode
```javascript
// Add this to the script for debugging:
console.log('Video URLs found:', extractVideoURLs());
console.log('Container element:', videoURLContainer);
console.log('Observer status:', observer);
```

## 📋 Supported Websites

### Video Platforms
- ✅ **YouTube** (some videos)
- ✅ **Vimeo** (direct videos)
- ✅ **Daily Motion** (HTML5 videos)
- ✅ **Twitch** (VODs)
- ✅ **Facebook Videos**
- ✅ **Instagram Videos**
- ✅ **Twitter Videos**

### News & Media
- ✅ **News websites** with HTML5 video players
- ✅ **Educational platforms** (Khan Academy, Coursera)
- ✅ **Corporate websites** with embedded videos
- ✅ **Blog posts** with video content

### Limitations
- ❌ **DRM-protected content** (Netflix, Hulu, Disney+)
- ❌ **Flash-based players** (legacy content)
- ❌ **Heavily encrypted streams** (some premium services)
- ❌ **Live streams** with dynamic URLs

## 🔐 Privacy & Security

- **No data collection**: Script doesn't send data to external servers
- **Local processing**: All operations happen in your browser
- **No tracking**: No user behavior monitoring or analytics
- **Open source**: Full code transparency for security review
- **Minimal permissions**: Only requires basic webpage access

## ⚖️ Legal Considerations

### Usage Guidelines
- **Respect copyright**: Only extract URLs for content you have rights to access
- **Follow ToS**: Comply with individual website terms of service
- **Personal use**: Intended for legitimate personal and educational purposes
- **No redistribution**: Don't redistribute extracted content without permission

### Ethical Use
- ✅ **Educational research** and documentation
- ✅ **Personal archiving** of accessible content
- ✅ **Web development** and testing purposes
- ❌ **Commercial redistribution** without proper licensing
- ❌ **Circumventing paywalls** or access restrictions
- ❌ **Mass downloading** of copyrighted content

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Test on multiple browsers and websites
- Document any new features or changes
- Ensure compatibility with major userscript managers

## 📄 License

[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International](LICENSE)

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Rainman69/video-link-grabber/issues)
- **Telegram**: [@TheErfon](https://t.me/TheErfon)
- **Discussions**: [GitHub Discussions](https://github.com/Rainman69/video-link-grabber/discussions)

## 🔗 Related Projects

- **[CafeBazaar-Downloader](https://github.com/Rainman69/CafeBazaar-Downloader)**: APK downloader userscript
- **[Sticky-note-for-browser](https://github.com/Rainman69/Sticky-note-for-browser)**: Browser note-taking tool
- **[live-Time-date-for-browser](https://github.com/Rainman69/live-Time-date-for-browser)**: Time/date display userscript

---

**Made with ❤️ for the web scraping community**