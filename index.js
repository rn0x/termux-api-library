import execut from './child_process.js';
import fetch from 'node-fetch';
import fs from 'fs-extra';

class Api {

    constructor() {

        /**
         * Play specified file using Media Player API.   
         * 
         * @example 
         * await api.termux_media_player.info()
         * await api.termux_media_player.play()
         * await api.termux_media_player.pause()
         * await api.termux_media_player.stop()
         * 
        */

        this.termux_media_player = {

            /**
             * Displays current playback information
             * 
             * @example 
             * 
             * import api from './index.js';
             *
             * const info = await api.termux_media_player.info();
             * console.log(info);
             * 
             * @return {Promise<string>} Output .  
            */

            info: async () => {
                let Output = await execut('termux-media-player info');
                return Output
            },
            /**
             * Resumes playback if paused
             * 
             * @example 
             * 
             * import api from './index.js';
             *
             * const play = await api.termux_media_player.play();
             * console.log(play);
             * 
             * 
             * @return {Promise<string>} Output .  
            */
            play: async () => {
                let Output = await execut('termux-media-player play');
                return Output
            },
            /**
             * Plays specified media file
             * 
             * @example 
             * 
             * import api from './index.js';
             *
             * const playFile = await api.termux_media_player.playFile(path);
             * console.log(playFile);
             * 
             * @param {string} path media file path
             * @return {Promise<string>} Output .  
            */
            playFile: async (path) => {
                let Output = await execut(`termux-media-player play ${path}`);
                return Output
            },
            /**
             * Pauses playback
             * 
             * @example 
             * 
             * import api from './index.js';
             *
             * const pause = await api.termux_media_player.pause();
             * console.log(pause);
             * 
             * 
             * @return {Promise<string>} Output .  
            */
            pause: async () => {
                let Output = await execut('termux-media-player pause');
                return Output
            },
            /**
             * Quits playback
             * 
             * @example 
             * 
             * import api from './index.js';
             *
             * const stop = await api.termux_media_player.stop();
             * console.log(stop);
             * 
             * 
             * @return {Promise<string>} Output .  
            */
            stop: async () => {
                let Output = await execut('termux-media-player stop');
                return Output
            },
        }
    }

    /**
     * List call log history.
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * await api.termux_call_log(10 , (e) => {
     *    console.log(e);
     * })
     *
     * @param {(number|string)} limit - offset in call log list
     * @param {function} callback return Output displayed in json format. 
    **/

    async termux_call_log(limit, callback) {

        await execut(`termux-call-log -l ${limit}`, (e) => {
            callback(JSON?.parse(e))
        });
    }

    /**
     * Get the status of the device battery. 
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * await api.termux_battery_status((e) => {
     *    console.log(e);
     * })
     *
     * @param {function} callback return Output is returned in json format. 
     */

    async termux_battery_status(callback) {

        await execut('termux-battery-status', (e) => {
            callback(JSON?.parse(e))
        });
    }


    /**
     * Get information about device camera(s). 
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * await api.termux_camera_info((e) => {
     *    console.log(e);
     * })
     *
     * @param {function} callback This program does not take any arguments.
     * Output is returned in json format. . 
     */

    async termux_camera_info(callback) {

        await execut('termux-camera-info', (e) => {
            callback(JSON?.parse(e))
        });
    }


    /**
     * Set the screen brightness between 0 and 255.
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * await api.termux_brightness(brightness)
     *
     * @param {(number|string)} brightness  Brightness value should be between 0 and 255 or auto.
     */

    async termux_brightness(brightness) {

        await execut(`termux-brightness ${brightness}`);
    }

    /**
     * Take a photo and save it to a file in JPEG format.
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * await api.termux_camera_photo(0, './test.jpeg')
     *
     * @param {(number|string)} camera_id ID of the camera to use , default: 0
     * @param {string} path Photo is saved at specified file path
     */

    async termux_camera_photo(camera_id, path) {

        await execut(`termux-camera-photo -c ${camera_id} ${path}`);
    }

    /**
     * Get the system clipboard text.  
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * await api.termux_clipboard_get((e) => {
     *    console.log(e);
     * })
     *
     * @param {function} callback This program does not take any arguments.
     * Output is returned in plain text. 
     */

    async termux_clipboard_get(callback) {

        await execut('termux-clipboard-get', (e) => {
            callback(e)
        });
    }

    /**
     * Set the system clipboard text. The text to set is either supplied as arguments or read from stdin if no arguments are given.   
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * await api.termux_clipboard_set("hello world")
     *
     * @param {string} text Text is read either from standard input or from command line arguments. 
     *  
     */

    async termux_clipboard_set(text) {

        await execut(`termux-clipboard-set ${text}`);
    }

    /** 
     * List all contacts. 
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * await api.termux_contact_list((e) => {
     *    console.log(e);
     * })
     *
     * @param {function} callback This program does not take any arguments. 
     * Output is returned in json format. 
     */

    async termux_contact_list(callback) {

        await execut('termux-contact-list', (e) => {
            callback(JSON?.parse(e))
        });
    }

    /**
     * Show dialog widget for user input. 
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * const hint = 'Put your password here'
     * const title = 'input password'
     * 
     * await api.termux_dialog(hint, title, false, true, true, (e) => {
     *    console.log(e);
     * })
     *
     * @param {string} hint text hint 
     * @param {string} title set title of dialog
     * @param {boolean} multiple_lines multiple lines instead of single : true or false
     * @param {boolean} inputNumbers enter input as numbers : true or false
     * @param {boolean} inputPassword enter input as password : true or false
     * @param {function} callback This program does not take any arguments. 
     * Output is returned in json format. 
     */

    async termux_dialog(hint, title, multiple_lines, inputNumbers, inputPassword, callback) {

        let m = multiple_lines ? '-m' : '';
        let n = inputNumbers ? '-n' : '';
        let p = inputPassword ? '-p' : '';

        if (multiple_lines !== inputNumbers) {

            await execut(`termux-dialog -i ${hint} -t ${title} ${m} ${n}, ${p}`, (e) => {
                callback(JSON?.parse(e))
            });

        }

        else {
            callback('Erorr : It is not possible to add multiple lines to my numbers')
        }
    }

    /**
     * Download Files . 
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * const url = 'https://example.com/image.jpeg'
     * const filename = 'photo_2022'
     * const savePath = '/data/data/com.termux/files/home'
     * 
     * await api.termux_download(url, filename, savePath)
     * 
     * @param {string} url The link of the file you want to download 
     * @param {string} filename file name
     * @param {string} savePath path to save the downloaded file
     * @return {array} Return the path of the downloaded file
     *
     */

    async termux_download(url, filename, savePath) {

        let response = await fetch(url, { method: 'GET' }).catch(e => { return { message: 'Error : Get url info not found !' } })

        if (response === 'Error : Get url info not found !') {

            console.log(response);

        }

        else {
            let format = response?.headers?.raw()['content-type'][0]?.split('/')[1];
            let buffer = await response?.arrayBuffer();
            let PATH = savePath?.slice(-1) === '/' ? savePath?.slice(0, -1) : savePath
            fs.writeFileSync(`${PATH}/${filename?.split('.')[0]}.${format}`, Buffer.from(buffer))

            return {
                message: `Save files ${PATH}/${filename?.split('.')[0]}.${format}`,
                path: `${PATH}/${filename?.split('.')[0]}.${format}`
            }
        }

    }

    /** 
     * Use fingerprint sensor on device to check for authentication. 
     * 
     * This API is available only for devices running Android 6 (Marshmallow) or higher.  
     * 
     * @example 
     * 
     * import api from './index.js';
     *
     * 
     * await api.termux_fingerprint((e) => {
     *    console.log(e);
     * })
     *
     * @param {function} callback This program does not take any arguments. 
     * Output is returned in json format. 
     */

    async termux_fingerprint(callback) {

        await execut('termux-fingerprint', (e) => {
            callback(JSON?.parse(e))
        });
    }

    /** 
     * Get the device location. 
     * 
     * 1- GPS likely will not work in buildings as device must be exposed to satellite signal.
     
     * 2- GPS also requires that your device clock is set correctly. For the answer to question why, learn how GPS works.
    
     * 3- Do not expect immediate location result. Even network location request may take some time. 
     * 
     * @example 
     * 
     * import api from './index.js';
     * 
     * 
     * await api.termux_location("gps", "once", (e) => {
     *    console.log(e);
     * })
     * 
     * or
     * 
     * const data = await api.termux_location('gps', 'once')
     * console.log(data);
     *
     * @param {"gps" | "network" | "passive"} provider location provider (default: gps)
     * @param {"once" | "last" | "updates"} request kind of request to make (default: once)
     * @param {function} callback Output displayed in json format. 
     * @return {object} Output displayed in json format.  
     */

    async termux_location(provider, request, callback) {

        let Output = await execut(`termux-location -p ${provider} -r ${request}`);

        if (callback) {

            callback(JSON?.parse(Output));

        }

        return JSON?.parse(Output);
    }


}

export default new Api