import { FileType } from "../model/FileType";
import { saveAs } from 'file-saver';

class FileService {
    private constructor() { }

    public static saveFile(content: any, filename: string, type: FileType) {
        const file = new Blob([content], { type });
        if (window.navigator.msSaveOrOpenBlob)
            window.navigator.msSaveOrOpenBlob(file, filename);
        else {
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }

    public static saveSVG(svg: any) {
        const save = (dataBlob: any, filesize: string) => {
            saveAs(dataBlob, 'chart.png');
        }
        let svgString = this.getSVGString(svg.node())
        this.svgString2Image(svgString, 2 * svg.attr('width'), 2 * svg.attr('height'), 'png', save);
    }

    private static getSVGString(svgNode: any) {
        svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
        const cssStyleText = getCSSStyles(svgNode);
        appendCSS(cssStyleText, svgNode);
        const serializer = new XMLSerializer();
        let svgString = serializer.serializeToString(svgNode);
        svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink=');
        svgString = svgString.replace(/NS\d+:href/g, 'xlink:href');
        return svgString;

        function getCSSStyles(parentElement: any) {
            let selectorTextArr = [];
            // Add Parent element Id and Classes to the list
            selectorTextArr.push('#' + parentElement.id);
            for (let c = 0; c < parentElement.classList.length; c++)
                if (!contains('.' + parentElement.classList[c], selectorTextArr))
                    selectorTextArr.push('.' + parentElement.classList[c]);
            // Add Children element Ids and Classes to the list
            const nodes = parentElement.getElementsByTagName("*");
            for (let i = 0; i < nodes.length; i++) {
                const id = nodes[i].id;
                if (!contains('#' + id, selectorTextArr))
                    selectorTextArr.push('#' + id);
                const classes = nodes[i].classList;
                for (let c = 0; c < classes.length; c++)
                    if (!contains('.' + classes[c], selectorTextArr))
                        selectorTextArr.push('.' + classes[c]);
            }
            // Extract CSS Rules
            var extractedCSSText = "";
            for (let i = 0; i < document.styleSheets.length; i++) {
                let s: any = document.styleSheets[i];
                try {
                    if (!s.cssRules) continue;
                } catch (e) {
                    if (e.name !== 'SecurityError') throw e;
                    continue;
                }
                const cssRules = s.cssRules;
                for (let r = 0; r < cssRules.length; r++) {
                    if (contains(cssRules[r].selectorText, selectorTextArr))
                        extractedCSSText += cssRules[r].cssText;
                }
            }
            return extractedCSSText;
            function contains(str: string, arr: string[]) {
                return arr.indexOf(str) === -1 ? false : true;
            }

        }

        function appendCSS(cssText: string, element: any) {
            var styleElement = document.createElement("style");
            styleElement.setAttribute("type", "text/css");
            styleElement.innerHTML = cssText;
            var refNode = element.hasChildNodes() ? element.children[0] : null;
            element.insertBefore(styleElement, refNode);
        }
    }

    private static svgString2Image(svgString: string, width: number, height: number, format: string, callback: any) {
        var format = format ? format : 'png';
        var imgsrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        var image = new Image();
        image.onload = function () {
            context?.clearRect(0, 0, width, height);
            context?.drawImage(image, 0, 0, width, height);
            canvas.toBlob(function (blob: any) {
                var filesize = Math.round(blob.length / 1024) + ' KB';
                if (callback) callback(blob, filesize);
            });
        };
        image.src = imgsrc;
    }
}

export default FileService;