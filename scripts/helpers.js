/** 
  * @function loadScript
  * @param {string} src - Download link
  * @returns {Promise<script>} Promise object represents the object script
  * @description Returns a promise when loading
  */
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script loading error ${src}`));

        document.head.append(script);
    });
}
/** 
  * @function loadStyle
  * @param {string} src - Download link
  * @returns {Promise<style>} Promise object represents the object style
  * @description Returns a promise when loading
  */
function loadStyle(src) {
    return new Promise(function (resolve, reject) {
        let style = document.createElement("link");
        style.href = src;
        style.setAttribute("rel", "stylesheet");

        style.onload = () => resolve(style);
        style.onerror = () => reject(new Error(`Style loading error ${src}`));

        document.head.append(style);
    });
}
async function loadLibrary(libraryObj) {
    if (libraryObj.style) await loadStyle(libraryObj.style);
    if (libraryObj.script) await loadScript(libraryObj.script);
}

/**
* The function calls a callback at any user interaction with the site, or 3 seconds after load
* @function
* @param {requestCallback} callback - The callback that handles the response.
*/
let notFirst = [];
async function firstInputEvent(callback) {
    const f = e => {
        if (notFirst.includes(callback)) return;
        if (e) e.currentTarget.removeEventListener(e.type, f);
        callback();
        notFirst.push(callback);
    }
    window.addEventListener('scroll', f, { once: true });
    window.addEventListener('click', f, { once: true });
    window.addEventListener('contextmenu', f, { once: true });
    window.addEventListener('mousemove', f, { once: true });
    window.addEventListener('touchstart', f, { once: true });
    window.addEventListener('load', () => {
        setTimeout(() => {
            f();
        }, 3000);
    });
}