const elements = document.getElementsByTagName('*');
const keyword = '(guns|gun)';
// console.log('HERE ---------------------------------------------');

for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    for (let j = 0; j < element.childNodes.length; j++) {
        const node = element.childNodes[j];
        if (node.nodeType === 3) {
            const text = node.nodeValue;
            const replacedText = text.replace(/\b(guns|gun)\b/gi, '[Removed-word-here]');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        } else if (node.nodeName === 'IMG') {

            const srcMatch = node.getAttribute('src').match(/(guns|gun)/gi);
            const alt = node.getAttribute('alt');

            if (srcMatch) {
                console.log('srcMatch:', srcMatch);
                node.style.visibility = 'hidden';
            } else if (alt) {
                const altMatch = alt.match(/(guns|gun)/gi);

                if (altMatch) {
                    console.log('altMatch:', altMatch);
                    node.style.visibility = 'hidden';
                }
            }
        }
    }
}
