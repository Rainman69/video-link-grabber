// ==UserScript==
// @name         Video URL grabber 
// @namespace    https://github.com/Rainman69/video-link-grabber
// @homepage     https://github.com/Rainman69/video-link-grabber
// @icon         data:image/png;base64,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
// @version      1.0
// @description  Display video URLs and allow copying on the webpage while playing videos.
// @author       https://t.me/TheErfon
// @match        *://*/*
// @grant        GM_addStyle
// @license      CC BY-NC-ND 4.0
// @licenseURL   https://github.com/Rainman69/video-link-grabber/blob/main/LICENSE
// ==/UserScript==

(function() {
    'use strict';

    // Create a container for the video URLs
    var videoURLContainer = document.createElement('div');
    videoURLContainer.style.position = 'fixed';
    videoURLContainer.style.top = '10px';
    videoURLContainer.style.left = '10px';
    videoURLContainer.style.padding = '5px';
    videoURLContainer.style.background = 'none';
    videoURLContainer.style.color = '#000';
    videoURLContainer.style.fontFamily = 'Times New Roman, serif';
    videoURLContainer.style.fontSize = '10px';
    videoURLContainer.style.zIndex = '9999';
    videoURLContainer.style.cursor = 'pointer';
    videoURLContainer.style.userSelect = 'none';
    videoURLContainer.style.opacity = '0';
    videoURLContainer.style.transition = 'opacity 0.3s ease-in-out';

    // Function to extract video URLs from <video> elements
    function extractVideoURLs() {
        var videoElements = document.getElementsByTagName('video');
        var videoURLs = [];

        for (var i = 0; i < videoElements.length; i++) {
            var videoElement = videoElements[i];
            var videoURL = videoElement.currentSrc || videoElement.src;
            if (videoURL) {
                videoURLs.push(videoURL);
            }
        }

        return videoURLs;
    }

    // Update the video URLs in the container
    function updateVideoURLs() {
        var videoURLs = extractVideoURLs();
        if (videoURLs.length > 0) {
            videoURLContainer.textContent = videoURLs.join('\n');
        } else {
            videoURLContainer.textContent = 'No video URLs found.';
        }
    }

    // Copy the video URL to the clipboard
    function copyURL() {
        var textarea = document.createElement('textarea');
        textarea.value = videoURLContainer.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Display a confirmation message
        videoURLContainer.style.opacity = '1';
        videoURLContainer.textContent = 'URL copied!';
        setTimeout(function() {
            videoURLContainer.style.opacity = '0';
            updateVideoURLs();
        }, 3000);
    }

    // Call the updateVideoURLs function initially
    updateVideoURLs();

    // Add the video URL container to the document body
    document.documentElement.appendChild(videoURLContainer);

    // Update the video URLs whenever the video elements on the page change
    var observer = new MutationObserver(updateVideoURLs);
    observer.observe(document.documentElement, { subtree: true, childList: true });

    // Show the video URL container when clicked
    videoURLContainer.addEventListener('click', copyURL);

    // Hide the video URL container on scroll
    var isScrolling;
    window.addEventListener('scroll', function() {
        videoURLContainer.style.opacity = '0';
        clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            videoURLContainer.style.opacity = '1';
        }, 300);
    });

    // Get the most used color on the target site and change the text color accordingly
    var colors = {};
    var elements = document.querySelectorAll('*');
    Array.prototype.forEach.call(elements, function(element) {
        var computedStyle = getComputedStyle(element);
        var color = computedStyle.color;
        if (color in colors) {
            colors[color]++;
        } else {
            colors[color] = 1;
        }
    });
    var mostUsedColor = Object.keys(colors).reduce(function(a, b) {
        return colors[a] > colors[b] ? a : b;
    }, '');
    videoURLContainer.style.color = mostUsedColor;

    // Add the custom styles to the page using GM_addStyle
    GM_addStyle(`
        * {
            color: ${mostUsedColor} !important;
        }
    `);
})();
